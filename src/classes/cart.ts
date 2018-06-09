import { ICartItem } from '../models/cartItem';
export class Cart{
    private items: Array<ICartItem> = [];
    addToCart(productId: number){
        this.items.push({
            id: this.items.length+1,
            productId: productId,
            quantity: 1
        });
        this.renderCartBox();
    }
    getCartItems(){

    }
    renderCartBox(){
        const miniCartContainerEl = document.querySelector('.mini-cart');
        miniCartContainerEl.textContent = `You have ${this.items.length} items in your cart`;

    }
}