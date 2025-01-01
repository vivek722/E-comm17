import { createAction, props } from "@ngrx/store";

export const AddCustomerPageSettings = createAction('AddCustomerPageSettings', props<{ pageName: string, editConfig: boolean, deleteConfig: boolean }>());
export const UpdateCustomerPageSettings = createAction('UpdateCustomerPageSettings', props<{ pageName: string, editConfig: boolean, deleteConfig: boolean }>());
export const DeleteCustomerPageSettings = createAction('DeleteCustomerPageSettings', props<{ pageName: string, editConfig: boolean, deleteConfig: boolean }>());