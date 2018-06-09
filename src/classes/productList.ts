import * as $ from 'jquery';
import { IProduct } from '../models/product';
import { Cart } from './cart';

export class ProductList{
    private productListContainer: JQuery<HTMLDivElement>;
    constructor(
        public list: Array<IProduct>,
        public cart: Cart
    ){
        this.productListContainer = $('.product-list') as JQuery<HTMLDivElement>;
    }
    renderList(): void {
        this.list.forEach((item: IProduct) => {
            const productDivJqueryEl: JQuery<HTMLDivElement> = $('<div />') as JQuery<HTMLDivElement>;
            productDivJqueryEl.addClass('col-12 col-sm-6 product-item');
            const productTitleEl : JQuery<HTMLHeadingElement> = $('<h3 />') as JQuery<HTMLHeadingElement>;
            const productImageEl : JQuery<HTMLImageElement> = $('<img />') as JQuery<HTMLImageElement>;
            const productPriceEl: JQuery<HTMLParagraphElement> = $('<p />') as JQuery<HTMLParagraphElement>;
            const addProductBtnEl : JQuery<HTMLButtonElement> = $('<button />') as JQuery<HTMLButtonElement>;

            productTitleEl.text(item.title);
            productImageEl.attr('src', item.imgUrl);
            productImageEl.addClass("img-fluid rounded");
            productPriceEl.text(item.price.toString());
            addProductBtnEl.text("Add to Cart");
            addProductBtnEl.addClass("btn btn-success");

            addProductBtnEl.on('click', () => {
                this.cart.addToCart(item.id);
            });

            productDivJqueryEl.append(productTitleEl);
            productDivJqueryEl.append(productImageEl);
            productDivJqueryEl.append(productPriceEl);
            productDivJqueryEl.append(addProductBtnEl);

            this.productListContainer.append(productDivJqueryEl);
        });
    }
}