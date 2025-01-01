import { ActionReducer, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";

// Ensure localStorage is only accessed in a browser environment
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorageSync({
                keys: ['SupplierPageConfig','CustomerPageConfig'], 
                rehydrate: true, 
            })(reducer)(state, action);
        }
        return reducer(state, action);
    };
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
