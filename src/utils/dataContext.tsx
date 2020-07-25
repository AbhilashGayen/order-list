import React, { createContext } from "react";

//Order Data
import { OrderData } from "../data/orderData";

//Data Model
import { Order } from "../model/order";

const initialData: Order[] = OrderData;

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

const DataContextProvider = ({ children }: Props) => {
  const [orderData, setOrderData] = React.useState(initialData);
  return (
    <DataContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
