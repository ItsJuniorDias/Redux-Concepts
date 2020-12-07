import { Reducer } from "redux";
import { ICartState } from "./types";


const cart:Reducer<ICartState> = () => {
  return {
    items: []
  };
}

export default cart;