# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0128`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
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
			index: 25
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
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 24
					index: 24
					line: 1
				}
				start: Object {
					column: 0
					index: 25
					line: 2
				}
			}
		}
	]
	body: Array [
		JSIfStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 0
					index: 25
					line: 2
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			test: JSBooleanLiteral {
				value: false
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 8
						index: 8
						line: 1
					}
					start: Object {
						column: 3
						index: 3
						line: 1
					}
				}
			}
			alternate: JSExpressionStatement {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 0
						index: 25
						line: 2
					}
					start: Object {
						column: 0
						index: 25
						line: 2
					}
				}
				expression: JSReferenceIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 0
							index: 25
							line: 2
						}
						start: Object {
							column: 0
							index: 25
							line: 2
						}
					}
				}
			}
			consequent: JSExpressionStatement {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 19
						index: 19
						line: 1
					}
					start: Object {
						column: 10
						index: 10
						line: 1
					}
				}
				expression: JSCallExpression {
					arguments: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 18
							index: 18
							line: 1
						}
						start: Object {
							column: 10
							index: 10
							line: 1
						}
					}
					callee: JSReferenceIdentifier {
						name: "doThis"
						loc: Object {
							filename: "input.js"
							identifierName: "doThis"
							end: Object {
								column: 16
								index: 16
								line: 1
							}
							start: Object {
								column: 10
								index: 10
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

 input.js:2 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an statement expression

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
