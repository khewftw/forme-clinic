const surgeons = [
  {
    slug: "temircheva-valeriya-vasilevna",
    name: "Темирчевой В.В.",
  },
  {
    slug: "terenteva-olga-andreevna",
    name: "Терентьевой О.А.",
  },
  {
    slug: "kuznetsova-golovina-nataliya-vadimovna",
    name: "Кузнецовой Н.В.",
  },
];

for (const surgeon of surgeons) {
  const url = `https://formeclinic.ru/doctors/${surgeon.slug}`;
  const res = await fetch(url);
  const html = await res.text();
  console.log(`\n=== ${surgeon.name} ===`);

  const works = [...html.matchAll(/Работа пластического хирурга[^<]+/g)].map((m) =>
    m[0].replace(/&nbsp;/g, " ").trim(),
  );
  works.forEach((w) => console.log(w));

  const cards = [...html.matchAll(
    /<div class="el-item uk-panel[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g,
  )];
  console.log("cards", cards.length);
}

const page = await fetch("https://formeclinic.ru/do-i-posle-plastiki/uvelichenie-grudi");
const html = await page.text();
const works = [...html.matchAll(/Работа пластического хирурга[^<]+/g)].map((m) =>
  m[0].replace(/&nbsp;/g, " ").trim(),
);
console.log("\n=== uvelichenie-grudi works ===");
works.forEach((w) => console.log(w));
