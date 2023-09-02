// declaration of my cart object
class Cart {
    #cartArray;
    constructor(cartArray) {
        if (!Array.isArray(cartArray)) {
            console.log('Expecting an array');
            return;
        }
        this.#cartArray = cartArray;
    }

    addTocart(item) {
        this.#cartArray.push(item);
    }

    removeFromCart(item) {
        this.#cartArray = this.#cartArray.filter(x => x !== item);
    }

    getLength () {
        console.log(this.#cartArray.length)
    }

    showItems () {
        console.log(`${this.#cartArray.join(', ')}`)
    }
    
}

export default Cart