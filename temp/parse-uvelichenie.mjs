const html = await (await fetch("https://formeclinic.ru/do-i-posle-plastiki/uvelichenie-grudi")).text();

const sections = html.split('class="el-meta uk-text-emphasis uk-margin-small-top">');
const items = [];

for (let i = 1; i < sections.length; i++) {
  const labelEnd = sections[i].indexOf("</div>");
  const label = sections[i].slice(0, labelEnd).replace(/&nbsp;/g, " ").trim();
  if (!/увеличение груди/i.test(label)) continue;

  const chunk = sections[i].slice(0, 3500);
  const imgs = [...chunk.matchAll(/src="(\/images\/works\/[^"]+\.(?:png|jpg|jpeg|webp))"/g)].map(
    (m) => m[1],
  );
  const unique = [...new Set(imgs)];
  const surgeon = chunk.match(/Темирчев|Терентьев|Кузнецов|Головин/i)?.[0] ?? null;
  const content = chunk.match(/class="el-content[^"]*">([^<]+)/)?.[1]?.trim() ?? null;

  if (unique.length >= 2) {
    items.push({ label, surgeon, content, before: unique[0], after: unique[1] });
  }
}

const filtered = items.filter(
  (item) =>
    item.before.includes("temircheva") ||
    item.before.includes("terenteva") ||
    item.before.includes("kuznetsova") ||
    item.before.includes("golovina"),
);

console.log("all", items.length, "filtered", filtered.length);
filtered.slice(0, 20).forEach((item, i) => {
  console.log(`\n${i + 1}. ${item.label}`);
  console.log(item.before);
  console.log(item.after);
  if (item.content) console.log("content:", item.content);
});
