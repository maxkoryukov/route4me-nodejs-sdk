<a name="AvoidanceZones"></a>

## AvoidanceZones
AvoidanceZones facility

**Kind**: global class  
**Category**: AvoidanceZones  

* [AvoidanceZones](#AvoidanceZones)
    * [new AvoidanceZones(requestManager)](#new_AvoidanceZones_new)
    * [.create(data, [callback])](#AvoidanceZones+create)
    * [.get(id, [callback])](#AvoidanceZones+get)
    * [.list([callback])](#AvoidanceZones+list)
    * [.update(id, data, [callback])](#AvoidanceZones+update)
    * [.remove(id, [callback])](#AvoidanceZones+remove)

<a name="new_AvoidanceZones_new"></a>

### new AvoidanceZones(requestManager)
Constructor


| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a name="AvoidanceZones+create"></a>

### avoidanceZones.create(data, [callback])
Create an Avoidance Zone.

**Kind**: instance method of <code>[AvoidanceZones](#AvoidanceZones)</code>  
**See**: [https://route4me.io/docs/#duplicate-a-route](https://route4me.io/docs/#duplicate-a-route)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:AvoidanceZones.AvoidanceZone</code> | Valid Avoidance Zone data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZone&gt;</code> |  |

<a name="AvoidanceZones+get"></a>

### avoidanceZones.get(id, [callback])
GET a specified Avoidance Zone by ID.

**Kind**: instance method of <code>[AvoidanceZones](#AvoidanceZones)</code>  
**See**: [https://route4me.io/docs/#get-an-avoidance-zone](https://route4me.io/docs/#get-an-avoidance-zone)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Avoidance zone ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZone&gt;</code> |  |

<a name="AvoidanceZones+list"></a>

### avoidanceZones.list([callback])
GET all of the Avoidance Zones defined by a user.

**Kind**: instance method of <code>[AvoidanceZones](#AvoidanceZones)</code>  
**See**: [https://route4me.io/docs/#get-multiple-avoidance-zones](https://route4me.io/docs/#get-multiple-avoidance-zones)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response, but it is just an array of known schema


| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZones&gt;</code> | 

<a name="AvoidanceZones+update"></a>

### avoidanceZones.update(id, data, [callback])
UPDATE a specified Avoidance Zone.

**Kind**: instance method of <code>[AvoidanceZones](#AvoidanceZones)</code>  
**See**: [https://route4me.io/docs/#update-an-avoidance-zone](https://route4me.io/docs/#update-an-avoidance-zone)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Avoidance zone ID |
| data | <code>jsonschema:AvoidanceZones.AvoidanceZone</code> | Valid Avoidance Zone data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZone&gt;</code> |  |

<a name="AvoidanceZones+remove"></a>

### avoidanceZones.remove(id, [callback])
DELETE a specified Avoidance Zone.

**Kind**: instance method of <code>[AvoidanceZones](#AvoidanceZones)</code>  
**See**: [https://route4me.io/docs/#remove-an-avoidance-zone](https://route4me.io/docs/#remove-an-avoidance-zone)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response
- [ ] TODO: parse the response


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Avoidance zone ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.RemoveResponse&gt;</code> |  |

**Example**  
```js
SampleResponse = {"status":true}
```
**documentation generated on Mon, 20 Feb 2017 21:17:17 GMT**
