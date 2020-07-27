export const initialState = {
  basket: [
  {
    id: "3254354345",
    title: 
      "New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Space Gray (4th Generation)",
    price: 598.99,
    rating: 4,
    image: 
      "https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX679_.jpg"
  },
  {
    id: "3254354345",
    title: 
      "New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Space Gray (4th Generation)",
    price: 598.99,
    rating: 4,
    image: 
      "https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX679_.jpg"
  }
  ],
  user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) =>{
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET': 
      return { 
        ...state,
        basket: [...state.basket, action.item] 
      };
      // Logic for adding item to basket
    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
        );
      }

      return { 
        ...state, 
        basket: newBasket 
      };
      // Logic for Removing item from basket
    default:
      return state;
  }
}

export default reducer;