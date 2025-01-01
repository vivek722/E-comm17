import { createReducer, on, State } from "@ngrx/store";
import { SupplierInitialPageSetting} from "../../Shared/helpers/SupplierPageSetting";
import { AddSupplierPageSettings } from "../action/Pagesetting.action";


export interface pageSetting {
    pageName: string;
    editConfig: boolean,
    deleteConfig: boolean
}


export interface AppState {
    pageSetting: any[];
}



export const initialState: AppState = {
    pageSetting: SupplierInitialPageSetting
};

export const configrationSetting = createReducer(
    initialState,
    on(AddSupplierPageSettings , (state, action) =>{
        const AddCustomerPageConfigration = {pageName: action.pageName, editConfig: action.editConfig, deleteConfig: action.deleteConfig};
        return {
            ...state,
        }
    })
)
export function pageConfigSettingReducerF(state: any, action: any) {
    return configrationSetting(state, action);
}