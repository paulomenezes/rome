# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-named-export-class-declaration`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 37
			line: 3
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
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 19
					index: 35
					line: 2
				}
				start: Object {
					column: 7
					index: 23
					line: 2
				}
			}
			description: Object {
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "`Foo` has already been exported. Exported identifiers must be unique."}
				advice: Array [
					log {
						category: "info"
						text: "Defined already here"
					}
					frame {
						location: Object {
							filename: "input.js"
							end: Object {
								column: 12
								index: 12
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
					}
				]
			}
		}
	]
	body: Array [
		JSExportLocalDeclaration {
			declaration: undefined
			exportKind: "value"
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 15
					index: 15
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			specifiers: Array [
				JSExportLocalSpecifier {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 12
							index: 12
							line: 1
						}
						start: Object {
							column: 9
							index: 9
							line: 1
						}
					}
					exported: JSIdentifier {
						name: "Foo"
						loc: Object {
							filename: "input.js"
							identifierName: "Foo"
							end: Object {
								column: 12
								index: 12
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
					}
					local: JSReferenceIdentifier {
						name: "Foo"
						loc: Object {
							filename: "input.js"
							identifierName: "Foo"
							end: Object {
								column: 12
								index: 12
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
					}
				}
			]
		}
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 19
					index: 35
					line: 2
				}
				start: Object {
					column: 0
					index: 16
					line: 2
				}
			}
			declaration: JSClassDeclaration {
				id: JSBindingIdentifier {
					name: "Foo"
					loc: Object {
						filename: "input.js"
						identifierName: "Foo"
						end: Object {
							column: 16
							index: 32
							line: 2
						}
						start: Object {
							column: 13
							index: 29
							line: 2
						}
					}
				}
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 19
						index: 35
						line: 2
					}
					start: Object {
						column: 7
						index: 23
						line: 2
					}
				}
				meta: JSClassHead {
					body: Array []
					implements: undefined
					superClass: undefined
					superTypeParameters: undefined
					typeParameters: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 19
							index: 35
							line: 2
						}
						start: Object {
							column: 7
							index: 23
							line: 2
						}
					}
				}
			}
		}
		JSEmptyStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 20
					index: 36
					line: 2
				}
				start: Object {
					column: 19
					index: 35
					line: 2
				}
			}
		}
	]
}
```

### `diagnostics`

```

 input.js:2:7 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ `Foo` has already been exported. Exported identifiers must be unique.

  ℹ Defined already here

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
