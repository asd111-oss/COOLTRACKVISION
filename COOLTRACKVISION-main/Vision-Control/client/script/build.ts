import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Получаем __dirname в ES модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к корню проекта (на два уровня выше папки script, так как build.ts в client/script/)
const rootDir = path.resolve(__dirname, "..", "..");

// Библиотеки, которые НЕ нужно упаковывать в итоговый файл сервера
const externals = ["express", "ws", "pg", "passport"];

async function buildAll() {
  // Указываем путь к папке dist в корне проекта
  const distDir = path.resolve(rootDir, "dist");
  await rm(distDir, { recursive: true, force: true });

  console.log("building client...");
  // Запускаем сборку Vite, указывая путь к конфигу
  await viteBuild({
    root: path.resolve(rootDir, "client"),
    configFile: path.resolve(rootDir, "client", "vite.config.ts"),
  });

  console.log("building server...");
  
  await esbuild({
    // Указываем путь к серверу в корне
    entryPoints: [path.resolve(rootDir, "server", "index.ts")],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: path.resolve(distDir, "index.cjs"),
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    // --- ЭТО САМАЯ ВАЖНАЯ СТРОКА ---
    external: externals,
    // -------------------------------
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});