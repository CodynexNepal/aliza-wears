import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Safe Cleanup Script for Aliza Wears Repository
 * 
 * Purpose: Identify and remove duplicate files in `aliza_wears/src` that are
 * redundant with `aliza_wears/frontend/src` and `aliza_wears/backend/src`.
 * 
 * Usage: npx ts-node scripts/cleanup-duplicates.ts --dry-run
 *        npx ts-node scripts/cleanup-duplicates.ts --execute
 * 
 * Safety: 
 * - Only deletes files that have an exact match (by hash) in frontend/src or backend/src.
 * - Preserves files that are unique to the root src/ folder.
 * - Requires explicit --execute flag to perform deletions.
 */

const ROOT_DIR = path.resolve(__dirname, '..');
const TARGET_DIR = path.join(ROOT_DIR, 'aliza_wears', 'src');
const FRONTEND_SRC = path.join(ROOT_DIR, 'aliza_wears', 'frontend', 'src');
const BACKEND_SRC = path.join(ROOT_DIR, 'aliza_wears', 'backend', 'src');

const DRY_RUN = process.argv.includes('--dry-run');
const EXECUTE = process.argv.includes('--execute');

if (!EXECUTE && !DRY_RUN) {
  console.error('Usage: npx ts-node scripts/cleanup-duplicates.ts --dry-run | --execute');
  process.exit(1);
}

function getFilesRecursively(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const results: string[] = [];
  const walk = (currentDir: string) => {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile()) {
        results.push(fullPath);
      }
    }
  };
  walk(dir);
  return results;
}

function getFileHash(filePath: string): string {
  const content = fs.readFileSync(filePath);
  return require('crypto').createHash('md5').update(content).digest('hex');
}

function main() {
  console.log('=== Aliza Wears Duplicate Cleanup ===');
  console.log(`Target: ${TARGET_DIR}`);
  console.log(`Frontend Ref: ${FRONTEND_SRC}`);
  console.log(`Backend Ref: ${BACKEND_SRC}`);
  console.log(`Mode: ${EXECUTE ? 'EXECUTE' : 'DRY RUN'}`);
  console.log('');

  if (!fs.existsSync(TARGET_DIR)) {
    console.log('Target directory does not exist. Nothing to do.');
    return;
  }

  // Build hash maps for frontend and backend src
  const frontendFiles = getFilesRecursively(FRONTEND_SRC);
  const backendFiles = getFilesRecursively(BACKEND_SRC);

  const frontendHashes = new Map<string, string>();
  const backendHashes = new Map<string, string>();

  for (const file of frontendFiles) {
    try {
      const hash = getFileHash(file);
      frontendHashes.set(hash, file);
    } catch (e) {
      // Ignore unreadable files
    }
  }

  for (const file of backendFiles) {
    try {
      const hash = getFileHash(file);
      backendHashes.set(hash, file);
    } catch (e) {
      // Ignore unreadable files
    }
  }

  // Scan target directory
  const targetFiles = getFilesRecursively(TARGET_DIR);
  const duplicates: { target: string; match: string; source: 'frontend' | 'backend' }[] = [];
  const unique: string[] = [];

  for (const file of targetFiles) {
    try {
      const hash = getFileHash(file);
      if (frontendHashes.has(hash)) {
        duplicates.push({ target: file, match: frontendHashes.get(hash)!, source: 'frontend' });
      } else if (backendHashes.has(hash)) {
        duplicates.push({ target: file, match: backendHashes.get(hash)!, source: 'backend' });
      } else {
        unique.push(file);
      }
    } catch (e) {
      unique.push(file); // Keep if unreadable
    }
  }

  console.log(`Found ${duplicates.length} duplicate files.`);
  console.log(`Found ${unique.length} unique files (will be preserved).`);
  console.log('');

  if (duplicates.length > 0) {
    console.log('Duplicates to remove:');
    for (const dup of duplicates) {
      const relTarget = path.relative(ROOT_DIR, dup.target);
      const relMatch = path.relative(ROOT_DIR, dup.match);
      console.log(`  [${dup.source}] ${relTarget} -> matches ${relMatch}`);
    }
  }

  if (EXECUTE) {
    console.log('\nExecuting deletions...');
    for (const dup of duplicates) {
      try {
        fs.unlinkSync(dup.target);
        console.log(`Deleted: ${path.relative(ROOT_DIR, dup.target)}`);
      } catch (e) {
        console.error(`Failed to delete ${dup.target}: ${e}`);
      }
    }
    
    // Remove empty directories
    const removeEmptyDirs = (dir: string) => {
      if (!fs.existsSync(dir)) return;
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) {
          removeEmptyDirs(path.join(dir, entry.name));
        }
      }
      const remaining = fs.readdirSync(dir);
      if (remaining.length === 0) {
        fs.rmdirSync(dir);
        console.log(`Removed empty dir: ${path.relative(ROOT_DIR, dir)}`);
      }
    };

    removeEmptyDirs(TARGET_DIR);
    
    // If target dir is now empty, remove it
    if (fs.existsSync(TARGET_DIR) && fs.readdirSync(TARGET_DIR).length === 0) {
      fs.rmdirSync(TARGET_DIR);
      console.log(`Removed empty target dir: ${path.relative(ROOT_DIR, TARGET_DIR)}`);
    }

    console.log('\nCleanup complete. Please run:');
    console.log('  git add -A');
    console.log('  git commit -m "chore: remove duplicate src folder from aliza_wears"');
    console.log('  git push origin codynex/aliza-wears-6d9779');
  } else {
    console.log('\nDry run complete. No files were deleted.');
    console.log('Run with --execute to perform deletions.');
  }
}

main();
