import { getSearchIndex } from "@/lib/data";
import fs from "fs";
import path from "path";

function main() {
  console.log("Building search index...");

  const entries = getSearchIndex();
  const json = JSON.stringify(entries);

  const outDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, "search-index.json");
  fs.writeFileSync(outPath, json, "utf-8");

  const sizeKB = (Buffer.byteLength(json, "utf-8") / 1024).toFixed(1);
  console.log(`Wrote ${entries.length} entries to ${outPath} (${sizeKB} KB)`);
}

main();
