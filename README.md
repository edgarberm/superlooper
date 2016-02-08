# superlooper
Provide infinite loop pagination for Arrays.


### API methods

```javascript
/**
* Create Superlooper object
* @param {Array} data to paginate
* @param {Number} items to show per page
**/
const superlooper = new Superlooper(fakeData, 6)

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

You can see in action [here](http://codepen.io/BuiltByEdgar/pen/qbMBKb). Expand pen console!
