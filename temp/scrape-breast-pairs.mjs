import fs from "node:fs";

const surgeons = {
  temircheva: {
    slug: "temircheva-valeriya-vasilevna",
    captionPrefix: "Темирчевой В.В.",
  },
  terenteva: {
    slug: "terenteva-olga-andreevna",
    captionPrefix: "Терентьевой О.А.",
  },
  kuznetsova: {
    slug: "kuznetsova-golovina-nataliya-vadimovna",
    captionPrefix: "Кузнецовой (Головиной) Н.В.",
  },
};

function cleanPath(url) {
  return url.split("#")[0];
}

function decode(text) {
  return text.replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

for (const [key, surgeon] of Object.entries(surgeons)) {
  const html = await (await fetch(`https://formeclinic.ru/doctors/${surgeon.slug}`)).text();
  const items = [...html.matchAll(
    /<li class="el-item">([\s\S]*?)<\/li>/g,
  )];

  const breast = [];
  for (const item of items) {
    const chunk = item[1];
    const meta = chunk.match(/class="el-meta[^"]*">([^<]+)/);
    const title = chunk.match(/class="el-title[^"]*">[\s\S]*?>([^<]+)/);
    const imgs = [...chunk.matchAll(/(?:data-src|src|href)="(\/images\/works\/[^"]+)"/g)].map((m) =>
      cleanPath(m[1]),
    );
    const uniqueImgs = [...new Set(imgs)];
    const label = meta ? decode(meta[1]) : title ? decode(title[1]) : "";
    if (!/груд|увеличение груди/i.test(label)) continue;
    if (uniqueImgs.length < 2) continue;
    breast.push({ label, imgs: uniqueImgs.slice(0, 2) });
  }

  console.log(`\n=== ${key}: ${breast.length} breast pairs ===`);
  breast.forEach((b, i) => console.log(i + 1, b.label, b.imgs));
}
