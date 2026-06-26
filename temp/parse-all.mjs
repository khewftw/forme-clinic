const pages = [
  "https://formeclinic.ru/do-i-posle-plastiki/uvelichenie-grudi",
  "https://formeclinic.ru/doctors/kuznetsova-golovina-nataliya-vadimovna",
];

function parsePage(html, filter) {
  const sections = html.split(/class="el-meta uk-text-emphasis[^"]*">/);
  const items = [];

  for (let i = 1; i < sections.length; i++) {
    const labelEnd = sections[i].indexOf("</div>");
    const label = sections[i].slice(0, labelEnd).replace(/&nbsp;/g, " ").trim();
    if (!/увеличение груди/i.test(label)) continue;

    const chunk = sections[i].slice(0, 4000);
    const imgs = [...chunk.matchAll(/src="(\/images\/works\/[^"]+\.(?:png|jpg|jpeg|webp))"/g)].map(
      (m) => m[1],
    );
    const unique = [...new Set(imgs)];
    if (unique.length < 2) continue;
    if (filter && !filter(unique[0])) continue;
    items.push({ label, before: unique[0], after: unique[1] });
  }

  return items;
}

for (const url of pages) {
  const html = await (await fetch(url)).text();
  console.log(`\n=== ${url} ===`);
  const all = parsePage(html);
  console.log("all breast", all.length);
  all.slice(0, 5).forEach((item) => console.log(item));

  for (const name of ["temircheva", "terenteva", "kuznetsova", "golovina"]) {
    const filtered = parsePage(html, (src) => src.includes(name));
    console.log(name, filtered.length);
  }
}
