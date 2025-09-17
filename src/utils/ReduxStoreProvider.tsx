'use client'

import { Provider } from 'react-redux'
import { makeStore as appStore, Persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify';

export default function ReduxStoreProvider({
    children,
}: {
    children: React.ReactNode
}) {

    return <div>
        <ToastContainer theme='dark'/>
        <Provider store={appStore}>
            <PersistGate loading={null} persistor={Persistor}>
                {children}
            </PersistGate>
        </Provider>
    </div>
}