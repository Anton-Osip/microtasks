import React from 'react';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <>
            <Header title = {'new header'}/>
            <Body titleForBody = {'new body'}/>
            <Footer titleForFooter = {'new Footer'}/>
        </>
    );
}

export default App;
