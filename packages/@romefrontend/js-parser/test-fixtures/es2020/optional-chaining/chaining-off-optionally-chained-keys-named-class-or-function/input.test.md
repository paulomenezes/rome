# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > optional-chaining > chaining-off-optionally-chained-keys-named-class-or-function`

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
			index: 72
			line: 5
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 14
					index: 14
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSMemberExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 14
						index: 14
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "bar"
						loc: Object {
							filename: "input.js"
							identifierName: "bar"
							end: Object {
								column: 14
								index: 14
								line: 1
							}
							start: Object {
								column: 11
								index: 11
								line: 1
							}
						}
					}
					loc: Object {
						filename: "input.js"
						identifierName: "bar"
						end: Object {
							column: 14
							index: 14
							line: 1
						}
						start: Object {
							column: 11
							index: 11
							line: 1
						}
					}
				}
				object: JSMemberExpression {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 10
							index: 10
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
					object: JSReferenceIdentifier {
						name: "foo"
						loc: Object {
							filename: "input.js"
							identifierName: "foo"
							end: Object {
								column: 3
								index: 3
								line: 1
							}
							start: Object {
								column: 0
								index: 0
								line: 1
							}
						}
					}
					property: JSStaticMemberProperty {
						value: JSIdentifier {
							name: "class"
							loc: Object {
								filename: "input.js"
								identifierName: "class"
								end: Object {
									column: 10
									index: 10
									line: 1
								}
								start: Object {
									column: 5
									index: 5
									line: 1
								}
							}
						}
						optional: true
						loc: Object {
							filename: "input.js"
							identifierName: "class"
							end: Object {
								column: 10
								index: 10
								line: 1
							}
							start: Object {
								column: 5
								index: 5
								line: 1
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
					column: 17
					index: 32
					line: 2
				}
				start: Object {
					column: 0
					index: 15
					line: 2
				}
			}
			expression: JSMemberExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 17
						index: 32
						line: 2
					}
					start: Object {
						column: 0
						index: 15
						line: 2
					}
				}
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "bar"
						loc: Object {
							filename: "input.js"
							identifierName: "bar"
							end: Object {
								column: 17
								index: 32
								line: 2
							}
							start: Object {
								column: 14
								index: 29
								line: 2
							}
						}
					}
					loc: Object {
						filename: "input.js"
						identifierName: "bar"
						end: Object {
							column: 17
							index: 32
							line: 2
						}
						start: Object {
							column: 14
							index: 29
							line: 2
						}
					}
				}
				object: JSMemberExpression {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 13
							index: 28
							line: 2
						}
						start: Object {
							column: 0
							index: 15
							line: 2
						}
					}
					object: JSReferenceIdentifier {
						name: "foo"
						loc: Object {
							filename: "input.js"
							identifierName: "foo"
							end: Object {
								column: 3
								index: 18
								line: 2
							}
							start: Object {
								column: 0
								index: 15
								line: 2
							}
						}
					}
					property: JSStaticMemberProperty {
						value: JSIdentifier {
							name: "function"
							loc: Object {
								filename: "input.js"
								identifierName: "function"
								end: Object {
									column: 13
									index: 28
									line: 2
								}
								start: Object {
									column: 5
									index: 20
									line: 2
								}
							}
						}
						optional: true
						loc: Object {
							filename: "input.js"
							identifierName: "function"
							end: Object {
								column: 13
								index: 28
								line: 2
							}
							start: Object {
								column: 5
								index: 20
								line: 2
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
					column: 19
					index: 52
					line: 3
				}
				start: Object {
					column: 0
					index: 33
					line: 3
				}
			}
			expression: JSMemberExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 19
						index: 52
						line: 3
					}
					start: Object {
						column: 0
						index: 33
						line: 3
					}
				}
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "bar"
						loc: Object {
							filename: "input.js"
							identifierName: "bar"
							end: Object {
								column: 19
								index: 52
								line: 3
							}
							start: Object {
								column: 16
								index: 49
								line: 3
							}
						}
					}
					loc: Object {
						filename: "input.js"
						identifierName: "bar"
						end: Object {
							column: 19
							index: 52
							line: 3
						}
						start: Object {
							column: 16
							index: 49
							line: 3
						}
					}
				}
				object: JSMemberExpression {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 15
							index: 48
							line: 3
						}
						start: Object {
							column: 0
							index: 33
							line: 3
						}
					}
					property: JSStaticMemberProperty {
						value: JSIdentifier {
							name: "class"
							loc: Object {
								filename: "input.js"
								identifierName: "class"
								end: Object {
									column: 15
									index: 48
									line: 3
								}
								start: Object {
									column: 10
									index: 43
									line: 3
								}
							}
						}
						optional: true
						loc: Object {
							filename: "input.js"
							identifierName: "class"
							end: Object {
								column: 15
								index: 48
								line: 3
							}
							start: Object {
								column: 10
								index: 43
								line: 3
							}
						}
					}
					object: JSMemberExpression {
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 8
								index: 41
								line: 3
							}
							start: Object {
								column: 0
								index: 33
								line: 3
							}
						}
						object: JSReferenceIdentifier {
							name: "foo"
							loc: Object {
								filename: "input.js"
								identifierName: "foo"
								end: Object {
									column: 3
									index: 36
									line: 3
								}
								start: Object {
									column: 0
									index: 33
									line: 3
								}
							}
						}
						property: JSStaticMemberProperty {
							value: JSIdentifier {
								name: "bar"
								loc: Object {
									filename: "input.js"
									identifierName: "bar"
									end: Object {
										column: 8
										index: 41
										line: 3
									}
									start: Object {
										column: 5
										index: 38
										line: 3
									}
								}
							}
							optional: true
							loc: Object {
								filename: "input.js"
								identifierName: "bar"
								end: Object {
									column: 8
									index: 41
									line: 3
								}
								start: Object {
									column: 5
									index: 38
									line: 3
								}
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
					column: 18
					index: 71
					line: 4
				}
				start: Object {
					column: 0
					index: 53
					line: 4
				}
			}
			expression: JSMemberExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 18
						index: 71
						line: 4
					}
					start: Object {
						column: 0
						index: 53
						line: 4
					}
				}
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "bar"
						loc: Object {
							filename: "input.js"
							identifierName: "bar"
							end: Object {
								column: 18
								index: 71
								line: 4
							}
							start: Object {
								column: 15
								index: 68
								line: 4
							}
						}
					}
					optional: true
					loc: Object {
						filename: "input.js"
						identifierName: "bar"
						end: Object {
							column: 18
							index: 71
							line: 4
						}
						start: Object {
							column: 15
							index: 68
							line: 4
						}
					}
				}
				object: JSMemberExpression {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 13
							index: 66
							line: 4
						}
						start: Object {
							column: 0
							index: 53
							line: 4
						}
					}
					object: JSReferenceIdentifier {
						name: "foo"
						loc: Object {
							filename: "input.js"
							identifierName: "foo"
							end: Object {
								column: 3
								index: 56
								line: 4
							}
							start: Object {
								column: 0
								index: 53
								line: 4
							}
						}
					}
					property: JSStaticMemberProperty {
						value: JSIdentifier {
							name: "function"
							loc: Object {
								filename: "input.js"
								identifierName: "function"
								end: Object {
									column: 13
									index: 66
									line: 4
								}
								start: Object {
									column: 5
									index: 58
									line: 4
								}
							}
						}
						optional: true
						loc: Object {
							filename: "input.js"
							identifierName: "function"
							end: Object {
								column: 13
								index: 66
								line: 4
							}
							start: Object {
								column: 5
								index: 58
								line: 4
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
