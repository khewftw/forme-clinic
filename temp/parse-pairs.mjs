import fs from "node:fs";

function parseBreastPairs(html) {
  const pairs = [];
  const sections = html.split('class="el-meta uk-text-emphasis uk-margin-small-top">');

  for (let i = 1; i < sections.length; i++) {
    const labelEnd = sections[i].indexOf("</div>");
    const label = sections[i].slice(0, labelEnd).replace(/&nbsp;/g, " ").trim();
    if (!/увеличение груди/i.test(label)) continue;

    const chunk = sections[i].slice(0, 2500);
    const imgs = [...chunk.matchAll(/src="(\/images\/works\/[^"]+\.(?:png|jpg|jpeg|webp))"/g)].map(
      (m) => m[1],
    );
    const unique = [...new Set(imgs)];
    if (unique.length >= 2) {
      pairs.push({ label, before: unique[0], after: unique[1] });
    }
  }

  return pairs;
}

const surgeons = [
  ["temircheva", "temircheva-valeriya-vasilevna", "Темирчевой В.В."],
  ["terenteva", "terenteva-olga-andreevna", "Терентьевой О.А."],
  ["kuznetsova", "kuznetsova-golovina-nataliya-vadimovna", "Кузнецовой (Головиной) Н.В."],
];

const all = [];
for (const [key, slug, surgeonName] of surgeons) {
  const html = await (await fetch(`https://formeclinic.ru/doctors/${slug}`)).text();
  const pairs = parseBreastPairs(html);
  console.log(`\n${key}: ${pairs.length}`);
  pairs.forEach((p, idx) => {
    console.log(idx + 1, p.label);
    console.log(" ", p.before);
    console.log(" ", p.after);
    all.push({ key, surgeonName, ...p });
  });
}

console.log("\nTOTAL", all.length);
fs.writeFileSync("temp/breast-pairs.json", JSON.stringify(all, null, 2));
