# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `test262 > rest-parameter > object-pattern-multi-element-with-array`

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
			index: 58
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "multiElementWithArray"
				loc: Object {
					filename: "input.js"
					identifierName: "multiElementWithArray"
					end: Object {
						column: 30
						index: 30
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
					column: 57
					index: 57
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 57
						index: 57
						line: 1
					}
					start: Object {
						column: 55
						index: 55
						line: 1
					}
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 54
						index: 54
						line: 1
					}
					start: Object {
						column: 30
						index: 30
						line: 1
					}
				}
				rest: JSBindingObjectPattern {
					rest: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 53
							index: 53
							line: 1
						}
						start: Object {
							column: 34
							index: 34
							line: 1
						}
					}
					meta: JSPatternMeta {
						optional: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 53
								index: 53
								line: 1
							}
							start: Object {
								column: 34
								index: 34
								line: 1
							}
						}
					}
					properties: Array [
						JSBindingObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "p"
									loc: Object {
										filename: "input.js"
										identifierName: "p"
										end: Object {
											column: 36
											index: 36
											line: 1
										}
										start: Object {
											column: 35
											index: 35
											line: 1
										}
									}
								}
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 36
										index: 36
										line: 1
									}
									start: Object {
										column: 35
										index: 35
										line: 1
									}
								}
							}
							value: JSBindingArrayPattern {
								rest: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 41
										index: 41
										line: 1
									}
									start: Object {
										column: 38
										index: 38
										line: 1
									}
								}
								elements: Array [
									JSBindingIdentifier {
										name: "a"
										loc: Object {
											filename: "input.js"
											identifierName: "a"
											end: Object {
												column: 40
												index: 40
												line: 1
											}
											start: Object {
												column: 39
												index: 39
												line: 1
											}
										}
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 40
													index: 40
													line: 1
												}
												start: Object {
													column: 39
													index: 39
													line: 1
												}
											}
										}
									}
								]
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 41
									index: 41
									line: 1
								}
								start: Object {
									column: 35
									index: 35
									line: 1
								}
							}
						}
						JSBindingObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "b"
									loc: Object {
										filename: "input.js"
										identifierName: "b"
										end: Object {
											column: 44
											index: 44
											line: 1
										}
										start: Object {
											column: 43
											index: 43
											line: 1
										}
									}
								}
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 44
										index: 44
										line: 1
									}
									start: Object {
										column: 43
										index: 43
										line: 1
									}
								}
							}
							value: JSBindingIdentifier {
								name: "b"
								loc: Object {
									filename: "input.js"
									identifierName: "b"
									end: Object {
										column: 44
										index: 44
										line: 1
									}
									start: Object {
										column: 43
										index: 43
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 44
									index: 44
									line: 1
								}
								start: Object {
									column: 43
									index: 43
									line: 1
								}
							}
						}
						JSBindingObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "q"
									loc: Object {
										filename: "input.js"
										identifierName: "q"
										end: Object {
											column: 47
											index: 47
											line: 1
										}
										start: Object {
											column: 46
											index: 46
											line: 1
										}
									}
								}
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 47
										index: 47
										line: 1
									}
									start: Object {
										column: 46
										index: 46
										line: 1
									}
								}
							}
							value: JSBindingArrayPattern {
								rest: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 52
										index: 52
										line: 1
									}
									start: Object {
										column: 49
										index: 49
										line: 1
									}
								}
								elements: Array [
									JSBindingIdentifier {
										name: "c"
										loc: Object {
											filename: "input.js"
											identifierName: "c"
											end: Object {
												column: 51
												index: 51
												line: 1
											}
											start: Object {
												column: 50
												index: 50
												line: 1
											}
										}
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 51
													index: 51
													line: 1
												}
												start: Object {
													column: 50
													index: 50
													line: 1
												}
											}
										}
									}
								]
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 52
									index: 52
									line: 1
								}
								start: Object {
									column: 46
									index: 46
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
