# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-yield > invalid-yield-strict-formal-parameter`

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
			index: 35
			line: 2
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "yield is a reserved word"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 30
					index: 30
					line: 1
				}
				start: Object {
					column: 25
					index: 25
					line: 1
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "f"
				loc: Object {
					filename: "input.js"
					identifierName: "f"
					end: Object {
						column: 24
						index: 24
						line: 1
					}
					start: Object {
						column: 23
						index: 23
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 34
					index: 34
					line: 1
				}
				start: Object {
					column: 14
					index: 14
					line: 1
				}
			}
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 34
						index: 34
						line: 1
					}
					start: Object {
						column: 32
						index: 32
						line: 1
					}
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 31
						index: 31
						line: 1
					}
					start: Object {
						column: 24
						index: 24
						line: 1
					}
				}
				params: Array [
					JSBindingIdentifier {
						name: "yield"
						loc: Object {
							filename: "input.js"
							identifierName: "yield"
							end: Object {
								column: 30
								index: 30
								line: 1
							}
							start: Object {
								column: 25
								index: 25
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 30
									index: 30
									line: 1
								}
								start: Object {
									column: 25
									index: 25
									line: 1
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

 input.js:1:25 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ yield is a reserved word

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
