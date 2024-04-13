import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}