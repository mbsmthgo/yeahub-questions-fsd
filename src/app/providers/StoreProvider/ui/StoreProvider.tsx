import {Provider} from "react-redux";
import type {ReactNode} from "react";
import {store} from '../config/store'

interface StoreProviderProps {
    children: ReactNode;
}

export function StoreProvider({children}: StoreProviderProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}