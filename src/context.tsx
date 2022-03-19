import React, { ReactNode, useContext, useEffect, useReducer } from 'react';
import Reducer from './reducer';
import {
  ActionKinds,
  DefaultStateInterface,
  ValueInterface,
  ProductInter,
  IUser,
} from './types';
import Data from './data';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const { products }: { products: ProductInter[] } = Data;

const categories = products.reduce(
  (acc, item) => {
    if (!acc.includes(item.category)) acc.push(item.category);

    return acc;
  },
  ['all']
);

const intialState: DefaultStateInterface = {
  allProducts: products,
  allCategories: categories,
  cart: [],
  totalPrice: 0,
  nuOfItemsInCart: 0,
  isCartOpen: false,
  isLoading: false,
  isSidebarOpen: false,
  user: null,
};

const AppContext = React.createContext({} as ValueInterface);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, intialState);
  const navigate = useNavigate();
  const handleAuth = () => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is auth', authUser);
      if (authUser) {
        dispatch({ type: ActionKinds.AUTH_USER, payload: authUser });
      } else {
        dispatch({ type: ActionKinds.AUTH_USER, payload: null });
      }
    });
  };
  const registerUser = async (e: React.FormEvent, userData: IUser) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signInUser = async (e: React.FormEvent, userData: IUser) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      if (auth) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signOutUser = async () => {
    if (state.user) {
      await auth.signOut();
      navigate('/auth');
    }
  };

  const openCart = () => {
    dispatch({ type: ActionKinds.OPEN_CART, payload: true });
  };
  const closeCart = () => {
    dispatch({ type: ActionKinds.OPEN_CART, payload: false });
  };

  const showByCategory = (category: string) => {
    dispatch({ type: ActionKinds.SHOW_BY_CATEGORY, payload: category });
  };
  const addToCart = (id: number) => {
    dispatch({ type: ActionKinds.ADD_TO_CART, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: ActionKinds.CLEAR_CART });
  };
  const removeItem = (id: number) => {
    dispatch({ type: ActionKinds.REMOVE_ITEM, payload: id });
  };

  const increaseItem = (id: number) => {
    dispatch({ type: ActionKinds.INCREASEITEM, payload: id });
  };
  const decreaseItem = (id: number) => {
    dispatch({ type: ActionKinds.DECREASEITEM, payload: id });
  };
  const toggleSidebar = () => {
    dispatch({ type: ActionKinds.TOGGLESIDEBAR });
  };

  useEffect(() => {
    dispatch({ type: ActionKinds.GET_TOTAL_PRICE });
    dispatch({ type: ActionKinds.GET_TOTAL });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        openCart,
        closeCart,
        showByCategory,
        addToCart,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        toggleSidebar,
        registerUser,
        handleAuth,
        signInUser,
        signOutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
