// Run with: node generate-favicon.mjs
// Generates PNG favicons from the SVG using sharp (if available) or canvas
import { execSync } from "child_process";
import { existsSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "public");

// Try to use sharp
try {
  const { default: sharp } = await import("sharp");
  const svgPath = join(publicDir, "favicon.svg");

  const sizes = [16, 32, 48, 96, 192, 512];
  for (const size of sizes) {
    await sharp(svgPath)
      .resize(size, size)
      .png()
      .toFile(join(publicDir, `favicon-${size}.png`));
    console.log(`Generated favicon-${size}.png`);
  }

  // Also write favicon-192 and favicon-512 for manifest
  console.log("All favicons generated successfully!");
} catch (e) {
  console.error("sharp not available:", e.message);
  console.log("Install sharp: npm install sharp  (or bun add sharp)");
}
