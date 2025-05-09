# Using Changeset

We use [Changeset](https://github.com/changesets/changesets) to manage versions and create changelogs. Follow these steps when contributing:

1. Make your changes to a package in the `packages/` directory.

2. Create a changeset:
   ```bash
   npm run changeset
   ```

3. Follow the prompts to:
   - Select modified packages (using spacebar)
   - Choose the version bump type:
     - `patch`: Bug fixes
     - `minor`: New features (backward compatible)
     - `major`: Breaking changes
   - Write a summary of your changes

4. Commit the generated changeset file with your changes:
   ```bash
   git add .
   git commit -m "feat(core): add new feature"
   git push
   ```

5. Create a pull request.

When your PR is merged to main, an automated process will create a "Version Packages" PR that updates versions and changelogs. When that PR is merged, the packages will be published to npm.

## Important Guidelines

- **Always create a changeset** for changes that affect functionality.
- **One changeset per feature** or bug fix is recommended.
- **Be descriptive** in your changeset messages.
- **Don't modify package versions manually** - let changeset handle versioning.
- Changes to documentation-only or test files don't require a changeset.