# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-private-properties > invalid-destructuring-arguments`

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
			index: 47
			line: 5
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "C"
				loc: Object {
					filename: "input.js"
					identifierName: "C"
					end: Object {
						column: 7
						index: 7
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
					index: 46
					line: 4
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
						index: 46
						line: 4
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
										index: 14
										line: 2
									}
									start: Object {
										column: 3
										index: 13
										line: 2
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 14
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
						value: JSNumericLiteral {
							value: 1
							format: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 8
									index: 18
									line: 2
								}
								start: Object {
									column: 7
									index: 17
									line: 2
								}
							}
						}
						typeAnnotation: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 9
								index: 19
								line: 2
							}
							start: Object {
								column: 2
								index: 12
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
								index: 12
								line: 2
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 14
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
					}
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "p"
								loc: Object {
									filename: "input.js"
									identifierName: "p"
									end: Object {
										column: 4
										index: 24
										line: 3
									}
									start: Object {
										column: 3
										index: 23
										line: 3
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 24
									line: 3
								}
								start: Object {
									column: 2
									index: 22
									line: 3
								}
							}
						}
						value: JSArrowFunctionExpression {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 24
									index: 44
									line: 3
								}
								start: Object {
									column: 7
									index: 27
									line: 3
								}
							}
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 24
										index: 44
										line: 3
									}
									start: Object {
										column: 22
										index: 42
										line: 3
									}
								}
							}
							head: JSFunctionHead {
								async: false
								hasHoistedVars: false
								rest: undefined
								returnType: undefined
								thisType: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 21
										index: 41
										line: 3
									}
									start: Object {
										column: 7
										index: 27
										line: 3
									}
								}
								params: Array [
									JSBindingObjectPattern {
										rest: undefined
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 17
												index: 37
												line: 3
											}
											start: Object {
												column: 8
												index: 28
												line: 3
											}
										}
										properties: Array [
											JSBindingObjectPatternProperty {
												key: JSStaticPropertyKey {
													value: JSPrivateName {
														id: JSIdentifier {
															name: "x"
															loc: Object {
																filename: "input.js"
																identifierName: "x"
																end: Object {
																	column: 12
																	index: 32
																	line: 3
																}
																start: Object {
																	column: 11
																	index: 31
																	line: 3
																}
															}
														}
														loc: Object {
															filename: "input.js"
															end: Object {
																column: 12
																index: 32
																line: 3
															}
															start: Object {
																column: 10
																index: 30
																line: 3
															}
														}
													}
													loc: Object {
														filename: "input.js"
														end: Object {
															column: 12
															index: 32
															line: 3
														}
														start: Object {
															column: 10
															index: 30
															line: 3
														}
													}
												}
												value: JSBindingIdentifier {
													name: "x"
													loc: Object {
														filename: "input.js"
														identifierName: "x"
														end: Object {
															column: 15
															index: 35
															line: 3
														}
														start: Object {
															column: 14
															index: 34
															line: 3
														}
													}
												}
												loc: Object {
													filename: "input.js"
													end: Object {
														column: 15
														index: 35
														line: 3
													}
													start: Object {
														column: 10
														index: 30
														line: 3
													}
												}
											}
										]
									}
								]
							}
						}
						typeAnnotation: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 24
								index: 44
								line: 3
							}
							start: Object {
								column: 2
								index: 22
								line: 3
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
								index: 22
								line: 3
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 24
									line: 3
								}
								start: Object {
									column: 2
									index: 22
									line: 3
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
✔ No known problems!

```
