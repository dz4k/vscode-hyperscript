
(async () => {
	const fs = require('node:fs/promises')
	const path = require('node:path')
	const yaml = require('js-yaml')
	const { js2plist, js2json } = require('plist2')

	const input = path.join(__dirname, '../syntaxes/_hyperscript.tmLanguage.yaml')
	const subl  = path.join(__dirname, '../syntaxes/_hyperscript.tmLanguage')
	const vsc   = path.join(__dirname, '../syntaxes/_hyperscript.tmLanguage.json')

	const grammar = yaml.load(
		await fs.readFile(input, { encoding: 'utf-8' }))

	sublime: {
		grammar.patterns = grammar.patterns
			.filter(pat => !pat['com.denizaksimsek.badOnSublime'])

		for (const key in grammar.repository) {
			if (grammar.repository[key]['com.denizaksimsek.badOnSublime']) {
				delete grammar.repository[key]
			}
		}

		const result = js2plist(grammar)

		await fs.writeFile(subl, result)
	}

	vscode: {
		const result = js2json(grammar)

		await fs.writeFile(vsc, result)
	}
})()
