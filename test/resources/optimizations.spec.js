"use strict"

// const _     = require("lodash")
// const sinon = require("sinon")

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)
const helper  = require("./helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"


describe("resources/optimizations.spec", () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.Optimizations
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) =>  { r.method="GET";    req = r; return {} })
			saMock.post("*", (r) => { r.method="POST";   req = r; return {} })
			saMock.del("*", (r) =>  { r.method="DELETE"; req = r; return {} })
			saMock.put("*", (r) =>  { r.method="PUT";    req = r; return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("get", () => {
			it("should call route4me", (done) => {
				resource.get(3, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "GET", "https://route4me.com/api.v4/optimization_problem.php", {
						"optimization_problem_id": "3" },
						null
					)
					done()
				})
			})
		})

		describe("list", () => {
			it("should call route4me", (done) => {
				resource.list([1, 2, 3], 100, null, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "GET", "https://route4me.com/api.v4/optimization_problem.php", {
						"states": "1,2,3", "limit": "100" },
						null
					)
					done()
				})
			})

			it("should return error on invalid states", (done) => {
				resource.list(undefined, 100, null, (err, res) => {
					expect(res).is.empty

					expect(err).is.not.null
					expect(err).is.instanceof(Error)
					expect(err).has.property("message")
						.that.matches(/states/i)
					done()
				})
			})
		})

		describe("create", () => {
			it("should call route4me", (done) => {
				resource.create({ "param": 1 }, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "POST", "https://route4me.com/api.v4/optimization_problem.php", null, { "param": 1 })
					done()
				})
			})
		})

		describe("update", () => {
			it("should call route4me", (done) => {
				const opt_id = 179
				const opt_data = {
					"parameters": [],
					"hello": false,
				}
				const reoptimize = true

				resource.update(opt_id, opt_data, reoptimize, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "PUT", "https://route4me.com/api.v4/optimization_problem.php", {
						"optimization_problem_id": "179",
						"reoptimize": "1",
					}, {
						"hello": false,
						"parameters": [],
					})
					done()
				})
			})
		})

		describe("remove", () => {
			it("should call route4me", (done) => {
				resource.remove(300, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "DELETE", "https://route4me.com/api.v4/optimization_problem.php", {
						"optimization_problem_id": "300",
					}, null
					)
					done()
				})
			})
		})

		describe("linkAddress", () => {
			it("should call route4me", (done) => {
				const id = 123
				const addresses = [{ "in-body": true, "route_destination_id": 11 }]
				const reoptimize = false

				resource.linkAddress(id, addresses, reoptimize, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "PUT", "https://route4me.com/api.v4/optimization_problem.php", {
						"optimization_problem_id": "123",
						"reoptimize": "0",
					}, {
						"0": { "in-body": true, "route_destination_id": 11,
						} })
					done()
				})
			})
		})

		describe("unlinkAddress", () => {
			it("should call route4me", (done) => {
				const opt_id = 987
				const route_id = 543
				resource.unlinkAddress(opt_id, route_id, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "DELETE", "https://route4me.com/api.v4/address.php", {
						"optimization_problem_id": "987",
						"route_destination_id": "543",
					}, null)
					done()
				})
			})
		})
	})
})

