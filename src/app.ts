import { Cart } from './classes/cart';
import { ProductList } from './classes/productList';
import { products } from './data/products';

const cart = new Cart();
const productList = new ProductList(products, cart);

productList.renderList();
cart.renderCartBox();