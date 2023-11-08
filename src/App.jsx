import React from "react";
import IndexPage from "./components/pages/indexPage";
import { Provider as ReduxProvider } from "react-redux";
import store from "./Redux/store";

export default function App() {
    return (
        <div>
            <ReduxProvider store={store}>
                <IndexPage />
            </ReduxProvider>
        </div>
    );
}
