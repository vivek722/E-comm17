import { createReducer, on, State } from "@ngrx/store";
import { CustomerPageSetting  } from "../../Shared/helpers/customerPagesetting";
import { AddCustomerPageSettings } from "../action/CustomerPageSetting.action";


export interface pageSetting {
    pageName: string;
    editConfig: boolean,
    deleteConfig: boolean
}


export interface AppState {
    pageSetting: any[];
}



export const initialState: AppState = {
    pageSetting: CustomerPageSetting
};

export const CustomerPageconfigrationSetting = createReducer(
    initialState,
    on(AddCustomerPageSettings , (state, action) =>{
        const AddCustomerPageSettings = {pageName: action.pageName, editConfig: action.editConfig, deleteConfig: action.deleteConfig};
        return {
            ...state,
        }
    })
)
export function pageConfigSettingReducerF(state: any, action: any) {
    return CustomerPageconfigrationSetting(state, action);
}