import process from 'node:child_process'

const excludePatterns = [
  /^docs?\//,
  /^\.vscode\//,
  /^\.git/,
  /^builder\//,
  /^images\//,
  /^min\//,
  /^README\.md$/,
  /^CHANGELOG\.md$/,
  /^CODE_OF_CONDUCT\.md$/,
  /^LICENCE$/,
]

export function isSourceChanged() {
  const lastDiff = process.execSync('git diff --name-only HEAD^').toString().trim().split('\n')

  const isAllExcluded = lastDiff.every(path => excludePatterns.some(p => p.test(path)))
  return !isAllExcluded
}
