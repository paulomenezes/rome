# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > errors > html-comment-module`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "input.jsx"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["jsx"]
	loc: Object {
		filename: "input.jsx"
		end: Object {
			column: 0
			index: 6
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unknown start to an statement expression"}
			}
			location: Object {
				filename: "input.jsx"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 0
					index: 0
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
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.jsx"
				end: Object {
					column: 4
					index: 4
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSUpdateExpression {
				operator: "--"
				prefix: false
				loc: Object {
					filename: "input.jsx"
					end: Object {
						column: 4
						index: 4
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				argument: TSNonNullExpression {
					loc: Object {
						filename: "input.jsx"
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
					expression: JSReferenceIdentifier {
						name: "INVALID_PLACEHOLDER"
						loc: Object {
							filename: "input.jsx"
							end: Object {
								column: 1
								index: 1
								line: 1
							}
							start: Object {
								column: 0
								index: 0
								line: 1
							}
						}
					}
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "input.jsx"
				end: Object {
					column: 5
					index: 5
					line: 1
				}
				start: Object {
					column: 4
					index: 4
					line: 1
				}
			}
			expression: JSReferenceIdentifier {
				name: "a"
				loc: Object {
					filename: "input.jsx"
					identifierName: "a"
					end: Object {
						column: 5
						index: 5
						line: 1
					}
					start: Object {
						column: 4
						index: 4
						line: 1
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 input.jsx:1 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an statement expression

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
