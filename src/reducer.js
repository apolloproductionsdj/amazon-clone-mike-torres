export const initialState = {
  basket: [],
  user: null,
};

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
      return { state };
      // Logic for Removing item from basket
    default:
      return state;
  }
}

export default reducer;