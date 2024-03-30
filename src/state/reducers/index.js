import { combineReducers } from "redux";
import amountReducer from "./amount-reducer";


 const  reducers = combineReducers({
    amount: amountReducer
})
export default reducers