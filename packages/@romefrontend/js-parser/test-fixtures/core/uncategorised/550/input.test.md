# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 550`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 28
			line: 3
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	directives: Array [
		JSDirective {
			value: "use strict"
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 13
					index: 13
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Legacy octal literals are not allowed in strict mode"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 12
					index: 26
					line: 2
				}
				start: Object {
					column: 12
					index: 26
					line: 2
				}
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 13
					index: 27
					line: 2
				}
				start: Object {
					column: 0
					index: 14
					line: 2
				}
			}
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 13
						index: 27
						line: 2
					}
					start: Object {
						column: 0
						index: 14
						line: 2
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "a"
							loc: Object {
								filename: "input.js"
								identifierName: "a"
								end: Object {
									column: 7
									index: 21
									line: 2
								}
								start: Object {
									column: 6
									index: 20
									line: 2
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 12
								index: 26
								line: 2
							}
							start: Object {
								column: 6
								index: 20
								line: 2
							}
						}
						init: JSNumericLiteral {
							value: 7
							format: "octal"
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 12
									index: 26
									line: 2
								}
								start: Object {
									column: 10
									index: 24
									line: 2
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 input.js:2:12 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Legacy octal literals are not allowed in strict mode

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
