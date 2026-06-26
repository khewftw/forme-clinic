import fs from "node:fs";
import path from "node:path";

const pairs = [
  {
    surgeon: "Темирчевой В.В.",
    label: "Увеличение груди круглыми имплантами",
    before: "/images/works/plastik/temircheva/grud-tem-do-1.png",
    after: "/images/works/plastik/temircheva/grud-tem-posle-1.png",
    id: "tem-1",
  },
  {
    surgeon: "Темирчевой В.В.",
    label: "Увеличение груди круглыми имплантами",
    before: "/images/works/plastik/temircheva/uvl_grud_temir1.png",
    after: "/images/works/plastik/temircheva/uvl_grud_temir2.png",
    id: "tem-2",
  },
  {
    surgeon: "Темирчевой В.В.",
    label: "Увеличение груди анатомическими имплантами",
    before: "/images/works/plastik/temircheva/temircheva-sis1.png",
    after: "/images/works/plastik/temircheva/temircheva-sis2.png",
    id: "tem-3",
  },
  {
    surgeon: "Темирчевой В.В.",
    label:
      "Увеличение груди. Импланты Mentor, круглые, гладкие 325 мл средняя + проекция. Рост 167 см. Обхват грудной клетки 69 см. Ширина железы 11,5 см. Доступ по нижнему краю ареолы.",
    before: "/images/works/plastik/temircheva/temircheva3.png",
    after: "/images/works/plastik/temircheva/temircheva4.png",
    id: "tem-4",
  },
  {
    surgeon: "Темирчевой В.В.",
    label: "Увеличение груди анатомическими имплантами, периареолярная подтяжка",
    before: "/images/works/plastik/temircheva/tem-grud-3.png",
    after: "/images/works/plastik/temircheva/uvel-grud-temirchva.png",
    id: "tem-5",
  },
  {
    surgeon: "Терентьевой О.А.",
    label:
      "Увеличение груди. Анатомические импланты, 255 мл средняя + проекция. Рост 162 см. Обхват под грудью 71 см. Ширина железы 11,5 см. Доступ по верхнему краю ареолы",
    before: "/images/works/plastik/terenteva/terenteva-d1.webp",
    after: "/images/works/plastik/terenteva/terenteva-p1.webp",
    id: "ter-1",
  },
  {
    surgeon: "Терентьевой О.А.",
    label: "Увеличение груди",
    before: "/images/works/plastik/terenteva/terenteva-d2.webp",
    after: "/images/works/plastik/terenteva/terenteva-p2.webp",
    id: "ter-2",
  },
  {
    surgeon: "Терентьевой О.А.",
    label: "Увеличение груди",
    before: "/images/works/plastik/terenteva/terenteva-d3.webp",
    after: "/images/works/plastik/terenteva/terenteva-p3.webp",
    id: "ter-3",
  },
  {
    surgeon: "Терентьевой О.А.",
    label: "Увеличение груди",
    before: "/images/works/plastik/terenteva/terenteva-d4.webp",
    after: "/images/works/plastik/terenteva/terenteva-p4.webp",
    id: "ter-4",
  },
];

const outDir = "public/images/results";
fs.mkdirSync(outDir, { recursive: true });

for (const pair of pairs) {
  for (const kind of ["before", "after"]) {
    const remote = pair[kind];
    const ext = path.extname(remote);
    const local = `/images/results/${pair.id}-${kind}${ext}`;
    const localPath = `public${local}`;
    if (!fs.existsSync(localPath)) {
      const res = await fetch(`https://formeclinic.ru${remote}`);
      if (!res.ok) throw new Error(`Failed ${remote}: ${res.status}`);
      fs.writeFileSync(localPath, Buffer.from(await res.arrayBuffer()));
      console.log("saved", localPath);
    } else {
      console.log("exists", localPath);
    }
    pair[kind] = local;
  }
}

const output = pairs.map(({ id, surgeon, label, before, after }) => ({
  id,
  surgeon,
  label,
  before,
  after,
}));

fs.writeFileSync("temp/results-export.json", JSON.stringify(output, null, 2));
console.log("done", output.length);
