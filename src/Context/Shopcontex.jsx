import React, { createContext } from "react";
import all_product from "../Components/Assets/allproduct";

export const Shopcontex = createContext(null);

const Shopcontexprovider = (props) =>{

    const contexvalue = {all_product};

    return (<Shopcontexprovider value = {contexvalue}>

        {props.children}

    </Shopcontexprovider>)

}

export default Shopcontexprovider;