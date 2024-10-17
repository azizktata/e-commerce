
import { Item } from '@/app/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface CartState {
    items: Item[];
    total: number;
}

const initialState: CartState = {
    items: [],
    total: 0,

}
const getItem = (state:CartState, id:string) => state.items.find(item => item.id === id);

 const total = (state:CartState) => {
    state.total = state.items.reduce((acc:number, item) => acc + item.price * item.quantity!,0) || 0;
}



const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<{ item: Item; quantity: number }>){
            if(getItem(state, action.payload.item.id)){
                const existingItem = state.items.find(item => item.id === action.payload.item.id);
                if (existingItem) {
                    existingItem.quantity! += action.payload.quantity;
                }
            } else {
                state.items.push({...action.payload.item, quantity: action.payload.quantity})
            }
            
            total(state)
            
        },
        removeFromCart(state, action: PayloadAction<{ id: string }>){
           if (getItem(state, action.payload.id)){

               state.items = state.items.filter(item => item.id !== action.payload.id)
               total(state)
               
           }
            },
        addQuantity(state, action: PayloadAction<{ id: string }>){
            if (getItem(state, action.payload.id)) {
                getItem(state, action.payload.id)!.quantity! += 1
                total(state)
            }
               
            
        },
        reduceQuantity(state, action: PayloadAction<{ id: string }>){
            if (getItem(state, action.payload.id)) {

                getItem(state, action.payload.id)!.quantity! -= 1 
                total(state)
            }
            
        },
       
        
    }
})

export const { addToCart, removeFromCart, addQuantity, reduceQuantity } = cartSlice.actions

export default cartSlice.reducer