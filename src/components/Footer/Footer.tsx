// @ts-ignore
import React from "react";
import ElixirBanner from "../Elixir/ElixirBanner";
import {getEVAFooterColumnsData, getEVAFooterHeadingData} from "./model/FooterData.tsx";
import './Footer.css'
import {FooterColumnData, FooterHeadingData} from "./model/FooterProps.tsx";

function Footer() {
    let footerColumnsData = getEVAFooterColumnsData();
    let footerLogoHeadingData = getEVAFooterHeadingData()
    return (
        <footer>
            <ElixirBanner></ElixirBanner>
            <div className="footer">

                <div className="footer-column-container">
                    <FooterLogo mainHeading={footerLogoHeadingData.mainHeading}
                                subHeading={footerLogoHeadingData.subHeading}></FooterLogo>

                    {footerColumnsData.map((item, index) => (
                        <FooterColumn key={index} columnHeading={item.columnHeading}
                                      columnContent={item.columnContent}/>))}
                </div>

                <FooterMeta></FooterMeta>
            </div>
        </footer>
    );
}

function FooterLogo({mainHeading, subHeading}: FooterHeadingData) {
    return (
        <div className="footer-column footer-heading">
            <a href={mainHeading.url} target="_blank" rel="noopener noreferrer">
                <div className="footer-logo"></div>
            </a>
            <div>
            <span className="footer-subheading">
                <a href={subHeading.url} target="_blank" rel="noopener noreferrer">{subHeading.text}</a>
            </span>
            </div>
        </div>
    );
}

function FooterColumn({columnHeading, columnContent}: FooterColumnData) {
    return (
        <div className="footer-column">
            <h5><a href={columnHeading.url} target="_blank" rel="noopener noreferrer">{columnHeading.text}</a></h5>
            <ul>
                {columnContent.map((item, index) => (
                    <li key={index}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a></li>
                ))}
            </ul>
        </div>
    );
}


function FooterMeta() {
    return (
        <div className="footer-meta">
            <p>
                <a className="footer-meta-link"
                   href="https://www.google.co.uk/maps/place/Hinxton,+Saffron+Walden+CB10+1SD/@52.0815334,0.1891518,17z/data=!3m1!4b1!4m5!3m4!1s0x47d87ccbfbd2538b:0x7bbdb4cde2779ff3!8m2!3d52.0800838!4d0.186415"
                   target="_blank" rel="noopener noreferrer">EMBL-EBI, Wellcome Genome Campus, Hinxton, Cambridgeshire,
                    CB10 1SD, UK.</a>
                <a className="footer-meta-link" href="tel:00441223494444" target="_blank"
                   rel="noopener noreferrer"> Tel: +44 (0)1223 49 44
                    44 </a>
                <a className="footer-meta-link" href="//www.ebi.ac.uk/about/contact" target="_blank"
                   rel="noopener noreferrer"> Full Contact
                    Details</a>
            </p>
            <p>Copyright &copy; EMBL {new Date().getFullYear()} | EMBL-EBI is part of the
                <a href="http://www.embl.org/" target="_blank" rel="noopener noreferrer"> European Molecular Biology
                    Laboratory</a> &nbsp;|&nbsp;
                <a href="https://www.ebi.ac.uk/about/terms-of-use" target="_blank" rel="noopener noreferrer"> Terms of
                    use</a>
            </p>
        </div>
    );
}

export default Footer