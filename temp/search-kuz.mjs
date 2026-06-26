const urls = [
  "https://formeclinic.ru/doctors/kuznetsova-golovina-nataliya-vadimovna",
  "https://formeclinic.ru/do-i-posle-plastiki",
  "https://formeclinic.ru/plasticheskaia-khirurgiya/plastika-grudi-molochnykh-zhelez/uvelichenie-grudi",
];

for (const url of urls) {
  const html = await (await fetch(url)).text();
  const imgs = [...new Set(
    [...html.matchAll(/(?:src|href)="(\/images\/works\/[^"]+)"/g)]
      .map((m) => m[1].split("#")[0])
      .filter((u) => /kuznetsova|golovina|kuzn/i.test(u)),
  )];
  console.log(url, imgs.length);
  imgs.forEach((u) => console.log(" ", u));
}
