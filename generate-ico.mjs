// Generates a proper .ico file containing 16x16 and 32x32 PNG images
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "public");

const png16 = readFileSync(join(publicDir, "favicon-16.png"));
const png32 = readFileSync(join(publicDir, "favicon-32.png"));
const png48 = readFileSync(join(publicDir, "favicon-48.png"));

// ICO header: ICONDIR
// 6 bytes: reserved(2) + type(2) + count(2)
const count = 3;
const headerSize = 6;
const dirEntrySize = 16; // each ICONDIRENTRY is 16 bytes
const dirSize = count * dirEntrySize;
const dataOffset = headerSize + dirSize;

function makeDirEntry(width, height, dataSize, offset) {
  const buf = Buffer.alloc(16);
  buf.writeUInt8(width === 256 ? 0 : width, 0);  // width (0 = 256)
  buf.writeUInt8(height === 256 ? 0 : height, 1); // height
  buf.writeUInt8(0, 2);  // color count (0 = more than 256)
  buf.writeUInt8(0, 3);  // reserved
  buf.writeUInt16LE(1, 4); // color planes
  buf.writeUInt16LE(32, 6); // bits per pixel
  buf.writeUInt32LE(dataSize, 8); // size of image data
  buf.writeUInt32LE(offset, 12); // offset of image data
  return buf;
}

const offset16 = dataOffset;
const offset32 = offset16 + png16.length;
const offset48 = offset32 + png32.length;

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);     // reserved
header.writeUInt16LE(1, 2);     // type: 1 = ICO
header.writeUInt16LE(count, 4); // image count

const dir = Buffer.concat([
  makeDirEntry(16, 16, png16.length, offset16),
  makeDirEntry(32, 32, png32.length, offset32),
  makeDirEntry(48, 48, png48.length, offset48),
]);

const ico = Buffer.concat([header, dir, png16, png32, png48]);
writeFileSync(join(publicDir, "favicon.ico"), ico);
console.log("favicon.ico generated with 16x16, 32x32, 48x48 sizes");
