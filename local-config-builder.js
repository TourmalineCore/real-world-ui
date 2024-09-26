/* eslint-disable @typescript-eslint/quotes */
// eslint-disable-next-line no-undef
const env = process.argv[2]

import { readFileSync, writeFileSync } from "fs"

const filepath = "./public/env-config.js"
const fileCypressPath = "./cypress/env-config.js"
const data = readFileSync(`./.config-${env}`)

const variables = data.toString()
  .split("\n")
  .map((str) => {
    const regex = /^([^:]+):(.+)/gm
    const m = regex.exec(str)
    return `${m[1].trim()}: "${m[2].trim()}",`
  })
  .reduce((res, x) => res.concat(x), "")

writeFileSync(filepath, `window.__ENV__ = { ${variables} }`)
writeFileSync(fileCypressPath, `window.__ENV__ = { ${variables} }`)
