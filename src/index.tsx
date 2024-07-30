import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import SubmitData from "./components/SubmitData/SubmitData.tsx";
import StudyBrowser from "./components/StudyBrowser/StudyBrowser.tsx";
import VariantBrowser from "./components/VariantBrowser/VariantBrowser.tsx";
import GA4GH from "./components/GA4GH/GA4GH.tsx";
import Api from "./components/Api/Api.tsx";
import RSRelease from "./components/RSRelease/RSRelease.tsx";
import Help from "./components/Help/Help.tsx";
import Feedback from "./components/Feedback/Feedback.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import VFExample from "./components/VFExample/VFExample.tsx";
import "./assets/style/style.scss";

const basename = import.meta.env['BASE_URL'] || '/';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename={basename}>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/submit-data" element={<SubmitData/>}/>
                <Route path="/study-browser" element={<StudyBrowser/>}/>
                <Route path="/variant-browser" element={<VariantBrowser/>}/>
                <Route path="/ga4gh" element={<GA4GH/>}/>
                <Route path="/api" element={<Api/>}/>
                <Route path="/rs-release" element={<RSRelease/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
                <Route path={"/vfexample"} element={<VFExample/>}/>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    </React.StrictMode>
)
