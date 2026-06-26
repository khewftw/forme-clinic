import fs from "node:fs";

const images = [
  {
    id: "operating",
    url: "https://formeclinic.ru/templates/yootheme/cache/d1/12-prichin-novyj-d1b7fbfb.webp",
  },
  {
    id: "reanimation",
    url: "https://formeclinic.ru/templates/yootheme/cache/83/banner7-83ce6271.webp",
  },
  {
    id: "wards",
    url: "https://formeclinic.ru/templates/yootheme/cache/d2/banner-mammo-mob-d242fa38.webp",
  },
  {
    id: "monitoring",
    url: "https://formeclinic.ru/templates/yootheme/cache/fc/reabilitatsiya-mob-fcf61159.webp",
  },
  {
    id: "experience",
    url: "https://formeclinic.ru/templates/yootheme/cache/e9/banner9-e938f966.webp",
  },
  {
    id: "support",
    url: "https://formeclinic.ru/templates/yootheme/cache/b2/frame-833-b2a4cf59.webp",
  },
];

fs.mkdirSync("public/images/why", { recursive: true });

for (const image of images) {
  const path = `public/images/why/${image.id}.webp`;
  if (!fs.existsSync(path)) {
    const res = await fetch(image.url);
    if (!res.ok) throw new Error(`${image.url} -> ${res.status}`);
    fs.writeFileSync(path, Buffer.from(await res.arrayBuffer()));
    console.log("saved", path);
  } else {
    console.log("exists", path);
  }
}
