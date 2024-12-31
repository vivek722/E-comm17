import { CustomerPagesSettingComponent } from '../app/admin-side/customer-pages-setting/customer-pages-setting.component';
import { SupplierDeshboardComponent } from '../app/SupplierSide/supplier-deshboard/supplier-deshboard.component';
import { environment } from '../environements/environements';

export const endpoints = {
  AUTH: environment. E_Commerce_Url + '/Authenticate',
  Countrie: environment.E_Commerce_Url + '/Countrie',
  Customer: environment.E_Commerce_Url + '/Customer',
  Department: environment.E_Commerce_Url + '/Department',
  Employee: environment.E_Commerce_Url + '/Employee',
  Order: environment.E_Commerce_Url + '/Order',
  Product: environment.E_Commerce_Url + '/Product',
  Role: environment.E_Commerce_Url + '/Role',
  Supplier: environment.E_Commerce_Url + '/Supplier',
  Inventory: environment.E_Commerce_Url + '/Inventory',
  User: environment.E_Commerce_Url + '/User',
  WishList: environment.E_Commerce_Url + '/Wishlist',
  AddToCart: environment.E_Commerce_Url + '/AddToCart',
  CustomerPagesSetting: environment.E_Commerce_Url + '/CustomerPageSetting',
  SupplierPagesSetting: environment.E_Commerce_Url + '/SupplierPageSetting',
};