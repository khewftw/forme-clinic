const urls = [
  "https://formeclinic.ru/do-i-posle-plastiki/uvelichenie-grudi",
  "https://formeclinic.ru/doctors/temircheva-valeriya-vasilevna",
  "https://formeclinic.ru/doctors/terenteva-olga-andreevna",
  "https://formeclinic.ru/doctors/kuznetsova-golovina-nataliya-vadimovna",
];

for (const url of urls) {
  const res = await fetch(url);
  const html = await res.text();
  console.log(`\n=== ${url} ===`);
  const captions = [...html.matchAll(/el-meta[^>]*>([^<]+)/g)]
    .map((m) => m[1].trim())
    .filter((t) =>
      /хирург|Mentor|имплант|мл|Темирчев|Терентьев|Кузнецов|Работа/i.test(t),
    );
  captions.forEach((c) => console.log(c));
  const imgs = [...html.matchAll(/(?:data-src|src)="([^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/gi)].map(
    (m) => m[1],
  );
  console.log("img count", imgs.length);
}
