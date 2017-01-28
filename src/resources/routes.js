"use strict"

const utils = require("../utils")

/**
 * @namespace
 */
class Routes {
	/**
	 * Routes facility
	 *
	 * @see {@link https://route4me.io/docs/#routes}
	 * @since 0.1.8
	 * @private
	 *
	 * @param  {Route4Me}      route4me Route4Me manager
	 * @return {Routes}                 Routes facility
	 */
	constructor(route4me) {
		this.r = route4me
	}

	/**
	 * Get a single route.
	 *
	 * @see {@link https://route4me.io/docs/#get-a-route Route4Me API}
	 * @category Routes
	 * @since 0.1.8
	 *
	 * @param {(number|string)}  id       Route ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Route>} [callback]
	 */
	get(id, callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/route.php",
			qs: {
				"route_id": id,
			},
			schemaName: "Routes.Route",
		}, callback)
	}

	/**
	 * Get a limited number of the routes belonging to the user.
	 *
	 * @see {@link https://route4me.io/docs/#get-multiple-routes Route4Me API}
	 * @category Routes
	 * @since 0.1.8
	 *
	 * @param {number}                    [limit]    Search limitation
	 * @param {number}                    [offset]   Search starting position
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Routes>} [callback]
	 */
	list(limit, offset, callback) {
		const qs = {}
		utils.qsLimitAndOffset(qs, limit, offset)

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/route.php",
			qs,
			schemaName: "Routes.Routes",
		}, callback)
	}


	/*
	 * Update custom data of the route destinations.
	 *
	 * @see {@link https://route4me.io/docs/#update-a-route Route4Me API}
	 * @category Routes
	 * @since 0.1.8
	 *
	 * @todo TODO: there is no schema for the response
	 * @example
	 * {
	 * 	"custom_fields": {
	 * 		"animal": "lion"
	 * 	}
	 * }
	 *
	 *
	 * @param {(number|string)} id                          - Optimization Problem ID
	 * @param {(number|string)} routeDestinationId          - Route destination ID
	 * @param {jsonschema:Routes.CustomFields} customFields - Any string array
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Response>} [callback]
	 */
	updateCustomData(id, routeDestinationId, customFields, callback) {
		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/address.php",
			qs: {
				"route_id": id,
				"route_destination_id": routeDestinationId,
			},
			body: customFields,
			schemaName: "Routes.Route",
		}, callback)
	}

	/**
	 * Given multiple route ID’s, remove all routes at the same time.
	 *
	 * @see {@link https://route4me.io/docs/#remove-routes Route4Me API}
	 * @category Routes
	 * @since 0.1.8
	 *
	 * @todo TODO: There is no schema for the response
	 * @example
	 * SampleResponse = {
	 * {
	 * 	"deleted": true,
	 * 	"route_id": "270CB108F227AD6E11827FC08EE4E2D7,C340E3F6AF28E20EFAE0FBE51759C338",
	 * 	"route_ids": [
	 * 		"270CB108F227AD6E11827FC08EE4E2D7",
	 * 		"C340E3F6AF28E20EFAE0FBE51759C338"
	 * 	]
	 * }
	 *
	 *
	 * @param {(number|string|Array<number>|Array<string>)}  ids - Route ID **or** comma-separated
	 *        list of route IDs **or** array of route IDs
	 * @param {Object}         [options] Options for SKD method
	 * @param {boolean|number} [options.queryLimit=false] `false` means, that query will be sent
	 *        "as is". `number` value cause to split the original request to several chunks,
	 *        limited in size by this parameter, chunks will be sent sequentionally.
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.RemoveResponse>}
	 *     [callback]
	 */
	remove(ids, options, callback) {
		const idsPure = typeof ids === "string" ?
			ids.replace(/\s+/g, "") :
			ids

		if (options && options.queryLimit) {
			// TODO: split ids for max allowed request parameter lengh
			// and perform several queries
			this.r._logger.error("Route.remove with options.queryLimit is not implemented")
		}

		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/route.php",
			qs: {
				"route_id": idsPure,
			},
			schemaName: "Routes.RemoveResponse",
		}, callback)
	}
}

module.exports = Routes