#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const releaseDir = join(repoRoot, "release-install");
const installDir = "/Applications";
const appName = "T3 Code (Dev).app";
const installedAppPath = join(installDir, appName);
const skipBuild = process.argv.includes("--skip-build");

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: "inherit",
    ...options,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function findAppBundle(rootDir) {
  if (!existsSync(rootDir)) {
    return null;
  }

  const queue = [rootDir];
  while (queue.length > 0) {
    const currentDir = queue.shift();
    if (!currentDir) continue;

    for (const entry of readdirSync(currentDir, { withFileTypes: true })) {
      const entryPath = join(currentDir, entry.name);
      if (entry.isDirectory() && entry.name.endsWith(".app")) {
        return entryPath;
      }
      if (entry.isDirectory()) {
        queue.push(entryPath);
      }
    }
  }

  return null;
}

if (!skipBuild) {
  rmSync(releaseDir, { recursive: true, force: true });
  run(process.execPath, [
    "scripts/build-desktop-artifact.ts",
    "--platform",
    "mac",
    "--target",
    "dir",
    "--output-dir",
    "release-install",
  ]);
}

const builtAppPath = findAppBundle(releaseDir);
if (!builtAppPath) {
  console.error("No macOS app bundle was found under release-install.");
  process.exit(1);
}

mkdirSync(installDir, { recursive: true });
rmSync(installedAppPath, { recursive: true, force: true });
run("ditto", [builtAppPath, installedAppPath], { cwd: undefined });

console.log(`Installed ${appName} to ${installedAppPath}`);
