# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > statement-iteration > migrated_0006`

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
			column: 0
			index: 27
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSWhileStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 26
					index: 26
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			test: JSBooleanLiteral {
				value: true
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 11
						index: 11
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
			}
			body: JSExpressionStatement {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 26
						index: 26
						line: 1
					}
					start: Object {
						column: 13
						index: 13
						line: 1
					}
				}
				expression: JSCallExpression {
					arguments: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 26
							index: 26
							line: 1
						}
						start: Object {
							column: 13
							index: 13
							line: 1
						}
					}
					callee: JSReferenceIdentifier {
						name: "doSomething"
						loc: Object {
							filename: "input.js"
							identifierName: "doSomething"
							end: Object {
								column: 24
								index: 24
								line: 1
							}
							start: Object {
								column: 13
								index: 13
								line: 1
							}
						}
					}
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
