import { useContext } from "react";
import { CartContext } from "./ContextApi";

const useCartApi = () => {
    return useContext(CartContext);
}
export default useCartApi;