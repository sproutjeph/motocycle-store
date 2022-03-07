import {
  ActionKinds,
  ActionsInterface,
  DefaultStateInterface,
  ProductInter,
} from './types';
import data from './data';

const { products } = data;
const reducer = (state: DefaultStateInterface, action: ActionsInterface) => {
  if (action.type === ActionKinds.LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === ActionKinds.OPEN_CART) {
    return { ...state, isCartOpen: action.payload };
  }
  if (action.type === ActionKinds.CLOSE_CART) {
    return { ...state, isCartOpen: action.payload };
  }
  if (action.type === ActionKinds.SHOW_BY_CATEGORY) {
    let newProducts: ProductInter[] = [];

    if (action.payload === 'all') {
      newProducts = products.map((product) => product);
    } else {
      newProducts = products.filter(
        (product) => product.category === action.payload
      );
    }
    return { ...state, allProducts: newProducts };
  }

  if (action.type === ActionKinds.ADD_TO_CART) {
    //check if item is in cart then
    const existing = state.cart.find((item) => item.id === action.payload);

    if (existing) {
      //increase amount
      const incart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );

      return { ...state, cart: [...incart] };
    } else {
      const cartItem = products.find(
        (product) => product.id === action.payload
      );

      return { ...state, cart: [...state.cart, cartItem] };
    }
  }

  if (action.type === ActionKinds.INCREASEITEM) {
    const newItems = state.cart.map((item) =>
      item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
    );

    return { ...state, cart: newItems };
  }
  if (action.type === ActionKinds.DECREASEITEM) {
    const newItems = state.cart
      .map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
      )
      .filter((item) => item.amount !== 0);

    return { ...state, cart: newItems };
  }

  if (action.type === ActionKinds.GET_TOTAL) {
    const total = state.cart.reduce((acc, item) => {
      return (acc = item.amount + acc);
    }, 0);

    return { ...state, nuOfItemsInCart: total };
  }
  if (action.type === ActionKinds.GET_TOTAL_PRICE) {
    const totalPrice = state.cart.reduce((acc, item) => {
      return (acc = item.price * item.amount + acc);
    }, 0);

    return { ...state, totalPrice: totalPrice };
  }

  if (action.type === ActionKinds.CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === ActionKinds.REMOVE_ITEM) {
    const newItems = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newItems };
  }

  return state;
};

export default reducer;
