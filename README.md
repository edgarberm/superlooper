# superlooper

Superlooper is not a carousel... is not a slider... it is not a paging plug-in.
Superlooper simply is a class for paging data from an Array, the implementation
is up to you.



### Use

```javascript
/**
* Create Superlooper object
* @param {Array} data to paginate
* @param {Number} items to show per page
**/
const superlooper = new Superlooper(fakeData, 6)


/**
 * API methods
 */

// Initialize. Returns index 0
superlooper.initialize()

// Next
superlooper.next()

// Previous
superlooper.prev()

// Go to especific index (normalized!)
superlooper.goTo(6)
```



#### Example

You can see in action [here](http://codepen.io/BuiltByEdgar/pen/qbMBKb).
