# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-private-properties > failure-delete-optional-private-property`

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
			index: 63
			line: 7
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Expected an identifier"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 17
					index: 53
					line: 4
				}
				start: Object {
					column: 17
					index: 53
					line: 4
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: Object {
					filename: "input.js"
					identifierName: "Foo"
					end: Object {
						column: 9
						index: 9
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 1
					index: 62
					line: 6
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 1
						index: 62
						line: 6
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "x"
								loc: Object {
									filename: "input.js"
									identifierName: "x"
									end: Object {
										column: 4
										index: 16
										line: 2
									}
									start: Object {
										column: 3
										index: 15
										line: 2
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 16
									line: 2
								}
								start: Object {
									column: 2
									index: 14
									line: 2
								}
							}
						}
						value: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 5
								index: 17
								line: 2
							}
							start: Object {
								column: 2
								index: 14
								line: 2
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 14
								line: 2
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 16
									line: 2
								}
								start: Object {
									column: 2
									index: 14
									line: 2
								}
							}
						}
					}
					JSClassMethod {
						kind: "constructor"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "constructor"
								loc: Object {
									filename: "input.js"
									identifierName: "constructor"
									end: Object {
										column: 13
										index: 31
										line: 3
									}
									start: Object {
										column: 2
										index: 20
										line: 3
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 13
									index: 31
									line: 3
								}
								start: Object {
									column: 2
									index: 20
									line: 3
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 3
								index: 60
								line: 5
							}
							start: Object {
								column: 2
								index: 20
								line: 3
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
									column: 15
									index: 33
									line: 3
								}
								start: Object {
									column: 13
									index: 31
									line: 3
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 20
								line: 3
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 13
									index: 31
									line: 3
								}
								start: Object {
									column: 2
									index: 20
									line: 3
								}
							}
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 3
									index: 60
									line: 5
								}
								start: Object {
									column: 16
									index: 34
									line: 3
								}
							}
							body: Array [
								JSExpressionStatement {
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 18
											index: 54
											line: 4
										}
										start: Object {
											column: 4
											index: 40
											line: 4
										}
									}
									expression: JSUnaryExpression {
										operator: "delete"
										prefix: true
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 18
												index: 54
												line: 4
											}
											start: Object {
												column: 4
												index: 40
												line: 4
											}
										}
										argument: JSMemberExpression {
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 18
													index: 54
													line: 4
												}
												start: Object {
													column: 11
													index: 47
													line: 4
												}
											}
											object: JSThisExpression {
												loc: Object {
													filename: "input.js"
													end: Object {
														column: 15
														index: 51
														line: 4
													}
													start: Object {
														column: 11
														index: 47
														line: 4
													}
												}
											}
											property: JSStaticMemberProperty {
												value: JSIdentifier {
													name: ""
													loc: Object {
														filename: "input.js"
														identifierName: ""
														end: Object {
															column: 18
															index: 54
															line: 4
														}
														start: Object {
															column: 17
															index: 53
															line: 4
														}
													}
												}
												optional: true
												loc: Object {
													filename: "input.js"
													identifierName: ""
													end: Object {
														column: 18
														index: 54
														line: 4
													}
													start: Object {
														column: 17
														index: 53
														line: 4
													}
												}
											}
										}
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 20
											index: 56
											line: 4
										}
										start: Object {
											column: 18
											index: 54
											line: 4
										}
									}
									expression: JSReferenceIdentifier {
										name: "x"
										loc: Object {
											filename: "input.js"
											identifierName: "x"
											end: Object {
												column: 19
												index: 55
												line: 4
											}
											start: Object {
												column: 18
												index: 54
												line: 4
											}
										}
									}
								}
							]
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

 input.js:4:17 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected an identifier

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
