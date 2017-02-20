<a name="Territories"></a>

## Territories
Territories facility

**Kind**: global class  
**Category**: Territories  

* [Territories](#Territories)
    * [new Territories(requestManager)](#new_Territories_new)
    * [.create(data, [callback])](#Territories+create)
    * [.get(id, [options], [callback])](#Territories+get)
    * [.list([callback])](#Territories+list)
    * [.update(id, data, [callback])](#Territories+update)
    * [.remove(id, [callback])](#Territories+remove)

<a name="new_Territories_new"></a>

### new Territories(requestManager)
Constructor


| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a name="Territories+create"></a>

### territories.create(data, [callback])
Create a new Territory.

**Kind**: instance method of <code>[Territories](#Territories)</code>  
**See**: [https://route4me.io/docs/#create-a-territory](https://route4me.io/docs/#create-a-territory)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:Territories.Territory</code> | Valid Territory data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territory&gt;</code> |  |

<a name="Territories+get"></a>

### territories.get(id, [options], [callback])
Get a specified Territory by ID.

**Kind**: instance method of <code>[Territories](#Territories)</code>  
**See**: [https://route4me.io/docs/#get-a-territory](https://route4me.io/docs/#get-a-territory)  
**Since**: 0.1.8  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | Territory ID |
| [options] | <code>Object</code> |  | Additional options for `get` |
| [options.includeAddresses] | <code>boolean</code> | <code>false</code> | If true, enclosed addresses will be included in a response |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territory&gt;</code> |  |  |

<a name="Territories+list"></a>

### territories.list([callback])
GET all of the Territories defined by a user.

**Kind**: instance method of <code>[Territories](#Territories)</code>  
**See**: [https://route4me.io/docs/#get-multiple-territories](https://route4me.io/docs/#get-multiple-territories)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response, but it is just an array of known schema


| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territories&gt;</code> | 

<a name="Territories+update"></a>

### territories.update(id, data, [callback])
UPDATE a specified Territory.

**Kind**: instance method of <code>[Territories](#Territories)</code>  
**See**: [https://route4me.io/docs/#update-a-territory](https://route4me.io/docs/#update-a-territory)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Territory ID |
| data | <code>jsonschema:Territories.Territory</code> | Valid Territory data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territory&gt;</code> |  |

<a name="Territories+remove"></a>

### territories.remove(id, [callback])
DELETE a specified Territory.

**Kind**: instance method of <code>[Territories](#Territories)</code>  
**See**: [https://route4me.io/docs/#remove-a-territory](https://route4me.io/docs/#remove-a-territory)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Territory ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;boolean&gt;</code> |  |

**documentation generated on Mon, 20 Feb 2017 21:17:17 GMT**
