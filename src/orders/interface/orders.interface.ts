export interface Order {
  order_id: number;
  user_id: number;
  price: number;
  delivery_note: string;
  status: string;
  order_timestamp: Date;
  deliver_timestamp: Date;
  cancel_timestamp: Date;
  product_list: [];
}
