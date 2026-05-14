import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src/assets/logo.png");
const pub = join(root, "public");

// PNG favicons — transparent background
const sizes = [16, 32, 48, 96, 192, 512];
for (const s of sizes) {
  await sharp(src).resize(s, s, { fit: "contain", background: { r:0,g:0,b:0,alpha:0 } }).png().toFile(join(pub, `favicon-${s}.png`));
  console.log(`favicon-${s}.png`);
}

// ICO needs white background for compatibility
function makeIco(pngs) {
  const count = pngs.length;
  let offset = 6 + count * 16;
  const dirs = [];
  for (const { buf, size } of pngs) {
    const d = Buffer.alloc(16);
    d.writeUInt8(size === 256 ? 0 : size, 0);
    d.writeUInt8(size === 256 ? 0 : size, 1);
    d.writeUInt8(0, 2); d.writeUInt8(0, 3);
    d.writeUInt16LE(1, 4); d.writeUInt16LE(32, 6);
    d.writeUInt32LE(buf.length, 8);
    d.writeUInt32LE(offset, 12);
    offset += buf.length;
    dirs.push(d);
  }
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(count, 4);
  return Buffer.concat([header, ...dirs, ...pngs.map(p => p.buf)]);
}

const icoPngs = await Promise.all([16, 32, 48].map(async s => ({
  size: s,
  buf: await sharp(src)
    .resize(s, s, { fit: "contain", background: { r:255,g:255,b:255,alpha:1 } })
    .flatten({ background: { r:255,g:255,b:255 } })
    .png()
    .toBuffer(),
})));
writeFileSync(join(pub, "favicon.ico"), makeIco(icoPngs));
console.log("favicon.ico ✓");
console.log("All done!");
