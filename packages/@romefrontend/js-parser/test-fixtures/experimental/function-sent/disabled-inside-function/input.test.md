# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > function-sent > disabled-inside-function`

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
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 43
			line: 4
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unexpected token, expected ("}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 18
					index: 35
					line: 2
				}
				start: Object {
					column: 17
					index: 34
					line: 2
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "foo"
				loc: Object {
					filename: "input.js"
					identifierName: "foo"
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
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 1
					index: 42
					line: 3
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 14
						index: 14
						line: 1
					}
					start: Object {
						column: 12
						index: 12
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 1
						index: 42
						line: 3
					}
					start: Object {
						column: 15
						index: 15
						line: 1
					}
				}
				body: Array [
					JSReturnStatement {
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 1
								index: 42
								line: 3
							}
							start: Object {
								column: 2
								index: 19
								line: 2
							}
						}
						argument: JSFunctionExpression {
							id: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 1
									index: 42
									line: 3
								}
								start: Object {
									column: 9
									index: 26
									line: 2
								}
							}
							body: JSBlockStatement {
								directives: Array []
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 1
										index: 42
										line: 3
									}
									start: Object {
										column: 18
										index: 35
										line: 2
									}
								}
								body: Array [
									JSExpressionStatement {
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 23
												index: 40
												line: 2
											}
											start: Object {
												column: 18
												index: 35
												line: 2
											}
										}
										expression: JSReferenceIdentifier {
											name: "sent"
											loc: Object {
												filename: "input.js"
												identifierName: "sent"
												end: Object {
													column: 22
													index: 39
													line: 2
												}
												start: Object {
													column: 18
													index: 35
													line: 2
												}
											}
										}
									}
								]
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
										column: 18
										index: 35
										line: 2
									}
									start: Object {
										column: 17
										index: 34
										line: 2
									}
								}
								params: Array [
									JSBindingIdentifier {
										name: ""
										loc: Object {
											filename: "input.js"
											identifierName: ""
											end: Object {
												column: 18
												index: 35
												line: 2
											}
											start: Object {
												column: 17
												index: 34
												line: 2
											}
										}
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 18
													index: 35
													line: 2
												}
												start: Object {
													column: 17
													index: 34
													line: 2
												}
											}
										}
									}
								]
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

 input.js:2:17 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected token, expected (

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
