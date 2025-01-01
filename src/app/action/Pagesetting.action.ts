import { createAction, props } from "@ngrx/store";

export const AddCustomerPageConfigration = createAction('AddCustomerPageConfigration',  props<{ Pagename:string, editConfig:boolean ,deleteConfig:boolean}>());
export const editCustomerPageConfigration = createAction('EditCustomerPageConfigration', props<{ Pagename:string,editConfig:boolean ,deleteConfig:boolean}>());
export const DeleteCustomerPageConfigration = createAction('DeleteCustomerPageConfigration', props<{ Pagename:string,editConfig:boolean ,deleteConfig:boolean}>());