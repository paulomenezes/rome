# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 341`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 5
			index: 5
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSBlockStatement {
			body: Array []
			directives: Array []
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 2
					index: 2
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 5
					index: 5
					line: 1
				}
				start: Object {
					column: 2
					index: 2
					line: 1
				}
			}
			expression: JSRegExpLiteral {
				global: false
				insensitive: false
				multiline: false
				noDotNewline: false
				sticky: false
				unicode: false
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 5
						index: 5
						line: 1
					}
					start: Object {
						column: 2
						index: 2
						line: 1
					}
				}
				expression: JSRegExpSubExpression {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 4
							index: 4
							line: 1
						}
						start: Object {
							column: 3
							index: 3
							line: 1
						}
					}
					body: Array [
						JSRegExpCharacter {
							value: "="
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 4
									line: 1
								}
								start: Object {
									column: 3
									index: 3
									line: 1
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
