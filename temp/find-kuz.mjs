const html = await (await fetch("https://formeclinic.ru/do-i-posle-plastiki/uvelichenie-grudi")).text();

const blocks = [...html.matchAll(
  /class="el-meta uk-text-emphasis[^"]*">([\s\S]*?)<\/div>([\s\S]{0,5000})/g,
)];

const items = [];
for (const block of blocks) {
  const label = block[1].replace(/&nbsp;/g, " ").trim();
  if (!/увеличение груди/i.test(label)) continue;
  const chunk = block[2];
  const imgs = [...chunk.matchAll(/(?:src|href)="(\/images\/works\/[^"]+\.(?:png|jpg|jpeg|webp))"/g)].map(
    (m) => m[1].split("#")[0],
  );
  const unique = [...new Set(imgs)];
  if (unique.length < 2) continue;
  items.push({ label, before: unique[0], after: unique[1] });
}

const kuz = items.filter((item) => /kuznetsova|golovina/i.test(item.before + item.after));
console.log("kuznetsova", kuz.length);
kuz.forEach((item) => console.log(item));

const ter = items.filter((item) => /terenteva/i.test(item.before));
console.log("\nterenteva", ter.length);
ter.forEach((item, i) => console.log(i + 1, item.label, item.before));

const tem = items.filter((item) => /temircheva/i.test(item.before));
console.log("\ntemircheva", tem.length);
