import fs from "node:fs";

const html = await (await fetch("https://formeclinic.ru/do-i-posle-plastiki/uvelichenie-grudi")).text();
fs.writeFileSync("temp/uvelichenie.html", html);

const imgs = [...new Set(
  [...html.matchAll(/(?:src|href|data-src)="(\/images\/works\/[^"]+)"/g)].map((m) => m[1].split("#")[0]),
)];

console.log("total images", imgs.length);
["temircheva", "terenteva", "kuznetsova", "golovina"].forEach((name) => {
  const filtered = imgs.filter((u) => u.includes(name));
  console.log(name, filtered.length);
  filtered.slice(0, 6).forEach((u) => console.log(" ", u));
});

const metas = [...html.matchAll(/class="el-meta uk-text-emphasis[^"]*">([^<]+)/g)].map((m) =>
  m[1].replace(/&nbsp;/g, " ").trim(),
);
console.log("\nmetas with груд:", metas.filter((m) => /груд/i.test(m)).slice(0, 15));
