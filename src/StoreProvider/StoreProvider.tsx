import type { PropsWithChildren, ReactNode } from 'react';
import { StateSchema } from './StateSchema';
import { Provider } from 'react-redux';
import { createReduxStore } from './store';

interface StoreProviderProps {
    initialState?: StateSchema
    children: ReactNode
}

export function StoreProvider(props: PropsWithChildren<StoreProviderProps>) {
    const { initialState, children } = props;
    
    const store = createReduxStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
 );
}