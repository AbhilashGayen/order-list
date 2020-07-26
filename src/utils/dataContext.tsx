import React, { createContext } from "react";

//Order Data
import { OrderData } from "../data/orderData";

//Data Model
import { Order } from "../model/order";

//Setting initial data
const initialData: Order[] = OrderData;

//Declaring interfaces/types
type Props = {
  children: React.ReactNode;
};

type DataContextType = {
  orderData: Order[];
  setOrderData?: (value: Order[]) => void;
};

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

const DataContextProvider: React.FC<Props> = ({ children }) => {
  //declare and set state for orderData
  const [orderData, setOrderData] = React.useState(initialData);

  //return orderData to all children
  return (
    <DataContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
