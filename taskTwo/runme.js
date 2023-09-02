
import Cart from './cartObject.js';
import readline from 'readline'

// initialization of my cart object
const randomCart = new Cart([])


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function cartCreator() {
    rl.question(
        `Input “add” to add a product to cart
Input “remove” to remove a product from the cart
Input “show-items” to show all the items in the cart
Input “length” to log out the number of products inside the cart
Input “exit” to gracefully exit the program.

command:`,
        (command) => {
            switch (command) {
                case 'add':
                    rl.question('Enter the item you would like to add to the cart: ', (item) => {
                        randomCart.addTocart(item);
                        console.log(`Successfully added to Cart`);
                        cartCreator();
                    });
                    break;

                case 'remove':
                    rl.question('Enter the item you would like to remove from the cart: ', (item) => {
                        randomCart.removeFromCart(item);
                        console.log(`Successfully moved from Cart`);
                        cartCreator();
                    });
                    break;

                case 'show-items':
                    randomCart.showItems()
                    cartCreator();
                    break;

                case 'length':
                    randomCart.getLength()
                    cartCreator();
                    break;

                case 'exit':
                    rl.close();
                    break;

                default:
                    console.log('Invalid command. Please try again.');
                    cartCreator();
                    break;
            }
        }
    );
}

cartCreator();
