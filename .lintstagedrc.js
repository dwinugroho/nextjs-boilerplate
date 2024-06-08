const path = require('path')

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [
    (filenames) =>
      `next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`,
    (filenames) =>
      `prettier --write ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --write ')}`
  ],
  'src/**/*.{css,scss,md,html,json}': [
    (filenames) =>
      `prettier --write ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --write ')}`
  ]
}
