import {getEVAHeadMastBarData} from "./model/HeadMastBarData.tsx";
import HeadMastBar from "./HeadMastBar";
import eva_logo from "../../assets/logos/eva/eva_logo.png";
import './Header.css'
import {Link} from "react-router-dom";

function Header() {
    let headMastBarData = getEVAHeadMastBarData();
    return (
        <>
            <HeadMastBar linkURLList={headMastBarData.linkURLList}></HeadMastBar>

            <div className="header">
                <Link to="/" className="eva-logo-heading"><img src={eva_logo}/> European Variation Archive</Link>

                <nav>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/submit-data">Submit Data</Link></li>
                        <li><Link to="/study-browser">Study Browser</Link></li>
                        <li><Link to="/variant-browser">Variant Browser</Link></li>
                        <li><Link to="/ga4gh">GA4GH</Link></li>
                        <li><Link to="/api">API</Link></li>
                        <li><Link to="/rs-release">RS Release</Link></li>
                        <li><Link to="/help">Help</Link></li>
                        <li><Link to="/feedback">Feedback</Link></li>
                        <li><Link to="/vfexample">VFExample</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;