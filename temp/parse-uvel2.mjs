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

  const details = chunk.match(/class="el-content[^"]*">([^<]+)/)?.[1]?.trim() ?? null;
  items.push({ label, before: unique[0], after: unique[1], details });
}

console.log("items", items.length);
items
  .filter((item) => /temircheva|terenteva|kuznetsova|golovina/i.test(item.before + item.after))
  .forEach((item, i) => {
    console.log(`\n${i + 1}. ${item.label}`);
    console.log(item.before);
    console.log(item.after);
    if (item.details) console.log(item.details);
  });
