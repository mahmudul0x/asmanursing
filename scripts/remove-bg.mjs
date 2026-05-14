import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src/assets/logo.jpeg");
const out = join(root, "src/assets/logo.png");

// Get raw pixel data
const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = new Uint8Array(data);

// Remove near-white background pixels (threshold-based)
// White = R>230 G>230 B>230
for (let i = 0; i < width * height; i++) {
  const r = pixels[i * channels];
  const g = pixels[i * channels + 1];
  const b = pixels[i * channels + 2];
  // If pixel is very close to white, make transparent
  if (r > 230 && g > 230 && b > 230) {
    pixels[i * channels + 3] = 0; // alpha = 0 (transparent)
  }
}

await sharp(pixels, { raw: { width, height, channels } })
  .png()
  .toFile(out);

console.log("logo.png created with transparent background →", out);
