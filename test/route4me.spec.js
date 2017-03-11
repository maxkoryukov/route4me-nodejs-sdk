"use strict"

const sinon = require("sinon")
const helper  = require("./helper")

const Route4Me = require("../dist").Route4Me

const testApiKey = "11111111111111111111111111111111"

describe(helper.toSuiteName(__filename), () => {
	describe("instance API", () => {
		let route4me

		before(() => {
			route4me = new Route4Me(testApiKey)
		})

		it(":version", () => {
			expect(route4me).have.property("version")
				.that.is.a("string")
		})
	})

	describe("call constructor with wrong (empty) apiKey", () => {
		[null, undefined, false, ""].forEach((apiKey) => {
			it(`should raise when apiKey=${apiKey}`, () => {
				const fn = () => new Route4Me(apiKey)
				expect(fn).to.throw(/.?apikey.? is not set/i)
			})
		})
	})

	describe("options", () => {
		describe("logger", () => {
			it("should use passed logger", () => {
				const spy = sinon.spy()
				const testLogger = {
					debug() { spy("debug") },
					info() { spy("info") },
					warn() { spy("warn") },
					error() { spy("error") },
				}

				const route4me = new Route4Me(testApiKey, {
					logger: testLogger,
				})

				expect(route4me).is.not.null
				expect(spy.calledWith("debug")).is.true
				expect(spy.callCount).is.above(1)
			})
		})
	})
})
