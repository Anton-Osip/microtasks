import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";


function App() {
    return (
        <div>
            <div className = {styles.header}><h1>HEADER</h1></div>
            <div className = {styles.body}>
                <div className = {styles.nav}>
                    <div><NavLink to = {"/page1"}>Page1</NavLink></div>
                    <div><NavLink to = {"/page2"}>Page2</NavLink></div>
                    <div><NavLink to = {"/page3"}>Page3</NavLink></div>
                </div>
                <div className = {styles.content}>

                <Routes>
                        <Route
                            element = {<Navigate to = {"/page1"}/>}
                            path = "/"/>
                        <Route
                            element = {<PageOne/>}
                            path = "/page1"/>
                        <Route
                            element = {<PageTwo/>}
                            path = "/page2"/>
                        <Route
                            element = {<PageThree/>}
                            path = "/page3"/>
                        <Route
                            element = {<Error404/>}
                            path = "/error404"/>
                        <Route
                            element = {<Navigate to = {"/error404"}/>}
                            path = "/*"/>

                    </Routes>
                </div>
            </div>
            <div className = {styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
