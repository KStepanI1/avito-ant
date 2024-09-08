import React from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { About } from "./components/About/About";
import { Cases } from "./components/Cases/Cases";
import { Contacts } from "./components/Contacts/Contacts";
import { Main } from "./components/Main/Main";

function App() {
    return (
        <div className="App">
            <Layout>
                <Main />
                <About />
                <Cases />
                <Contacts />
            </Layout>
        </div>
    );
}

export default App;
