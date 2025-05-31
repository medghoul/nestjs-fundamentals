# Git Hooks

This directory contains Git hooks configuration using Husky. These hooks automatically run at specific points in the Git workflow to enforce code quality and commit standards.

## Hooks Configuration

### Pre-commit Hook

The `pre-commit` hook runs before each commit and performs the following checks:

- Prettier to automatically format your code
- ESLint to analyze code for potential errors and enforce coding standards (warnings only)

If any of these checks fail, the commit will be aborted, allowing you to fix the issues before committing.

### Commit Message Hook

The `commit-msg` hook validates your commit messages against the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
type(scope): description
```

Valid types include:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

## Bypassing Hooks

In some cases, you may need to bypass the hooks:

```bash
# Skip pre-commit hooks
git commit -m "Your message" --no-verify

# Skip all hooks
HUSKY=0 git commit -m "Your message"
```

**Note:** Only bypass hooks when absolutely necessary, as they help maintain code quality and consistency across the project.
