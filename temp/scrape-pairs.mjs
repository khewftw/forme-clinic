const surgeons = [
  "temircheva-valeriya-vasilevna",
  "terenteva-olga-andreevna",
  "kuznetsova-golovina-nataliya-vadimovna",
];

function decodeHtml(text) {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#160;/g, " ")
    .trim();
}

for (const slug of surgeons) {
  const url = `https://formeclinic.ru/doctors/${slug}`;
  const html = await (await fetch(url)).text();
  console.log(`\n=== ${slug} ===`);

  const blocks = [...html.matchAll(
    /<div class="el-item uk-panel uk-margin-remove-first-child">([\s\S]*?)<\/div>\s*<\/div>/g,
  )];

  let count = 0;
  for (const block of blocks) {
    const chunk = block[1];
    const imgs = [...chunk.matchAll(/(?:data-src|src)="([^"]+\/images\/[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/gi)].map(
      (m) => m[1],
    );
    const meta = chunk.match(/class="el-meta[^"]*">([^<]+)/);
    const title = chunk.match(/class="el-title[^"]*">[\s\S]*?>([^<]+)/);
    if (imgs.length >= 2 || meta) {
      count++;
      console.log({
        title: title ? decodeHtml(title[1]) : null,
        meta: meta ? decodeHtml(meta[1]) : null,
        imgs: imgs.slice(0, 2),
      });
    }
  }
  console.log("matched blocks", count);
}
