## Classes

<table>
  <thead>
    <tr>
      <th>Global</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><a href="#RequestManager">RequestManager</a></td>
    <td><p>Request manager, provides</p>
<ul>
<li>simple API for sending HTTP requests</li>
<li>a way to handle HTTP responses</li>
</ul>
</td>
    </tr>
</tbody>
</table>

<a id="module_route4me-node" name="module_route4me-node"></a>

## route4me-node


* [route4me-node](#module_route4me-node)
    * _static_
        * [.Route4Me](#module_route4me-node.Route4Me) : <code>Route4Me</code>
        * [.Route4MeError](#module_route4me-node.Route4MeError) : <code>Route4MeError</code>
        * [.Route4MeApiError](#module_route4me-node.Route4MeApiError) : <code>Route4MeApiError</code>
        * [.Route4MeValidationError](#module_route4me-node.Route4MeValidationError) : <code>Route4MeValidationError</code>
    * _inner_
        * _Route4Me_
            * [~RequestCallback](#module_route4me-node..RequestCallback) : <code>function</code>

<a id="module_route4me-node.Route4Me" name="module_route4me-node.Route4Me"></a>

### route4me-node.Route4Me : <code>Route4Me</code>

<a id="module_route4me-node.Route4MeError" name="module_route4me-node.Route4MeError"></a>

### route4me-node.Route4MeError : <code>Route4MeError</code>

<a id="module_route4me-node.Route4MeApiError" name="module_route4me-node.Route4MeApiError"></a>

### route4me-node.Route4MeApiError : <code>Route4MeApiError</code>

<a id="module_route4me-node.Route4MeValidationError" name="module_route4me-node.Route4MeValidationError"></a>

### route4me-node.Route4MeValidationError : <code>Route4MeValidationError</code>

<a id="module_route4me-node..RequestCallback" name="module_route4me-node..RequestCallback"></a>

### route4me-node~RequestCallback : <code>function</code>

API-response callback

**Category**: Route4Me  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | Error (if ocurred) |
| [res] | <code>Object</code> | Value returned by API (on success) |

<a id="module_route4me-node/utils" name="module_route4me-node/utils"></a>

## route4me-node/utils

**Access:** protected  

* [route4me-node/utils](#module_route4me-node/utils)
    * [~clone(obj)](#module_route4me-node/utils..clone) ⇒ <code>any</code>
    * _Route4Me_
        * [~ILogger](#module_route4me-node/utils..ILogger)
            * [.debug([arg])](#module_route4me-node/utils..ILogger+debug)
            * [.info([arg])](#module_route4me-node/utils..ILogger+info)
            * [.warn([arg])](#module_route4me-node/utils..ILogger+warn)
            * [.error([arg])](#module_route4me-node/utils..ILogger+error)

<a id="module_route4me-node/utils..clone" name="module_route4me-node/utils..clone"></a>

### route4me-node/utils~clone(obj) ⇒ <code>any</code>

Deep clone an object

**Returns**: <code>any</code> - - The deep copy of an object  
**Access:** protected  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | Original object |

<a id="module_route4me-node/utils..ILogger" name="module_route4me-node/utils..ILogger"></a>

### route4me-node/utils~ILogger

ILogger interface

**Category**: Route4Me  
**Access:** public  

* [~ILogger](#module_route4me-node/utils..ILogger)
    * [.debug([arg])](#module_route4me-node/utils..ILogger+debug)
    * [.info([arg])](#module_route4me-node/utils..ILogger+info)
    * [.warn([arg])](#module_route4me-node/utils..ILogger+warn)
    * [.error([arg])](#module_route4me-node/utils..ILogger+error)

<a id="module_route4me-node/utils..ILogger+debug" name="module_route4me-node/utils..ILogger+debug"></a>

#### iLogger.debug([arg])

Debug


| Param | Type | Description |
| --- | --- | --- |
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a id="module_route4me-node/utils..ILogger+info" name="module_route4me-node/utils..ILogger+info"></a>

#### iLogger.info([arg])

Info


| Param | Type | Description |
| --- | --- | --- |
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a id="module_route4me-node/utils..ILogger+warn" name="module_route4me-node/utils..ILogger+warn"></a>

#### iLogger.warn([arg])

Warning


| Param | Type | Description |
| --- | --- | --- |
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a id="module_route4me-node/utils..ILogger+error" name="module_route4me-node/utils..ILogger+error"></a>

#### iLogger.error([arg])

Error


| Param | Type | Description |
| --- | --- | --- |
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a id="RequestManager" name="RequestManager"></a>

## RequestManager

Request manager, provides
* simple API for sending HTTP requests
* a way to handle HTTP responses

**Access:** protected  
**Since**: 0.1.0  

* [RequestManager](#RequestManager)
    * [new RequestManager(apiKey, options)](#new_RequestManager_new)
    * [._makeRequest(options, [callback])](#RequestManager+_makeRequest)
    * [._makeError(error, [callback])](#RequestManager+_makeError)

<a id="new_RequestManager_new" name="new_RequestManager_new"></a>

### new RequestManager(apiKey, options)

Creates new RequestManager. All parameters are inherited from {Route4Me}


| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>object</code> | see {Route4Me} |
| options | <code>object</code> | see {Route4Me} |

<a id="RequestManager+_makeRequest" name="RequestManager+_makeRequest"></a>

### requestManager._makeRequest(options, [callback])

Wrapper around [external:superagent](external:superagent) with all options applied.

**Access:** protected  
**Todo**

- [ ] TODO: rename this method!!!


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>object</code> |  | Request options |
| options.method | <code>string</code> |  | HTTP method |
| options.path | <code>string</code> |  | Server path |
| [options.qs] | <code>object</code> |  | Query string |
| [options.body] | <code>object</code> |  | Body |
| [options.validationContext] | <code>null</code> &#124; <code>string</code> &#124; <code>function</code> | <code></code> | * `null` cause validation disabled (TODO: test this case) * `string` is threated as the name of JSON Schema * `function` will be used for validation. |
| [callback] | <code>[RequestCallback](#module_route4me-node..RequestCallback)</code> |  |  |

<a id="RequestManager+_makeError" name="RequestManager+_makeError"></a>

### requestManager._makeError(error, [callback])

Early cancel request

**Todo**

- [ ] TODO: rename this method!!!
- [ ] TODO: write documentation


| Param | Type | Description |
| --- | --- | --- |
| error | <code>Error</code> | The reason the request was cancelled. |
| [callback] | <code>[RequestCallback](#module_route4me-node..RequestCallback)</code> |  |

