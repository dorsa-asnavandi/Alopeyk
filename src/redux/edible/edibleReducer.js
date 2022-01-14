
const inistialState ={
    dataFromApi: [],
    totalCount: 0,
    itemsInBasket:[],
    totalPrice:0
}


const edibleReducer = (state = inistialState , action) => {
  switch (action.type) {
    case 'FILL_DATA_FROM_API':
      for (let i = 0; i < action.payload.products.length; i++){
         action.payload.products[i].quantity= 0 ;
      }
      return {
        ...state,
        dataFromApi: action.payload
      };
    case 'ADD_ITEM':
          let basketIndex = state.dataFromApi.products.findIndex(product=> product.id === action.payload.id)
          let basketAfterAdd = state.dataFromApi.products[basketIndex]
                basketAfterAdd.quantity += 1;
                let plusPrice = state.totalPrice + basketAfterAdd.price
                let plusTotalCount = state.totalCount + 1
                return{
                    ...state,
                    itemsInBasket: basketAfterAdd,
                    totalCount: plusTotalCount,
                    totalPrice: plusPrice
                };

     case 'REMOVE_ITEM':
           let basketIn = state.dataFromApi.products.findIndex(product=> product.id === action.payload.id)
           let basketAfterRemove = state.dataFromApi.products[basketIn]
               while (basketAfterRemove.quantity > 0) {
                         basketAfterRemove.quantity -= 1;
                         let minusPrice = state.totalPrice - basketAfterRemove.price
                         let minusTotalCount = state.totalCount - 1
                         return{
                             ...state,
                             itemsInBasket: basketAfterRemove,
                             totalCount: minusTotalCount,
                             totalPrice: minusPrice
                         };

         }

    default: return state;


 }

console.log(state);

};


export default edibleReducer
