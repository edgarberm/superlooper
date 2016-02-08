/**
* @class
* Provide infinite loop pagination for Arrays.
* @author: Edgar Bermejo @BuiltByEdgar
* @contributor: Rafa Torres @TorresMalpartida
**/
class Superlooper {

  /**
  * constructor
  * @param {Array} data Array
  * @param {Number} Optional. items to show per page
  **/
  constructor (data, perPage = 3) {
    if (!data) throw new Error('I need an Array to work dude!')
    if (!(data instanceof Array)) throw new Error('Invalid data type. Expected an Array')

    this.data = data
    this.num = perPage
    this.index = 0
    this.len = this.data.length
  }


  /**
  * Pagination logic.
  * @param {Number} any number
  * @return {Array} corresponding `data` items to show
  **/
  page (direction) {
    this.index = this.index + direction
    let res = []
    for (let i = 0; i < this.num; i++) {
      let aux = this.index + i
      aux = this.normalize(aux)
      res.push(this.data[aux])
    }
    return res;
  }


  /**
  * Normalize pagination index
  * @param {Number} any number
  * @return {Number} corresponding index to `data` Array
  **/
  normalize (i) {
    switch (Math.sign(i % this.len)) {
      case  1:
        return i % this.len
        break
      case -1:
        return this.len + i % this.len
        break
      default:
        return 0
        break
    }
  }


  /**
 * API methods
  **/

  initialize () { return this.page(0) }  // Returns page 0
  next () { return this.page(1) }
  prev () { return this.page(-1) }
  goTo (index) { return this.page(this.normalize(index - this.index)) }  // Returns corresponding index page

}

export default Superlooper
