import fs from "node:fs";

const html = await (await fetch("https://formeclinic.ru/doctors/temircheva-valeriya-vasilevna")).text();
fs.writeFileSync("temp/temircheva.html", html);

const imageUrls = [...new Set(
  [...html.matchAll(/(?:data-src|src|href)="(\/images\/[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/gi)].map(
    (m) => m[1],
  ),
)];

console.log("images", imageUrls.length);
imageUrls.forEach((u) => console.log(u));

const metas = [...html.matchAll(/class="el-meta[^"]*">([^<]+)/g)].map((m) =>
  m[1].replace(/&nbsp;/g, " ").trim(),
);
console.log("\nmetas:");
metas.forEach((m) => console.log(m));
