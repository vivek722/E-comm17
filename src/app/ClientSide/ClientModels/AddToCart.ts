export interface AddToCart {
    data: any;
    map(arg0: (item: { quantity: any; }) => { quantity: any; }): number;
    UserId: number;
    UserEmail:string;
    ProductId: number; 
    quantity:number;
  }