//inteface OrderData
export interface Order {
  order_id: number;
  created_date: string;
  customer_avatar: string;
  customer_first_name: string;
  customer_last_name: string;
  fulfillment: string;
  amount_total: string;
  amount_profit: string;
  status: string;
  update: string;
}
