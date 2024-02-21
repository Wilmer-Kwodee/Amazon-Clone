export const initialState = {
    basket: [],
    user: null,
}

// selector
export function getBasketTotal(basket) {
  return basket?.reduce((total, currItem) => currItem.price + total, 0);
}
                // amount = total item
                // item = current item

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            // copy the basket
            let newBasket = [...state.basket]

            if (index >= 0){
                newBasket.splice(index, 1);
                // cut out that specific element
            } 
            else{
                console.warn(
                    `cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return{
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            return{
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;