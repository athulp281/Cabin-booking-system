import React from "react";
import IndexPage from "./components/pages/indexPage";
import { Provider as ReduxProvider } from "react-redux";
import store from "./Redux/store";
import { SnackbarProvider } from "notistack";

export default function App() {
    return (
        <div>
            <ReduxProvider store={store}>
                <SnackbarProvider maxSnack={3}>
                    <IndexPage />
                </SnackbarProvider>
            </ReduxProvider>
        </div>
    );
}
