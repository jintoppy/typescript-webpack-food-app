import { IProduct } from '../models/product';
import { Cart } from './cart';

export class ProductList{
    private productListContainer: HTMLDivElement;
    constructor(
        public list: Array<IProduct>,
        public cart: Cart
    ){
        this.productListContainer = document.querySelector('.product-list') as HTMLDivElement;
    }
    renderList(): void {
        this.list.forEach((item: IProduct) => {
            const productDivEl: HTMLDivElement = document.createElement('div') as HTMLDivElement;
            productDivEl.className = 'product-item';
            const productTitleEl : HTMLHeadingElement = document.createElement('h3') as HTMLHeadingElement;
            const productImageEl : HTMLImageElement = document.createElement('img') as HTMLImageElement;
            const productPriceEl: HTMLParagraphElement = document.createElement('p') as HTMLParagraphElement;
            const addProductBtnEl : HTMLButtonElement = document.createElement('button') as HTMLButtonElement;

            productTitleEl.textContent = item.title;
            productImageEl.src = item.imgUrl;
            productPriceEl.textContent = item.price.toString();
            addProductBtnEl.textContent = "Add to Cart";

            addProductBtnEl.addEventListener('click', () => {
                this.cart.addToCart(item.id);
            });

            productDivEl.appendChild(productTitleEl);
            productDivEl.appendChild(productImageEl);
            productDivEl.appendChild(productPriceEl);
            productDivEl.appendChild(addProductBtnEl);

            this.productListContainer.appendChild(productDivEl);
        });
    }
}