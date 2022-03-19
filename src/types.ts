import React from 'react';

export enum ActionKinds {
  'ADD_TO_CART' = 'ADD_TO_CART',
  'REMOVE_ITEM' = 'REMOVE_ITEM',
  'LOADING' = 'LOADING',
  'DISPLAY_ITEMS' = 'DISPLAY_ITEMS',
  'CLEAR_CART' = 'CLEAR_CART',
  'INCREASEITEM' = 'INCREASEITEM',
  'DECREASEITEM' = 'DECREASEITEM',
  'GET_TOTAL' = 'GET_TOTAL',
  'GET_TOTAL_PRICE' = 'GET_TOTAL_PRICE',
  'OPEN_CART' = 'OPEN_CART',
  'CLOSE_CART' = 'CLOSE_CART',
  'SHOW_BY_CATEGORY' = 'SHOW_BY_CATEGORY',
  'TOGGLESIDEBAR' = 'TOGGLESIDEBAR',
  'AUTH_USER' = 'AUTH_USER',
}

export interface ProductInter {
  id: number;
  title: string;
  slug: string;
  category: string;
  price: number;
  img: any;
  amount: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
}

export interface DefaultStateInterface {
  allProducts: ProductInter[];
  allCategories: string[];
  cart: any[];
  totalPrice: number;
  nuOfItemsInCart: number;
  isCartOpen: boolean;
  isLoading: boolean;
  isSidebarOpen: boolean;
  user: null;
}

export interface ActionsInterface {
  type: ActionKinds;
  payload?: any;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
export interface ValueInterface extends DefaultStateInterface {
  openCart: () => void;
  closeCart: () => void;
  showByCategory: (category: string) => void;
  addToCart: (id: number) => void;
  clearCart: () => void;
  removeItem: (id: number) => void;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  toggleSidebar: () => void;
  handleAuth: () => void;
  registerUser: (e: React.FormEvent, userData: IUser) => void;
  signInUser: (e: React.FormEvent, userData: IUser) => void;
  signOutUser: () => void;
}
