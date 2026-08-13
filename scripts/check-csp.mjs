import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'

const [html, htaccess] = await Promise.all([
  readFile(new URL('../logoswarm.html', import.meta.url), 'utf8'),
  readFile(new URL('../.htaccess', import.meta.url), 'utf8'),
])
const landingPage = await readFile(new URL('../index.html', import.meta.url), 'utf8')

const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]

if (inlineScripts.length !== 1) {
  throw new Error(`Expected one inline logoswarm script, found ${inlineScripts.length}.`)
}

const hash = createHash('sha256').update(inlineScripts[0][1]).digest('base64')
const source = `'sha256-${hash}'`

if (!htaccess.includes(source)) {
  throw new Error(`Content Security Policy is missing ${source}.`)
}

if (!/src="logoswarm\.html\?v=[a-z0-9-]+"/i.test(landingPage)) {
  throw new Error('The logoswarm iframe must use a versioned URL to invalidate cached CSP responses.')
}

console.log(`CSP permits the logoswarm inline script with ${source}.`)
