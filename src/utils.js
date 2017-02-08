"use strict"

const debug   = require("debug")("route4me")

const errors  = require("./errors")

/**
 * ILogger interface
 *
 * @interface ILogger
 * @public
 */
class ILogger {
	/**
	 * @typedef ILogger~LoggerParams
	 * @property {string} [msg] Message to log
	 * @property {Error}  [err] Error object, if error occured
	 */

	/**
	 * Debug
	 * @param {ILogger~LoggerParams|Error|string} [arg]    Something to log
	 */
	debug(arg) {}    // eslint-disable-line class-methods-use-this, no-unused-vars
	/**
	 * Info
	 * @param {ILogger~LoggerParams|Error|string} [arg]    Something to log
	 */
	info(arg) {}     // eslint-disable-line class-methods-use-this, no-unused-vars
	/**
	 * Warning
	 * @param {ILogger~LoggerParams|Error|string} [arg]    Something to log
	 */
	warn(arg) {}     // eslint-disable-line class-methods-use-this, no-unused-vars
	/**
	 * Error
	 * @param {ILogger~LoggerParams|Error|string} [arg]    Something to log
	 */
	error(arg) {}    // eslint-disable-line class-methods-use-this, no-unused-vars
}

class ResponseHandler {
	constructor(PromiseConstructor, logger, validate, validateContext, callback) {
		const cb = "function" !== typeof callback ? x => x : callback
		this._logger = logger

		this._validate = validate
		this._validateContext = validateContext

		if (PromiseConstructor) {
			const self = this
			this._p = new PromiseConstructor((res, rej) => {
				self._res = res
				self._rej = rej
			})
		} else {
			this._p = undefined
			this._res = res => cb(null, res)
			this._rej = err => cb(err)
		}
	}

	callback(err, res) {
		if (err) {
			return this._handleError(err, res)
		}
		return this._handleOk(res)
	}

	getPromise() {
		return this._p
	}

	_handleOk(res) {
		debug("response ok")

		const data = this._validate(res.body, this._validateContext, res)

		if (data instanceof errors.Route4MeError) {
			// TODO: include url and method to the log message
			this._logger.warn({ "msg": "response validation error", "err": data })
			return this._rej(data)
		} else if (data instanceof Error) {
			// TODO: include url and method to the log message
			this._logger.error({ "msg": "Unhandled error during validation", "err": data, "fatal": true })
			return this._rej(data)
		}

		// TODO: include url and method to the log message
		this._logger.info({ "msg": "response ok" })
		return this._res(data)
	}

	_handleError(err, res) {
		let e = null
		debug("response error")
		e = new errors.Route4MeApiError(err.message, res, err)

		// TODO: include url and method to the log message
		this._logger.warn({ "msg": "response error", "err": e })
		return this._rej(e)
	}
}


/*
=============================
TYPECONV
=============================
 */

function get(obj, prop, def) {
	if (undefined === obj || null === obj) {
		return def
	}

	const val = obj[prop]
	if (undefined === val) {
		return def
	}

	return val
}

function clone(obj) {
	return JSON.parse(JSON.stringify(obj))
}

function uniq(arr) {
	const uq = {}
	const res = []
	arr.forEach((i) => {
		if (!(i in uq)) {
			uq[i] = true
			res.push(i)
		}
	})
	return res
}

function toStringArray(arg, trim) {
	let a = arg

	if ("number" === typeof a) {
		return [`${a}`]
	}

	if ("string" === typeof a) {
		if (false !== trim) {
			a = a.trim().split(/[,\s]+/)
		} else {
			a = a.split(/,+/)
		}
	}

	if (Array.isArray(a)) {
		a = a
			.map(x => `${x}`)

		return a
	}

	throw new errors.Route4MeError("Argument is not a number OR CSV-string OR string OR array")
}

function toIntArray(arg) {
	let a = arg
	if ("number" === typeof a) {
		return [a]
	}

	if ("string" === typeof a) {
		a = a.split(/[,\s]+/)
	}

	if (Array.isArray(a)) {
		a = a
			.map(x => Number(x))
			.filter(x => "number" === typeof x)

		return a
	}

	throw new errors.Route4MeError("Argument is not a number OR CSV-string OR string OR array")
}

function toOptimizationStatesSafe(states) {
	function _isInStateRange(state) {
		if (1 > state) return false
		if (6 < state) return false
		return true
	}

	let arr
	try {
		arr = toIntArray(states)
	} catch (err) {
		if (err instanceof errors.Route4MeError) {
			return err
		}
		throw err
	}

	arr = uniq(arr.filter(_isInStateRange))

	return arr.join(",")
}

exports.noopLogger = new ILogger()
exports.ResponseHandler = ResponseHandler

exports.get = get
exports.clone = clone
exports.toStringArray = toStringArray
exports.toIntArray = toIntArray
exports.toOptimizationStatesSafe = toOptimizationStatesSafe
