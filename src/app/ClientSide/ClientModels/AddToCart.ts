export interface AddToCart {
    map(arg0: (item: { quantity: any; }) => { quantity: any; }): number;
    UserId: number;
    ProductId: number; 
    quantity:number;
  }