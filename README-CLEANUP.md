# Aliza Wears – Duplicate Folder Cleanup Guide

## Context
The `aliza_wears/src` folder contains files that are duplicated in `aliza_wears/frontend/src` and `aliza_wears/backend/src`. This causes redundancy and potential confusion.

## Safety First
**Do NOT blindly delete the folder.** Some files in `aliza_wears/src` may be unique and required for the build.

## Steps

### 1. Run Dry Run
```bash
npx ts-node scripts/cleanup-duplicates.ts --dry-run
```
This will list all duplicate files and unique files without making changes.

### 2. Review Output
- Verify that all listed duplicates are indeed redundant.
- Check that no unique files are being misclassified.

### 3. Execute Cleanup
```bash
npx ts-node scripts/cleanup-duplicates.ts --execute
```
This will delete only the duplicate files and remove empty directories.

### 4. Verify Build
```bash
# Frontend
cd aliza_wears/frontend
npm run build

# Backend
cd aliza_wears/backend
npm run build
```

### 5. Commit Changes
```bash
git add -A
git commit -m "chore: remove duplicate src folder from aliza_wears"
git push origin codynex/aliza-wears-6d9779
```

## Rollback
If the build fails after cleanup:
```bash
git reset --hard HEAD~1
git push origin codynex/aliza-wears-6d9779 --force
```

## CEO Approval
Per SOP-001, production deploys require CEO approval. This cleanup is a **development branch** change and does not affect production. However, please review the dry-run output before executing.
