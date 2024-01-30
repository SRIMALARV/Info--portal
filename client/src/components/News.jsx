import React, { useState, useEffect } from 'react';
import "../styles/News.css";
function App() {
  return (
    <div bodn>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Times Higher Education home | Times Higher Education (THE)</title>
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" lang="en" />
  <meta name="next-head-count" content={5} />
  <noscript data-n-css />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
  <style type="text/css" dangerouslySetInnerHTML={{ __html: '' }} />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        '.react-horizontal-scrolling-menu--scroll-container {\n  display: flex;\n  height: max-content;\n  overflow-y: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.react-horizontal-scrolling-menu--scroll-container.rtl {\n  direction: rtl;\n}\n\n.react-horizontal-scrolling-menu--inner-wrapper {\n  display: flex;\n  overflow-y: hidden;\n}\n\n.react-horizontal-scrolling-menu--wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.react-horizontal-scrolling-menu--header,\n.react-horizontal-scrolling-menu--footer {\n  width: 100%;\n}\n\n.react-horizontal-scrolling-menu--arrow-left,\n.react-horizontal-scrolling-menu--arrow-right {\n  display: flex;\n}\n',
    }}
  />
  <style
    data-emotion="css-global"
    data-s
    dangerouslySetInnerHTML={{ __html: '' }}
  />
  <style
    data-emotion="css-global"
    data-s
    dangerouslySetInnerHTML={{ __html: '' }}
  />
  <style
    data-emotion="css-global"
    data-s
    dangerouslySetInnerHTML={{ __html: '' }}
  />
  <style
    data-emotion="css jrh1m8"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        ".css-jrh1m8{position:-webkit-sticky;position:sticky;top:0px;width:100%;z-index:110;}.css-jrh1m8 [data-position='primary']{box-shadow:0 5px 5px 0px rgba(0, 0, 0, 0.1);}.css-jrh1m8 [data-position='secondary']{display:none;}",
    }}
  />
  <style
    data-emotion="css 15ipomd"
    data-s
    dangerouslySetInnerHTML={{ __html: '.css-15ipomd{z-index:1900;}' }}
  />
  <style
    data-emotion="css 1d39vn8"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d39vn8{padding:3rem 0;background:#F2F2F2;}',
    }}
  />
  <style
    data-emotion="css 73fvzp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-73fvzp{padding:0 1.5rem;}@media only screen and (min-width: 48em){.css-73fvzp{padding:0 3rem;}}@media only screen and (min-width: 62em){.css-73fvzp{padding:0 6rem;}}',
    }}
  />
  <style
    data-emotion="css 1d3v4xz"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d3v4xz{height:inherit;margin:0 auto;max-width:1536px;}',
    }}
  />
  <style
    data-emotion="css ip85wa"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-ip85wa{margin-bottom:var(--chakra-space-4);}@media screen and (min-width: 30em){.css-ip85wa{margin-bottom:var(--chakra-space-6);}}@media screen and (min-width: 62em){.css-ip85wa{margin-bottom:var(--chakra-space-6);}}',
    }}
  />
  <style
    data-emotion="css 15x8rbl"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-15x8rbl{font-size:2.25rem;line-height:1.375;font-weight:700;}@media only screen and (min-width: 48em){.css-15x8rbl{font-size:3rem;line-height:1.25;font-weight:700;color:#3a3a3a;}}',
    }}
  />
  <style
    data-emotion="css rki2lt"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        ".css-rki2lt{background:linear-gradient(350deg, #fe4537 15%, #de1b7c 40%, #4352ff 85%);-webkit-background-size:cover;background-size:cover;-webkit-background-clip:text;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;}.css-rki2lt::after{content:'\\a';white-space:pre;}",
    }}
  />
  <style
    data-emotion="css 1jx4740"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1jx4740{padding-right:2.5rem;}@media only screen and (min-width: 48em){.css-1jx4740>.image{max-width:500px;margin-left:20px;}}',
    }}
  />
  <style
    data-emotion="css 1yz6izs"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1yz6izs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.css-1yz6izs>.subtitle{-webkit-order:2;-ms-flex-order:2;order:2;}.css-1yz6izs>.buttons{-webkit-order:1;-ms-flex-order:1;order:1;}@media only screen and (min-width: 48em){.css-1yz6izs>.subtitle,.css-1yz6izs>.buttons{-webkit-order:0;-ms-flex-order:0;order:0;}}',
    }}
  />
  <style
    data-emotion="css csq53k"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-csq53k{margin-bottom:var(--chakra-space-4);}@media screen and (min-width: 30em){.css-csq53k{margin-bottom:var(--chakra-space-4);}}@media screen and (min-width: 62em){.css-csq53k{margin-bottom:var(--chakra-space-4);}}',
    }}
  />
  <style
    data-emotion="css b0mnwy"
    data-s
    dangerouslySetInnerHTML={{ __html: '.css-b0mnwy{max-width:920px;}' }}
  />
  <style
    data-emotion="css 1c6p3bx"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1c6p3bx *{color:inherit;}.css-1c6p3bx p{color:inherit;font-size:1.125rem;line-height:normal;margin-bottom:1.25rem;}.css-1c6p3bx p:last-child{margin-bottom:0;}.css-1c6p3bx a{color:#1169a3;}.css-1c6p3bx a:hover,.css-1c6p3bx a:focus{color:#0c4b75;}.css-1c6p3bx .text-align-left{text-align:left;}.css-1c6p3bx .text-align-center{text-align:center;}.css-1c6p3bx .text-align-right{text-align:right;}.css-1c6p3bx h1,.css-1c6p3bx .rich-text-h1{margin-bottom:1.5rem;font-size:2.25rem;line-height:1.375;font-weight:700;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h1,.css-1c6p3bx .rich-text-h1{font-size:3rem;line-height:1.375;font-weight:700;color:#3a3a3a;color:inherit;}}.css-1c6p3bx h2,.css-1c6p3bx .rich-text-h2{margin-bottom:1rem;font-size:1.875rem;line-height:1.25;font-weight:700;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h2,.css-1c6p3bx .rich-text-h2{font-size:2.25rem;line-height:1.25;font-weight:700;color:#3a3a3a;color:inherit;}}.css-1c6p3bx h3,.css-1c6p3bx .rich-text-h3{margin-bottom:0.75rem;font-size:1.5rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h3,.css-1c6p3bx .rich-text-h3{font-size:1.875rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-1c6p3bx h4,.css-1c6p3bx .rich-text-h4{margin-bottom:0.5rem;font-size:1.25rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h4,.css-1c6p3bx .rich-text-h4{font-size:1.5rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-1c6p3bx h5,.css-1c6p3bx .rich-text-h5{margin-bottom:0.5rem;font-size:1.125rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h5,.css-1c6p3bx .rich-text-h5{font-size:1.25rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-1c6p3bx h6,.css-1c6p3bx .rich-text-h6{margin-bottom:0.5rem;font-size:1rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h6,.css-1c6p3bx .rich-text-h6{font-size:1.125rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-1c6p3bx .rich-text-normal{font-weight:normal;}.css-1c6p3bx .rich-text-semibold{font-weight:600;}.css-1c6p3bx .rich-text-bold{font-weight:700;}.css-1c6p3bx .rich-text-br{display:block;margin-bottom:0.25rem;}',
    }}
  />
  <style
    data-emotion="css 60yatc"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-60yatc p{color:#3a3a3a;font-size:1.125rem;line-height:1.625;margin-bottom:1.25rem;}.css-60yatc a{color:#4352ff;}.css-60yatc table{width:100%;margin-bottom:2.5rem;}.css-60yatc td{border:1px solid #e9e9e9;padding:0.25rem;text-align:center;font-size:1rem;vertical-align:middle;}.css-60yatc td p{font-size:1rem;margin-bottom:0;}.css-60yatc th{background:#272457;color:#FFFFFF;}.css-60yatc tr:first-of-type td{font-weight:500;font-size:1rem;vertical-align:top;}.css-60yatc tr:first-of-type td p{font-weight:500;font-size:1rem;margin-bottom:0;}.css-60yatc tr:first-of-type td p b{font-weight:500;font-size:1rem;}.css-60yatc tr:first-of-type td p strong{font-weight:500;font-size:1rem;}.css-60yatc h1{font-weight:700;font-size:2.265rem;margin-bottom:1.5rem;}.css-60yatc h2{font-weight:700;line-height:1.375;font-size:1.25rem;}.css-60yatc h3{line-height:inherit;font-size:1.125rem;font-weight:700;margin-bottom:0.75rem;}.css-60yatc h4,.css-60yatc h5,.css-60yatc h6{margin-bottom:1.25rem;}.css-60yatc ul{list-style:initial;margin-left:4rem;margin-bottom:3.5rem;}.css-60yatc .promotional-CTA-card{padding-bottom:1.5rem;}.css-60yatc ol{margin-left:4rem;margin-bottom:3.5rem;}@media not all and (min-resolution: 0.001dpcm){@supports (-webkit-appearance: none){.css-60yatc ol{margin-left:21px;}}}.css-60yatc *{color:inherit;}.css-60yatc p{color:inherit;font-size:1.125rem;line-height:normal;margin-bottom:1.25rem;}.css-60yatc p:last-child{margin-bottom:0;}.css-60yatc a{color:#1169a3;}.css-60yatc a:hover,.css-60yatc a:focus{color:#0c4b75;}.css-60yatc .text-align-left{text-align:left;}.css-60yatc .text-align-center{text-align:center;}.css-60yatc .text-align-right{text-align:right;}.css-60yatc h1,.css-60yatc .rich-text-h1{margin-bottom:1.5rem;font-size:2.25rem;line-height:1.375;font-weight:700;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h1,.css-60yatc .rich-text-h1{font-size:3rem;line-height:1.375;font-weight:700;color:#3a3a3a;color:inherit;}}.css-60yatc h2,.css-60yatc .rich-text-h2{margin-bottom:1rem;font-size:1.875rem;line-height:1.25;font-weight:700;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h2,.css-60yatc .rich-text-h2{font-size:2.25rem;line-height:1.25;font-weight:700;color:#3a3a3a;color:inherit;}}.css-60yatc h3,.css-60yatc .rich-text-h3{margin-bottom:0.75rem;font-size:1.5rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h3,.css-60yatc .rich-text-h3{font-size:1.875rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-60yatc h4,.css-60yatc .rich-text-h4{margin-bottom:0.5rem;font-size:1.25rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h4,.css-60yatc .rich-text-h4{font-size:1.5rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-60yatc h5,.css-60yatc .rich-text-h5{margin-bottom:0.5rem;font-size:1.125rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h5,.css-60yatc .rich-text-h5{font-size:1.25rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-60yatc h6,.css-60yatc .rich-text-h6{margin-bottom:0.5rem;font-size:1rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h6,.css-60yatc .rich-text-h6{font-size:1.125rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-60yatc .rich-text-normal{font-weight:normal;}.css-60yatc .rich-text-semibold{font-weight:600;}.css-60yatc .rich-text-bold{font-weight:700;}.css-60yatc .rich-text-br{display:block;margin-bottom:0.25rem;}',
    }}
  />
  <style
    data-emotion="css 73fvzp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-73fvzp{padding:0 1.5rem;}@media only screen and (min-width: 48em){.css-73fvzp{padding:0 3rem;}}@media only screen and (min-width: 62em){.css-73fvzp{padding:0 6rem;}}',
    }}
  />
  <style
    data-emotion="css 1d3v4xz"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d3v4xz{height:inherit;margin:0 auto;max-width:1536px;}',
    }}
  />
  <style
    data-emotion="css 1mmdl5j"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1mmdl5j{display:grid;grid-gap:var(--chakra-space-2);grid-template-columns:repeat(8, minmax(0, 1fr));list-style-type:none;margin-bottom:var(--chakra-space-6);}@media screen and (min-width: 30em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(8, minmax(0, 1fr));}}@media screen and (min-width: 62em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(12, minmax(0, 1fr));}}',
    }}
  />
  <style
    data-emotion="css d4gw93"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-d4gw93{grid-column:span 4;}@media screen and (min-width: 30em){.css-d4gw93{grid-column:span 4;}}@media screen and (min-width: 62em){.css-d4gw93{grid-column:span 3;}}',
    }}
  />
  <style
    data-emotion="css z3rwz"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-z3rwz{height:100%;}.css-z3rwz>a{height:100%;}.css-z3rwz>a:hover span,.css-z3rwz>a:focus span{background:linear-gradient(\n          350deg,\n          #fe4537 15%,\n          #de1b7c 40%,\n          #4352ff 85%\n        );-webkit-background-size:cover;background-size:cover;-webkit-background-clip:text;background-clip:text;color:transparent;}.css-z3rwz>a:hover .linkcard-cta-icon img,.css-z3rwz>a:focus .linkcard-cta-icon img{-webkit-filter:invert(18%) sepia(85%) saturate(5122%) hue-rotate(320deg) brightness(92%) contrast(88%);filter:invert(18%) sepia(85%) saturate(5122%) hue-rotate(320deg) brightness(92%) contrast(88%);}@media only screen and (min-width: 30em){.css-z3rwz .card-padding-override{padding:0.5rem;}}',
    }}
  />
  <style
    data-emotion="css 1v2nhwr"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1v2nhwr{background:#FFFFFF;border-radius:1rem;width:100%;height:100%;overflow:hidden;}',
    }}
  />
  <style
    data-emotion="css 9e2och"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-9e2och{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:auto;-webkit-box-align:auto;-ms-flex-align:auto;align-items:auto;height:100%;}',
    }}
  />
  <style
    data-emotion="css 1ij6gjl"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1ij6gjl{padding:1rem 1rem;height:100%;background-color:#FFFFFF;}',
    }}
  />
  <style
    data-emotion="css mslov4"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-mslov4{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}',
    }}
  />
  <style
    data-emotion="css 1wxft72"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1wxft72{padding-bottom:0.5rem;font-size:1rem;line-height:1.5;font-weight:700;color:#3a3a3a;}@media only screen and (min-width: 48em){.css-1wxft72{font-size:1.5rem;line-height:1.375;font-weight:600;}}',
    }}
  />
  <style
    data-emotion="css 1gl3nh2"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1gl3nh2{padding-bottom:1rem;}@media only screen and (min-width: 48em){.css-1gl3nh2{padding-right:1rem;}}',
    }}
  />
  <style
    data-emotion="css 1g825xh"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1g825xh{font-size:0.875rem;line-height:1.5;font-weight:400;color:#595959;}',
    }}
  />
  <style
    data-emotion="css tdhcpt"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-tdhcpt{margin-top:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}.css-tdhcpt>h4{font-weight:700;}',
    }}
  />
  <style
    data-emotion="css 1t117fb"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1t117fb{height:32px;width:32px;min-height:1rem;min-width:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
    }}
  />
  <style
    data-emotion="css nisite"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-nisite{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-item:center;-ms-flex-item-align-item:center;align-item:center;}',
    }}
  />
  <style
    data-emotion="css 1ok93uu"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1ok93uu{height:23px;width:32px;min-height:1rem;min-width:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
    }}
  />
  <style
    data-emotion="css tsr7sq"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-tsr7sq{margin:3rem 0;background:#F2F2F2;}',
    }}
  />
  <style
    data-emotion="css 73fvzp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-73fvzp{padding:0 1.5rem;}@media only screen and (min-width: 48em){.css-73fvzp{padding:0 3rem;}}@media only screen and (min-width: 62em){.css-73fvzp{padding:0 6rem;}}',
    }}
  />
  <style
    data-emotion="css 1d3v4xz"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d3v4xz{height:inherit;margin:0 auto;max-width:1536px;}',
    }}
  />
  <style
    data-emotion="css 3kbnr9"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-3kbnr9{margin-top:var(--chakra-space-8);margin-bottom:var(--chakra-space-12);}',
    }}
  />
  <style
    data-emotion="css 1c6p3bx"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1c6p3bx *{color:inherit;}.css-1c6p3bx p{color:inherit;font-size:1.125rem;line-height:normal;margin-bottom:1.25rem;}.css-1c6p3bx p:last-child{margin-bottom:0;}.css-1c6p3bx a{color:#1169a3;}.css-1c6p3bx a:hover,.css-1c6p3bx a:focus{color:#0c4b75;}.css-1c6p3bx .text-align-left{text-align:left;}.css-1c6p3bx .text-align-center{text-align:center;}.css-1c6p3bx .text-align-right{text-align:right;}.css-1c6p3bx h1,.css-1c6p3bx .rich-text-h1{margin-bottom:1.5rem;font-size:2.25rem;line-height:1.375;font-weight:700;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h1,.css-1c6p3bx .rich-text-h1{font-size:3rem;line-height:1.375;font-weight:700;color:#3a3a3a;color:inherit;}}.css-1c6p3bx h2,.css-1c6p3bx .rich-text-h2{margin-bottom:1rem;font-size:1.875rem;line-height:1.25;font-weight:700;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h2,.css-1c6p3bx .rich-text-h2{font-size:2.25rem;line-height:1.25;font-weight:700;color:#3a3a3a;color:inherit;}}.css-1c6p3bx h3,.css-1c6p3bx .rich-text-h3{margin-bottom:0.75rem;font-size:1.5rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h3,.css-1c6p3bx .rich-text-h3{font-size:1.875rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-1c6p3bx h4,.css-1c6p3bx .rich-text-h4{margin-bottom:0.5rem;font-size:1.25rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h4,.css-1c6p3bx .rich-text-h4{font-size:1.5rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-1c6p3bx h5,.css-1c6p3bx .rich-text-h5{margin-bottom:0.5rem;font-size:1.125rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h5,.css-1c6p3bx .rich-text-h5{font-size:1.25rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-1c6p3bx h6,.css-1c6p3bx .rich-text-h6{margin-bottom:0.5rem;font-size:1rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-1c6p3bx h6,.css-1c6p3bx .rich-text-h6{font-size:1.125rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-1c6p3bx .rich-text-normal{font-weight:normal;}.css-1c6p3bx .rich-text-semibold{font-weight:600;}.css-1c6p3bx .rich-text-bold{font-weight:700;}.css-1c6p3bx .rich-text-br{display:block;margin-bottom:0.25rem;}',
    }}
  />
  <style
    data-emotion="css 60yatc"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-60yatc p{color:#3a3a3a;font-size:1.125rem;line-height:1.625;margin-bottom:1.25rem;}.css-60yatc a{color:#4352ff;}.css-60yatc table{width:100%;margin-bottom:2.5rem;}.css-60yatc td{border:1px solid #e9e9e9;padding:0.25rem;text-align:center;font-size:1rem;vertical-align:middle;}.css-60yatc td p{font-size:1rem;margin-bottom:0;}.css-60yatc th{background:#272457;color:#FFFFFF;}.css-60yatc tr:first-of-type td{font-weight:500;font-size:1rem;vertical-align:top;}.css-60yatc tr:first-of-type td p{font-weight:500;font-size:1rem;margin-bottom:0;}.css-60yatc tr:first-of-type td p b{font-weight:500;font-size:1rem;}.css-60yatc tr:first-of-type td p strong{font-weight:500;font-size:1rem;}.css-60yatc h1{font-weight:700;font-size:2.265rem;margin-bottom:1.5rem;}.css-60yatc h2{font-weight:700;line-height:1.375;font-size:1.25rem;}.css-60yatc h3{line-height:inherit;font-size:1.125rem;font-weight:700;margin-bottom:0.75rem;}.css-60yatc h4,.css-60yatc h5,.css-60yatc h6{margin-bottom:1.25rem;}.css-60yatc ul{list-style:initial;margin-left:4rem;margin-bottom:3.5rem;}.css-60yatc .promotional-CTA-card{padding-bottom:1.5rem;}.css-60yatc ol{margin-left:4rem;margin-bottom:3.5rem;}@media not all and (min-resolution: 0.001dpcm){@supports (-webkit-appearance: none){.css-60yatc ol{margin-left:21px;}}}.css-60yatc *{color:inherit;}.css-60yatc p{color:inherit;font-size:1.125rem;line-height:normal;margin-bottom:1.25rem;}.css-60yatc p:last-child{margin-bottom:0;}.css-60yatc a{color:#1169a3;}.css-60yatc a:hover,.css-60yatc a:focus{color:#0c4b75;}.css-60yatc .text-align-left{text-align:left;}.css-60yatc .text-align-center{text-align:center;}.css-60yatc .text-align-right{text-align:right;}.css-60yatc h1,.css-60yatc .rich-text-h1{margin-bottom:1.5rem;font-size:2.25rem;line-height:1.375;font-weight:700;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h1,.css-60yatc .rich-text-h1{font-size:3rem;line-height:1.375;font-weight:700;color:#3a3a3a;color:inherit;}}.css-60yatc h2,.css-60yatc .rich-text-h2{margin-bottom:1rem;font-size:1.875rem;line-height:1.25;font-weight:700;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h2,.css-60yatc .rich-text-h2{font-size:2.25rem;line-height:1.25;font-weight:700;color:#3a3a3a;color:inherit;}}.css-60yatc h3,.css-60yatc .rich-text-h3{margin-bottom:0.75rem;font-size:1.5rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h3,.css-60yatc .rich-text-h3{font-size:1.875rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-60yatc h4,.css-60yatc .rich-text-h4{margin-bottom:0.5rem;font-size:1.25rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h4,.css-60yatc .rich-text-h4{font-size:1.5rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-60yatc h5,.css-60yatc .rich-text-h5{margin-bottom:0.5rem;font-size:1.125rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h5,.css-60yatc .rich-text-h5{font-size:1.25rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-60yatc h6,.css-60yatc .rich-text-h6{margin-bottom:0.5rem;font-size:1rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}@media only screen and (min-width: 30em){.css-60yatc h6,.css-60yatc .rich-text-h6{font-size:1.125rem;line-height:1.25;font-weight:600;color:#3a3a3a;color:inherit;}}.css-60yatc .rich-text-normal{font-weight:normal;}.css-60yatc .rich-text-semibold{font-weight:600;}.css-60yatc .rich-text-bold{font-weight:700;}.css-60yatc .rich-text-br{display:block;margin-bottom:0.25rem;}',
    }}
  />
  <style
    data-emotion="css 1rq22md"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1rq22md{margin-bottom:var(--chakra-space-4);}@media screen and (min-width: 30em){.css-1rq22md{margin-bottom:var(--chakra-space-6);}}@media screen and (min-width: 62em){.css-1rq22md{margin-bottom:var(--chakra-space-8);}}',
    }}
  />
  <style
    data-emotion="css 1hos2zl"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1hos2zl{--grid-layout-gap:1.5rem;--grid-column-count:4;--grid-item--min-width:260px;--gap-count:calc(var(--grid-column-count) - 1);--total-gap-width:calc(var(--gap-count) * var(--grid-layout-gap));--grid-item--max-width:calc(\n      (100% - var(--total-gap-width)) / var(--grid-column-count)\n    );display:grid;grid-template-columns:repeat(\n      auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)\n    );grid-gap:var(--grid-layout-gap);}@media only screen and (min-width: 360px){.css-1hos2zl{--grid-item--min-width:190px;}}',
    }}
  />
  <style
    data-emotion="css z3rwz"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-z3rwz{height:100%;}.css-z3rwz>a{height:100%;}.css-z3rwz>a:hover span,.css-z3rwz>a:focus span{background:linear-gradient(\n          350deg,\n          #fe4537 15%,\n          #de1b7c 40%,\n          #4352ff 85%\n        );-webkit-background-size:cover;background-size:cover;-webkit-background-clip:text;background-clip:text;color:transparent;}.css-z3rwz>a:hover .linkcard-cta-icon img,.css-z3rwz>a:focus .linkcard-cta-icon img{-webkit-filter:invert(18%) sepia(85%) saturate(5122%) hue-rotate(320deg) brightness(92%) contrast(88%);filter:invert(18%) sepia(85%) saturate(5122%) hue-rotate(320deg) brightness(92%) contrast(88%);}@media only screen and (min-width: 30em){.css-z3rwz .card-padding-override{padding:0.5rem;}}',
    }}
  />
  <style
    data-emotion="css 1v2nhwr"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1v2nhwr{background:#FFFFFF;border-radius:1rem;width:100%;height:100%;overflow:hidden;}',
    }}
  />
  <style
    data-emotion="css 9e2och"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-9e2och{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:auto;-webkit-box-align:auto;-ms-flex-align:auto;align-items:auto;height:100%;}',
    }}
  />
  <style
    data-emotion="css 1ij6gjl"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1ij6gjl{padding:1rem 1rem;height:100%;background-color:#FFFFFF;}',
    }}
  />
  <style
    data-emotion="css mslov4"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-mslov4{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}',
    }}
  />
  <style
    data-emotion="css 1wxft72"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1wxft72{padding-bottom:0.5rem;font-size:1rem;line-height:1.5;font-weight:700;color:#3a3a3a;}@media only screen and (min-width: 48em){.css-1wxft72{font-size:1.5rem;line-height:1.375;font-weight:600;}}',
    }}
  />
  <style
    data-emotion="css 1gl3nh2"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1gl3nh2{padding-bottom:1rem;}@media only screen and (min-width: 48em){.css-1gl3nh2{padding-right:1rem;}}',
    }}
  />
  <style
    data-emotion="css 1g825xh"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1g825xh{font-size:0.875rem;line-height:1.5;font-weight:400;color:#595959;}',
    }}
  />
  <style
    data-emotion="css tdhcpt"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-tdhcpt{margin-top:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}.css-tdhcpt>h4{font-weight:700;}',
    }}
  />
  <style
    data-emotion="css 1t117fb"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1t117fb{height:32px;width:32px;min-height:1rem;min-width:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
    }}
  />
  <style
    data-emotion="css nisite"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-nisite{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-item:center;-ms-flex-item-align-item:center;align-item:center;}',
    }}
  />
  <style
    data-emotion="css 152rait"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-152rait{height:23px;width:23px;min-height:1rem;min-width:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
    }}
  />
  <style
    data-emotion="css aq96m7"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-aq96m7{height:25px;width:60px;min-height:1rem;min-width:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
    }}
  />
  <style
    data-emotion="css 73fvzp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-73fvzp{padding:0 1.5rem;}@media only screen and (min-width: 48em){.css-73fvzp{padding:0 3rem;}}@media only screen and (min-width: 62em){.css-73fvzp{padding:0 6rem;}}',
    }}
  />
  <style
    data-emotion="css 1d3v4xz"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d3v4xz{height:inherit;margin:0 auto;max-width:1536px;}',
    }}
  />
  <style
    data-emotion="css 1op23a0"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1op23a0{margin-top:3rem;margin-bottom:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}',
    }}
  />
  <style
    data-emotion="css 1ct0qs3"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1ct0qs3{font-size:1.125rem;line-height:1.375;font-weight:700;color:#3a3a3a;}@media only screen and (min-width: 48em){.css-1ct0qs3{font-size:1.5rem;line-height:1.375;font-weight:700;}}',
    }}
  />
  <style
    data-emotion="css epwtfz"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-epwtfz{-webkit-text-decoration:underline;text-decoration:underline;font-weight:600;font-size:0.875rem;margin-top:2px;}@media only screen and (min-width: 48em){.css-epwtfz{margin-top:8px;}}',
    }}
  />
  <style
    data-emotion="css 10nyotm"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-10nyotm img{width:100%;height:auto;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;}',
    }}
  />
  <style
    data-emotion="css 1mmdl5j"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1mmdl5j{display:grid;grid-gap:var(--chakra-space-2);grid-template-columns:repeat(8, minmax(0, 1fr));list-style-type:none;margin-bottom:var(--chakra-space-6);}@media screen and (min-width: 30em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(8, minmax(0, 1fr));}}@media screen and (min-width: 62em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(12, minmax(0, 1fr));}}',
    }}
  />
  <style
    data-emotion="css 1r2oxhd"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1r2oxhd{grid-column:span 8;}@media screen and (min-width: 30em){.css-1r2oxhd{grid-column:span 4;}}@media screen and (min-width: 62em){.css-1r2oxhd{grid-column:span 3;}}',
    }}
  />
  <style
    data-emotion="css 11bpogj"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-11bpogj{background:none;border-radius:1rem;width:100%;height:100%;overflow:hidden;}',
    }}
  />
  <style
    data-emotion="css 9e2och"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-9e2och{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:auto;-webkit-box-align:auto;-ms-flex-align:auto;align-items:auto;height:100%;}',
    }}
  />
  <style
    data-emotion="css jipda8"
    data-s
    dangerouslySetInnerHTML={{ __html: '.css-jipda8{margin-right:0px;}' }}
  />
  <style
    data-emotion="css yi000q"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-yi000q{display:block;background-color:#d5d5d5;border-radius:1rem;border-top-right-radius:0;border-bottom-left-radius:0;object-fit:cover;}.css-yi000q::before{padding-bottom:100%!important;}',
    }}
  />
  <style
    data-emotion="css 1li8esa"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1li8esa{display:block;background-color:#d5d5d5;border-radius:1rem;border-top-right-radius:0;border-bottom-left-radius:0;object-fit:cover;}.css-1li8esa::before{padding-bottom:100%!important;}',
    }}
  />
  <style
    data-emotion="css 1bqgj8o"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1bqgj8o{padding:1rem 0;height:100%;background-color:transparent;}',
    }}
  />
  <style
    data-emotion="css r3bwbo"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-r3bwbo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:100%;color:white;}',
    }}
  />
  <style
    data-emotion="css 1li3g9s"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1li3g9s{font-size:1rem;line-height:1.5;font-weight:700;color:#3a3a3a;}',
    }}
  />
  <style
    data-emotion="css 10ixdzu"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-10ixdzu{overflow:hidden;max-height:90px;text-indent:0px;}',
    }}
  />
  <style
    data-emotion="css 18sdey2"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-18sdey2{margin-top:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;font-size:0.75rem;color:#3a3a3a;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
    }}
  />
  <style
    data-emotion="css 1e46tsl"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1e46tsl{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}',
    }}
  />
  <style
    data-emotion="css 15p17hw"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-15p17hw{width:0.25rem;height:0.25rem;background:#b0b0b0;border-radius:50%;margin:0.4rem 0.5rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}',
    }}
  />
  <style
    data-emotion="css 18vrdtx"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-18vrdtx>a{-webkit-text-decoration:underline;text-decoration:underline;}',
    }}
  />
  <style
    data-emotion="css 73fvzp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-73fvzp{padding:0 1.5rem;}@media only screen and (min-width: 48em){.css-73fvzp{padding:0 3rem;}}@media only screen and (min-width: 62em){.css-73fvzp{padding:0 6rem;}}',
    }}
  />
  <style
    data-emotion="css 1d3v4xz"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d3v4xz{height:inherit;margin:0 auto;max-width:1536px;}',
    }}
  />
  <style
    data-emotion="css 1op23a0"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1op23a0{margin-top:3rem;margin-bottom:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}',
    }}
  />
  <style
    data-emotion="css 1ct0qs3"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1ct0qs3{font-size:1.125rem;line-height:1.375;font-weight:700;color:#3a3a3a;}@media only screen and (min-width: 48em){.css-1ct0qs3{font-size:1.5rem;line-height:1.375;font-weight:700;}}',
    }}
  />
  <style
    data-emotion="css epwtfz"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-epwtfz{-webkit-text-decoration:underline;text-decoration:underline;font-weight:600;font-size:0.875rem;margin-top:2px;}@media only screen and (min-width: 48em){.css-epwtfz{margin-top:8px;}}',
    }}
  />
  <style
    data-emotion="css vhczm1"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-vhczm1 img{width:100%;height:auto;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;border-bottom-left-radius:0;border-bottom-right-radius:0;}',
    }}
  />
  <style
    data-emotion="css 1mmdl5j"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1mmdl5j{display:grid;grid-gap:var(--chakra-space-2);grid-template-columns:repeat(8, minmax(0, 1fr));list-style-type:none;margin-bottom:var(--chakra-space-6);}@media screen and (min-width: 30em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(8, minmax(0, 1fr));}}@media screen and (min-width: 62em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(12, minmax(0, 1fr));}}',
    }}
  />
  <style
    data-emotion="css 16tqwzg"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-16tqwzg{grid-column:span 8;}@media screen and (min-width: 30em){.css-16tqwzg{grid-column:span 4;}}@media screen and (min-width: 62em){.css-16tqwzg{grid-column:span 4;}}',
    }}
  />
  <style
    data-emotion="css 11bpogj"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-11bpogj{background:none;border-radius:1rem;width:100%;height:100%;overflow:hidden;}',
    }}
  />
  <style
    data-emotion="css 9e2och"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-9e2och{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:auto;-webkit-box-align:auto;-ms-flex-align:auto;align-items:auto;height:100%;}',
    }}
  />
  <style
    data-emotion="css jipda8"
    data-s
    dangerouslySetInnerHTML={{ __html: '.css-jipda8{margin-right:0px;}' }}
  />
  <style
    data-emotion="css yi000q"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-yi000q{display:block;background-color:#d5d5d5;border-radius:1rem;border-top-right-radius:0;border-bottom-left-radius:0;object-fit:cover;}.css-yi000q::before{padding-bottom:100%!important;}',
    }}
  />
  <style
    data-emotion="css 1li8esa"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1li8esa{display:block;background-color:#d5d5d5;border-radius:1rem;border-top-right-radius:0;border-bottom-left-radius:0;object-fit:cover;}.css-1li8esa::before{padding-bottom:100%!important;}',
    }}
  />
  <style
    data-emotion="css uk90pf"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-uk90pf{padding:1rem 1rem;height:100%;background-color:#000000;}',
    }}
  />
  <style
    data-emotion="css r3bwbo"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-r3bwbo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:100%;color:white;}',
    }}
  />
  <style
    data-emotion="css 94u91s"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-94u91s{font-size:1.125rem;line-height:1.375;font-weight:700;color:#3a3a3a;color:#FFFFFF;}',
    }}
  />
  <style
    data-emotion="css 10ixdzu"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-10ixdzu{overflow:hidden;max-height:90px;text-indent:0px;}',
    }}
  />
  <style
    data-emotion="css 1oav312"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1oav312{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;white-space:nowrap;vertical-align:middle;outline:2px solid transparent;outline-offset:2px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;line-height:1.2;border-radius:var(--chakra-radii-lg);font-weight:var(--chakra-fontWeights-semibold);transition-property:var(--chakra-transition-property-common);transition-duration:var(--chakra-transition-duration-normal);height:var(--chakra-sizes-10);min-width:var(--chakra-sizes-10);font-size:0.875rem;-webkit-padding-start:var(--chakra-space-4);padding-inline-start:var(--chakra-space-4);-webkit-padding-end:var(--chakra-space-4);padding-inline-end:var(--chakra-space-4);background:var(--chakra-colors-gray-100);background-color:var(--chakra-colors-white);color:var(--chakra-colors-black);margin-top:var(--chakra-space-3);white-space:initial;}.css-1oav312:focus,.css-1oav312[data-focus]{box-shadow:var(--chakra-shadows-outline);}.css-1oav312[disabled],.css-1oav312[aria-disabled=true],.css-1oav312[data-disabled]{opacity:0.4;cursor:not-allowed;box-shadow:var(--chakra-shadows-none);}.css-1oav312:hover,.css-1oav312[data-hover]{background:var(--chakra-colors-gray-200);}.css-1oav312:hover[disabled],.css-1oav312[data-hover][disabled],.css-1oav312:hover[aria-disabled=true],.css-1oav312[data-hover][aria-disabled=true],.css-1oav312:hover[data-disabled],.css-1oav312[data-hover][data-disabled]{background:var(--chakra-colors-gray-100);}.css-1oav312:active,.css-1oav312[data-active]{background:var(--chakra-colors-gray-300);}',
    }}
  />
  <style
    data-emotion="css 73fvzp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-73fvzp{padding:0 1.5rem;}@media only screen and (min-width: 48em){.css-73fvzp{padding:0 3rem;}}@media only screen and (min-width: 62em){.css-73fvzp{padding:0 6rem;}}',
    }}
  />
  <style
    data-emotion="css 1d3v4xz"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d3v4xz{height:inherit;margin:0 auto;max-width:1536px;}',
    }}
  />
  <style
    data-emotion="css 1op23a0"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1op23a0{margin-top:3rem;margin-bottom:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}',
    }}
  />
  <style
    data-emotion="css 1ct0qs3"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1ct0qs3{font-size:1.125rem;line-height:1.375;font-weight:700;color:#3a3a3a;}@media only screen and (min-width: 48em){.css-1ct0qs3{font-size:1.5rem;line-height:1.375;font-weight:700;}}',
    }}
  />
  <style
    data-emotion="css epwtfz"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-epwtfz{-webkit-text-decoration:underline;text-decoration:underline;font-weight:600;font-size:0.875rem;margin-top:2px;}@media only screen and (min-width: 48em){.css-epwtfz{margin-top:8px;}}',
    }}
  />
  <style
    data-emotion="css 10nyotm"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-10nyotm img{width:100%;height:auto;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;}',
    }}
  />
  <style
    data-emotion="css 1mmdl5j"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1mmdl5j{display:grid;grid-gap:var(--chakra-space-2);grid-template-columns:repeat(8, minmax(0, 1fr));list-style-type:none;margin-bottom:var(--chakra-space-6);}@media screen and (min-width: 30em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(8, minmax(0, 1fr));}}@media screen and (min-width: 62em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(12, minmax(0, 1fr));}}',
    }}
  />
  <style
    data-emotion="css 1r2oxhd"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1r2oxhd{grid-column:span 8;}@media screen and (min-width: 30em){.css-1r2oxhd{grid-column:span 4;}}@media screen and (min-width: 62em){.css-1r2oxhd{grid-column:span 3;}}',
    }}
  />
  <style
    data-emotion="css 11bpogj"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-11bpogj{background:none;border-radius:1rem;width:100%;height:100%;overflow:hidden;}',
    }}
  />
  <style
    data-emotion="css 9e2och"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-9e2och{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:auto;-webkit-box-align:auto;-ms-flex-align:auto;align-items:auto;height:100%;}',
    }}
  />
  <style
    data-emotion="css jipda8"
    data-s
    dangerouslySetInnerHTML={{ __html: '.css-jipda8{margin-right:0px;}' }}
  />
  <style
    data-emotion="css yi000q"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-yi000q{display:block;background-color:#d5d5d5;border-radius:1rem;border-top-right-radius:0;border-bottom-left-radius:0;object-fit:cover;}.css-yi000q::before{padding-bottom:100%!important;}',
    }}
  />
  <style
    data-emotion="css 1li8esa"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1li8esa{display:block;background-color:#d5d5d5;border-radius:1rem;border-top-right-radius:0;border-bottom-left-radius:0;object-fit:cover;}.css-1li8esa::before{padding-bottom:100%!important;}',
    }}
  />
  <style
    data-emotion="css 1bqgj8o"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1bqgj8o{padding:1rem 0;height:100%;background-color:transparent;}',
    }}
  />
  <style
    data-emotion="css r3bwbo"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-r3bwbo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:100%;color:white;}',
    }}
  />
  <style
    data-emotion="css 1li3g9s"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1li3g9s{font-size:1rem;line-height:1.5;font-weight:700;color:#3a3a3a;}',
    }}
  />
  <style
    data-emotion="css 10ixdzu"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-10ixdzu{overflow:hidden;max-height:90px;text-indent:0px;}',
    }}
  />
  <style
    data-emotion="css 73fvzp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-73fvzp{padding:0 1.5rem;}@media only screen and (min-width: 48em){.css-73fvzp{padding:0 3rem;}}@media only screen and (min-width: 62em){.css-73fvzp{padding:0 6rem;}}',
    }}
  />
  <style
    data-emotion="css 1d3v4xz"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d3v4xz{height:inherit;margin:0 auto;max-width:1536px;}',
    }}
  />
  <style
    data-emotion="css 1op23a0"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1op23a0{margin-top:3rem;margin-bottom:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}',
    }}
  />
  <style
    data-emotion="css 1ct0qs3"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1ct0qs3{font-size:1.125rem;line-height:1.375;font-weight:700;color:#3a3a3a;}@media only screen and (min-width: 48em){.css-1ct0qs3{font-size:1.5rem;line-height:1.375;font-weight:700;}}',
    }}
  />
  <style
    data-emotion="css epwtfz"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-epwtfz{-webkit-text-decoration:underline;text-decoration:underline;font-weight:600;font-size:0.875rem;margin-top:2px;}@media only screen and (min-width: 48em){.css-epwtfz{margin-top:8px;}}',
    }}
  />
  <style
    data-emotion="css 1mmdl5j"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1mmdl5j{display:grid;grid-gap:var(--chakra-space-2);grid-template-columns:repeat(8, minmax(0, 1fr));list-style-type:none;margin-bottom:var(--chakra-space-6);}@media screen and (min-width: 30em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(8, minmax(0, 1fr));}}@media screen and (min-width: 62em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(12, minmax(0, 1fr));}}',
    }}
  />
  <style
    data-emotion="css 1xpnij3"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1xpnij3{grid-column:span 8;}@media screen and (min-width: 30em){.css-1xpnij3{grid-column:span 2;}}@media screen and (min-width: 62em){.css-1xpnij3{grid-column:span 3;}}',
    }}
  />
  <style
    data-emotion="css 1mn5p6s"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1mn5p6s{height:100%;}.css-1mn5p6s:hover span,.css-1mn5p6s:focus span{background-image:linear-gradient(\n        130deg,\n        rgba(153, 28, 100, 1) 0%,\n        rgba(196, 53, 93, 1) 35%,\n        rgba(255, 119, 58, 1) 100%\n      );-webkit-background-size:cover;background-size:cover;-webkit-background-clip:text;background-clip:text;color:transparent;}.css-1mn5p6s:hover .cta-icon img,.css-1mn5p6s:focus .cta-icon img{-webkit-filter:invert(18%) sepia(85%) saturate(5122%) hue-rotate(320deg) brightness(92%) contrast(88%);filter:invert(18%) sepia(85%) saturate(5122%) hue-rotate(320deg) brightness(92%) contrast(88%);}',
    }}
  />
  <style
    data-emotion="css 11bpogj"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-11bpogj{background:none;border-radius:1rem;width:100%;height:100%;overflow:hidden;}',
    }}
  />
  <style
    data-emotion="css 9e2och"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-9e2och{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:auto;-webkit-box-align:auto;-ms-flex-align:auto;align-items:auto;height:100%;}',
    }}
  />
  <style
    data-emotion="css iwy8f4"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-iwy8f4{padding:1rem 1rem;height:100%;background-color:white;}',
    }}
  />
  <style
    data-emotion="css 1d5zl5f"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1d5zl5f{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;}@media only screen and (min-width: 48em){.css-1d5zl5f{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;}}@media only screen and (min-width: 62em){.css-1d5zl5f{-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;}}',
    }}
  />
  <style
    data-emotion="css ov1ktg"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-ov1ktg{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}',
    }}
  />
  <style
    data-emotion="css xozab2"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-xozab2{height:45px;width:45px;min-height:1rem;min-width:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
    }}
  />
  <style
    data-emotion="css tsvutt"
    data-s
    dangerouslySetInnerHTML={{ __html: '.css-tsvutt{margin-left:1.5rem;}' }}
  />
  <style
    data-emotion="css 1li3g9s"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1li3g9s{font-size:1rem;line-height:1.5;font-weight:700;color:#3a3a3a;}',
    }}
  />
  <style
    data-emotion="css 1v7gjlr"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1v7gjlr{font-size:0.75rem;line-height:1.5;font-weight:400;color:#3a3a3a;}',
    }}
  />
  <style
    data-emotion="css 73fvzp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-73fvzp{padding:0 1.5rem;}@media only screen and (min-width: 48em){.css-73fvzp{padding:0 3rem;}}@media only screen and (min-width: 62em){.css-73fvzp{padding:0 6rem;}}',
    }}
  />
  <style
    data-emotion="css 1d3v4xz"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d3v4xz{height:inherit;margin:0 auto;max-width:1536px;}',
    }}
  />
  <style
    data-emotion="css lm3s8l"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-lm3s8l{background:#432ea7;padding:1.25rem;border-radius:1rem;background-image:linear-gradient(\n      320deg,\n      #643bbf 0%,\n      #432ea7 25%,\n      #2f1d82 95%\n    );}',
    }}
  />
  <style
    data-emotion="css 1b5rolf"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '@media only screen and (min-width: 48em){.css-1b5rolf{position:relative;padding-right:140px;}}',
    }}
  />
  <style
    data-emotion="css sfajb0"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-sfajb0{margin-bottom:var(--chakra-space-3);}',
    }}
  />
  <style
    data-emotion="css 19bgkzd"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-19bgkzd{color:white;font-size:1.125rem;line-height:1.375;font-weight:700;margin-bottom:1.5rem;}@media only screen and (min-width: 48em){.css-19bgkzd{font-size:1.5rem;line-height:1.375;font-weight:700;}}',
    }}
  />
  <style
    data-emotion="css alrtdn"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-alrtdn{width:100%;position:relative;}.css-alrtdn label{display:block;}.css-alrtdn:focus-within >div{border:none;}@media only screen and (min-width: 48em){.css-alrtdn{background:white;border:1px solid #d5d5d5;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;border-radius:1rem;}}',
    }}
  />
  <style
    data-emotion="css 1jqt0fh"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1jqt0fh{width:100%;}.css-1jqt0fh:focus-within{z-index:1;}.css-1jqt0fh input{height:4rem;padding:1rem 3rem 0 1rem;background:white;}@media only screen and (min-width: 48em){.css-1jqt0fh{background:transparent;}.css-1jqt0fh input{border:none;}}@media only screen and (min-width: 48em){.css-1jqt0fh{width:45%;}}',
    }}
  />
  <style
    data-emotion="css 1yz1288"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1yz1288{position:absolute;z-index:2;top:0.5rem;left:1rem;}',
    }}
  />
  <style
    data-emotion="css 1v7gjlr"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1v7gjlr{font-size:0.75rem;line-height:1.5;font-weight:400;color:#3a3a3a;}',
    }}
  />
  <style
    data-emotion="css aa9de5"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '@media only screen and (min-width: 48em){.css-aa9de5{border-radius:1rem;}}',
    }}
  />
  <style
    data-emotion="css z852xr"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-z852xr{width:100%;min-width:0px;outline:2px solid transparent;outline-offset:2px;position:relative;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;transition-property:var(--chakra-transition-property-common);transition-duration:var(--chakra-transition-duration-normal);font-size:var(--chakra-fontSizes-md);-webkit-padding-start:var(--chakra-space-4);padding-inline-start:var(--chakra-space-4);-webkit-padding-end:var(--chakra-space-4);padding-inline-end:var(--chakra-space-4);height:var(--chakra-sizes-10);border-radius:var(--chakra-radii-md);border:1px solid;border-color:inherit;background:inherit;}.css-z852xr:hover,.css-z852xr[data-hover]{border-color:var(--chakra-colors-gray-300);}.css-z852xr[aria-readonly=true],.css-z852xr[readonly],.css-z852xr[data-readonly]{box-shadow:none!important;-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all;}.css-z852xr[disabled],.css-z852xr[aria-disabled=true],.css-z852xr[data-disabled]{opacity:0.4;cursor:not-allowed;}.css-z852xr[aria-invalid=true],.css-z852xr[data-invalid]{border-color:#E53E3E;box-shadow:0 0 0 1px #E53E3E;}.css-z852xr:focus,.css-z852xr[data-focus]{z-index:1;border-color:#3182ce;box-shadow:0 0 0 1px #3182ce;}@media only screen and (min-width: 48em){.css-z852xr{border-radius:1rem;}}',
    }}
  />
  <style
    data-emotion="css 1o1ca5r"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1o1ca5r{width:100%;margin:1rem 0 1rem;position:relative;}.css-1o1ca5r:focus-within{z-index:1;}.css-1o1ca5r input{height:4rem;padding:1rem 3rem 0 1rem;background:white;}@media only screen and (min-width: 48em){.css-1o1ca5r{background:transparent;}.css-1o1ca5r input{border:none;}}@media only screen and (min-width: 48em){.css-1o1ca5r{width:55%;margin:0;border-left:1px solid #d5d5d5;}.css-1o1ca5r input{padding-right:35%;}.css-1o1ca5r input::-webkit-input-placeholder{position:absolute;top:1.75rem;}.css-1o1ca5r input::-moz-placeholder{position:absolute;top:1.75rem;}.css-1o1ca5r input:-ms-input-placeholder{position:absolute;top:1.75rem;}.css-1o1ca5r input::placeholder{position:absolute;top:1.75rem;}.css-1o1ca5r button{right:8rem;}}',
    }}
  />
  <style
    data-emotion="css 1tovj5q"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '@media only screen and (min-width: 48em){.css-1tovj5q{position:absolute;z-index:2;top:1rem;right:1rem;}}',
    }}
  />
  <style
    data-emotion="css jlig0j"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-jlig0j{background:#6933f7;}.css-jlig0j:hover{background:#6933f7;}@media only screen and (min-width: 48em){.css-jlig0j{height:2rem;padding:calc(0.25rem - 4px) calc(1rem - 0px) 0px;font-size:0.875rem;}}',
    }}
  />
  <style
    data-emotion="css 1hh3hqp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1hh3hqp{white-space:nowrap;color:#FFFFFF;border-radius:0.5rem;padding:0 2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;background:#6933F7;height:3rem;padding:0 calc(2rem - 0px);font-size:1rem;line-height:1;font-weight:600;background:#6933f7;}.css-1hh3hqp:focus{outline:none;box-shadow:0 0 0 0.25rem #6EC6F2;}.css-1hh3hqp>.icon-left{margin-right:0.5rem;}.css-1hh3hqp>.icon-right{margin-left:0.5rem;}.css-1hh3hqp:hover{background:#6933f7;}@media only screen and (min-width: 48em){.css-1hh3hqp{height:2rem;padding:calc(0.25rem - 4px) calc(1rem - 0px) 0px;font-size:0.875rem;}}',
    }}
  />
  <style
    data-emotion="css igpf31"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-igpf31{display:none;}@media only screen and (min-width: 48em){.css-igpf31{display:block;position:absolute;top:50%;right:0;margin-top:-45px;padding-right:10px;}}',
    }}
  />
  <style
    data-emotion="css 73fvzp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-73fvzp{padding:0 1.5rem;}@media only screen and (min-width: 48em){.css-73fvzp{padding:0 3rem;}}@media only screen and (min-width: 62em){.css-73fvzp{padding:0 6rem;}}',
    }}
  />
  <style
    data-emotion="css 1d3v4xz"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d3v4xz{height:inherit;margin:0 auto;max-width:1536px;}',
    }}
  />
  <style
    data-emotion="css 1op23a0"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1op23a0{margin-top:3rem;margin-bottom:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}',
    }}
  />
  <style
    data-emotion="css 1ct0qs3"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1ct0qs3{font-size:1.125rem;line-height:1.375;font-weight:700;color:#3a3a3a;}@media only screen and (min-width: 48em){.css-1ct0qs3{font-size:1.5rem;line-height:1.375;font-weight:700;}}',
    }}
  />
  <style
    data-emotion="css epwtfz"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-epwtfz{-webkit-text-decoration:underline;text-decoration:underline;font-weight:600;font-size:0.875rem;margin-top:2px;}@media only screen and (min-width: 48em){.css-epwtfz{margin-top:8px;}}',
    }}
  />
  <style
    data-emotion="css 10nyotm"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-10nyotm img{width:100%;height:auto;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;}',
    }}
  />
  <style
    data-emotion="css 1mmdl5j"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1mmdl5j{display:grid;grid-gap:var(--chakra-space-2);grid-template-columns:repeat(8, minmax(0, 1fr));list-style-type:none;margin-bottom:var(--chakra-space-6);}@media screen and (min-width: 30em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(8, minmax(0, 1fr));}}@media screen and (min-width: 62em){.css-1mmdl5j{grid-gap:var(--chakra-space-6);grid-template-columns:repeat(12, minmax(0, 1fr));}}',
    }}
  />
  <style
    data-emotion="css 16tqwzg"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-16tqwzg{grid-column:span 8;}@media screen and (min-width: 30em){.css-16tqwzg{grid-column:span 4;}}@media screen and (min-width: 62em){.css-16tqwzg{grid-column:span 4;}}',
    }}
  />
  <style
    data-emotion="css 11bpogj"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-11bpogj{background:none;border-radius:1rem;width:100%;height:100%;overflow:hidden;}',
    }}
  />
  <style
    data-emotion="css 9e2och"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-9e2och{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:auto;-webkit-box-align:auto;-ms-flex-align:auto;align-items:auto;height:100%;}',
    }}
  />
  <style
    data-emotion="css 1bqgj8o"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1bqgj8o{padding:1rem 0;height:100%;background-color:transparent;}',
    }}
  />
  <style
    data-emotion="css r3bwbo"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-r3bwbo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:100%;color:white;}',
    }}
  />
  <style
    data-emotion="css 1li3g9s"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1li3g9s{font-size:1rem;line-height:1.5;font-weight:700;color:#3a3a3a;}',
    }}
  />
  <style
    data-emotion="css 10ixdzu"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-10ixdzu{overflow:hidden;max-height:90px;text-indent:0px;}',
    }}
  />
  <style
    data-emotion="css 18sdey2"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-18sdey2{margin-top:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;font-size:0.75rem;color:#3a3a3a;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
    }}
  />
  <style
    data-emotion="css 18vrdtx"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-18vrdtx>a{-webkit-text-decoration:underline;text-decoration:underline;}',
    }}
  />
  <style
    data-emotion="css 73fvzp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-73fvzp{padding:0 1.5rem;}@media only screen and (min-width: 48em){.css-73fvzp{padding:0 3rem;}}@media only screen and (min-width: 62em){.css-73fvzp{padding:0 6rem;}}',
    }}
  />
  <style
    data-emotion="css 1d3v4xz"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d3v4xz{height:inherit;margin:0 auto;max-width:1536px;}',
    }}
  />
  <style
    data-emotion="css 9zisf1"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        ".css-9zisf1{margin:1rem 0;padding-top:2rem;position:relative;}.css-9zisf1:after{content:'';display:none;position:absolute;z-index:1;top:0;right:0;bottom:0;pointer-events:none;background-image:linear-gradient(\n        270deg,\n        #ffffff 50%,\n        rgba(255, 255, 255, 0) 75%\n      );}@media only screen and (min-width: 0em){.css-9zisf1:after{display:none;width:25%;}}@media only screen and (min-width: 48em){.css-9zisf1:after{display:none;right:6rem;width:5%;}}@media only screen and (min-width: 62em){.css-9zisf1:after{right:90px;}}@media only screen and (min-width: 80em){.css-9zisf1:after{right:8rem;}}.css-9zisf1 .react-horizontal-scrolling-menu--separator{position:absolute;}.css-9zisf1 .react-horizontal-scrolling-menu--scroll-container{width:100%;max-width:100%;scrollbar-width:none;scrollbar-color:#000000;overflow:auto;gap:2rem;}@media only screen and (min-width: 48em){.css-9zisf1 .react-horizontal-scrolling-menu--scroll-container{width:100%;max-width:100%;}}@media only screen and (min-width: 62em){.css-9zisf1 .react-horizontal-scrolling-menu--scroll-container{width:100%;max-width:100%;}}.css-9zisf1 .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar{display:none;height:2px;}.css-9zisf1 .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar-track{background:#f2f2f2;}.css-9zisf1 .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar-thumb{background:#000000;}.css-9zisf1 .react-horizontal-scrolling-menu--item:first-of-type{margin-left:0;}",
    }}
  />
  <style
    data-emotion="css 1ebwezs"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1ebwezs{display:none;}@media only screen and (min-width: 48em){.css-1ebwezs{position:absolute;height:2rem;width:2rem;background:#FFFFFF;top:0;right:3.5rem;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}',
    }}
  />
  <style
    data-emotion="css ricf7w"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-ricf7w{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;white-space:nowrap;color:#1d1d1d;border-radius:100%;width:2rem;height:2rem;border:1px solid #b0b0b0;}.css-ricf7w:focus{outline:none;}.css-ricf7w:hover{border:1px solid #1d1d1d;background:#FFFFFF;}.css-ricf7w:hover{border:1px solid #1d1d1d;}',
    }}
  />
  <style
    data-emotion="css mlxpiq"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-mlxpiq{min-height:1rem;min-width:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
    }}
  />
  <style
    data-emotion="css 1nq7dew"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1nq7dew{height:100%;width:50vw;padding:2rem 0;padding-top:2rem;padding-bottom:2rem;box-sizing:border-box;display:inline-block;}@media only screen and (min-width: 48em){.css-1nq7dew{width:50vw;}}',
    }}
  />
  <style
    data-emotion="css 16qmqvk"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-16qmqvk{height:26rem;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background:rgb(153, 28, 100);background:linear-gradient(\n      130deg,\n      rgba(153, 28, 100, 1) 0%,\n      rgba(196, 53, 93, 1) 35%,\n      rgba(255, 119, 58, 1) 100%\n    );-webkit-background-size:cover;background-size:cover;-webkit-background-position:center;background-position:center;border-radius:1rem;}@media only screen and (min-width: 30em){.css-16qmqvk{height:22rem;}}@media only screen and (min-width: 48em){.css-16qmqvk{height:20rem;}}',
    }}
  />
  <style
    data-emotion="css sfajb0"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-sfajb0{margin-bottom:var(--chakra-space-3);}',
    }}
  />
  <style
    data-emotion="css 15tqzym"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-15tqzym{font-size:1.25rem;line-height:1.375;font-weight:600;color:#595959;color:#FFFFFF;}',
    }}
  />
  <style
    data-emotion="css d1oyvi"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-d1oyvi{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;white-space:nowrap;vertical-align:middle;outline:2px solid transparent;outline-offset:2px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;line-height:1.2;border-radius:var(--chakra-radii-lg);font-weight:var(--chakra-fontWeights-semibold);transition-property:var(--chakra-transition-property-common);transition-duration:var(--chakra-transition-duration-normal);height:var(--chakra-sizes-10);min-width:var(--chakra-sizes-10);font-size:var(--chakra-fontSizes-md);-webkit-padding-start:var(--chakra-space-4);padding-inline-start:var(--chakra-space-4);-webkit-padding-end:var(--chakra-space-4);padding-inline-end:var(--chakra-space-4);background:var(--chakra-colors-gray-100);background-color:var(--chakra-colors-white);color:var(--chakra-colors-black);white-space:initial;}.css-d1oyvi:focus,.css-d1oyvi[data-focus]{box-shadow:var(--chakra-shadows-outline);}.css-d1oyvi[disabled],.css-d1oyvi[aria-disabled=true],.css-d1oyvi[data-disabled]{opacity:0.4;cursor:not-allowed;box-shadow:var(--chakra-shadows-none);}.css-d1oyvi:hover,.css-d1oyvi[data-hover]{background:var(--chakra-colors-gray-200);}.css-d1oyvi:hover[disabled],.css-d1oyvi[data-hover][disabled],.css-d1oyvi:hover[aria-disabled=true],.css-d1oyvi[data-hover][aria-disabled=true],.css-d1oyvi:hover[data-disabled],.css-d1oyvi[data-hover][data-disabled]{background:var(--chakra-colors-gray-100);}.css-d1oyvi:active,.css-d1oyvi[data-active]{background:var(--chakra-colors-gray-300);}',
    }}
  />
  <style
    data-emotion="css 15siit"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-15siit{display:none;}@media only screen and (min-width: 48em){.css-15siit{position:absolute;height:2rem;width:2rem;background:#FFFFFF;top:0;right:1rem;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}',
    }}
  />
  <style
    data-emotion="css 1wa6srz"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1wa6srz{background:#000000;color:#FFFFFF;}.css-1wa6srz nav{padding-top:4rem;padding-bottom:2rem;}.css-1wa6srz a:hover{-webkit-text-decoration:underline;text-decoration:underline;}',
    }}
  />
  <style
    data-emotion="css 73fvzp"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-73fvzp{padding:0 1.5rem;}@media only screen and (min-width: 48em){.css-73fvzp{padding:0 3rem;}}@media only screen and (min-width: 62em){.css-73fvzp{padding:0 6rem;}}',
    }}
  />
  <style
    data-emotion="css 1d3v4xz"
    data-s
    dangerouslySetInnerHTML={{
      __html: '.css-1d3v4xz{height:inherit;margin:0 auto;max-width:1536px;}',
    }}
  />
  <style
    data-emotion="css e17b86"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-e17b86{display:grid;grid-gap:var(--chakra-space-6);grid-row-gap:0px;grid-template-columns:repeat(4, minmax(0, 1fr));list-style-type:none;}@media screen and (min-width: 30em){.css-e17b86{grid-gap:var(--chakra-space-6);grid-row-gap:0px;grid-template-columns:repeat(8, minmax(0, 1fr));}}@media screen and (min-width: 62em){.css-e17b86{grid-gap:var(--chakra-space-8);grid-row-gap:0px;grid-template-columns:repeat(16, minmax(0, 1fr));}}',
    }}
  />
  <style
    data-emotion="css 1ty5i9x"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        ".css-1ty5i9x{margin-bottom:4rem;grid-column:span 4;}.css-1ty5i9x >div{border:none;}.css-1ty5i9x >div button{padding:0;}.css-1ty5i9x >div [role='region']{padding:0;}.css-1ty5i9x svg{top:0.5rem;position:relative;}@media only screen and (min-width: 62em){.css-1ty5i9x{grid-column:span 3;}.css-1ty5i9x:nth-of-type(4n + 1){grid-column:3/span 3;}.css-1ty5i9x svg{display:none;}}.css-1ty5i9x .child li{font-size:0.875rem;font-weight:400;line-height:2.5rem;color:#b0b0b0;}",
    }}
  />
  <style
    data-emotion="css 17mg6aq"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-17mg6aq{border-top-width:1px;border-color:inherit;overflow-anchor:none;}.css-17mg6aq:last-of-type{border-bottom-width:1px;}',
    }}
  />
  <style
    data-emotion="css 1ygl3x"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1ygl3x{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;outline:2px solid transparent;outline-offset:2px;transition-property:var(--chakra-transition-property-common);transition-duration:var(--chakra-transition-duration-normal);font-size:1rem;-webkit-padding-start:var(--chakra-space-4);padding-inline-start:var(--chakra-space-4);-webkit-padding-end:var(--chakra-space-4);padding-inline-end:var(--chakra-space-4);padding-top:var(--chakra-space-2);padding-bottom:var(--chakra-space-2);}.css-1ygl3x:focus,.css-1ygl3x[data-focus]{box-shadow:var(--chakra-shadows-outline);}.css-1ygl3x:hover,.css-1ygl3x[data-hover]{background:var(--chakra-colors-blackAlpha-50);}.css-1ygl3x[disabled],.css-1ygl3x[aria-disabled=true],.css-1ygl3x[data-disabled]{opacity:0.4;cursor:not-allowed;}',
    }}
  />
  <style
    data-emotion="css 1d581zi"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1d581zi{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;}.css-1d581zi h2{font-size:0.875rem;font-weight:700;line-height:2.5rem;}',
    }}
  />
  <style
    data-emotion="css mxa4qn"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-mxa4qn{padding-top:var(--chakra-space-2);-webkit-padding-start:var(--chakra-space-4);padding-inline-start:var(--chakra-space-4);-webkit-padding-end:var(--chakra-space-4);padding-inline-end:var(--chakra-space-4);padding-bottom:var(--chakra-space-5);}',
    }}
  />
  <style
    data-emotion="css 1hrrlax"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-1hrrlax{grid-column:1/-1;}@media only screen and (min-width: 62em){.css-1hrrlax{grid-column:3/span 12;}}',
    }}
  />
  <style
    data-emotion="css b057v7"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-b057v7{display:block;margin:20px 0 5px;font-size:14px;}.css-b057v7 a{color:white;}.css-b057v7>li{display:inline;margin-right:10px;}',
    }}
  />
  <style
    data-emotion="css nah48"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-nah48{grid-column:1/-1;}@media only screen and (min-width: 62em){.css-nah48{grid-column:3/span 12;}}.css-nah48>div{margin-top:2.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}@media only screen and (min-width: 48em){.css-nah48>div{margin-top:1.25rem;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}}.css-nah48>div small{font-size:0.75rem;font-weight:400;color:#b0b0b0;margin-bottom:4rem;}.css-nah48>div ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:2.5rem;}@media only screen and (min-width: 48em){.css-nah48>div ul{margin-top:-0.5rem;}}.css-nah48>div ul svg{margin-left:2.5rem;width:1.25rem;}.css-nah48>div ul a.tiktok div{margin-top:0.5rem;width:1rem;margin-left:2.5rem;}.css-nah48>div ul li:first-of-type svg{margin-left:0;}',
    }}
  />
  <style
    data-emotion="css 12gkpek"
    data-s
    dangerouslySetInnerHTML={{
      __html:
        '.css-12gkpek{width:100%;border:0;margin:0;height:1px;border-bottom:1px solid #595959;margin-bottom:0;}',
    }}
  />
  <style data-emotion="css" data-s dangerouslySetInnerHTML={{ __html: '' }} />
  <style data-emotion="css" data-s dangerouslySetInnerHTML={{ __html: '' }} />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "@font-face {\n            font-family: 'Open Sans Regular';\n            font-style: normal;\n            font-weight: 400;\n            src: url('chrome-extension://gkkdmjjodidppndkbkhhknakbeflbomf/fonts/open_sans/open-sans-v18-latin-regular.woff');\n        }",
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "@font-face {\n            font-family: 'Open Sans Bold';\n            font-style: normal;\n            font-weight: 800;\n            src: url('chrome-extension://gkkdmjjodidppndkbkhhknakbeflbomf/fonts/open_sans/open-sans-v18-latin-800.woff');\n        }",
    }}
  />
  <meta
    httpEquiv="origin-trial"
    content="AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
  />
  <meta
    httpEquiv="origin-trial"
    content="AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
  />
  <div id="__next">
    <main>
      <div data-module="main-ctas" className="css-0">
        <div data-testid="site-container" className="css-73fvzp">
          <div className="css-1d3v4xz">
            <div className="css-1xhb5ik">
              <div data-testid="LinkCards" className="css-1mmdl5j">
                <div className="css-d4gw93">
                  <div className="css-z3rwz">
                    <a
                      href="https://www.timeshighereducation.com/academic/news"
                      data-mz="true"
                      data-type="https://www.timeshighereducation.com/academic/news"
                      data-testid="link"
                      target
                      rel
                    >
                      <div
                        className="card-padding-override css-1v2nhwr"
                        data-testid="card"
                      >
                        <div className="css-9e2och">
                          <div className="css-1ij6gjl">
                            <div className="css-mslov4">
                              <h4 className="css-1wxft72">
                                <span>News</span>
                              </h4>
                              <div className="css-1gl3nh2">
                                <p className="css-1g825xh">
                                  Daily news and analysis for global higher
                                  education
                                </p>
                              </div>
                              <div className="css-tdhcpt">
                                <div className="linkcard-icon css-1oteowz">
                                  <div
                                    data-testid="vector"
                                    className="css-1t117fb"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://course.naturecast.org/media/book.svg"
                                      alt="news"
                                      width={32}
                                      height={32}
                                    />
                                  </div>
                                </div>
                                <div className="linkcard-cta-icon css-nisite">
                                  <div
                                    data-testid="vector"
                                    className="css-1ok93uu"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://clipground.com/images/arrow-1.png"
                                      alt="arrow right"
                                      width={32}
                                      height={23}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="css-d4gw93">
                  <div className="css-z3rwz">
                    <a
                      href="https://www.timeshighereducation.com/world-university-rankings"
                      data-mz="true"
                      data-type="https://www.timeshighereducation.com/world-university-rankings"
                      data-testid="link"
                      target
                      rel
                    >
                      <div
                        className="card-padding-override css-1v2nhwr"
                        data-testid="card"
                      >
                        <div className="css-9e2och">
                          <div className="css-1ij6gjl">
                            <div className="css-mslov4">
                              <h4 className="css-1wxft72">
                                <span>Rankings</span>
                              </h4>
                              <div className="css-1gl3nh2">
                                <p className="css-1g825xh">
                                  The world’s most comprehensive university
                                  rankings
                                </p>
                              </div>
                              <div className="css-tdhcpt">
                                <div className="linkcard-icon css-1oteowz">
                                  <div
                                    data-testid="vector"
                                    className="css-1t117fb"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://th.bing.com/th/id/OIP.U5xvtcIjU-uBx6fY2tnjIQHaHJ?pid=ImgDet&rs=1"
                                      alt="rankings"
                                      width={32}
                                      height={32}
                                    />
                                  </div>
                                </div>
                                <div className="linkcard-cta-icon css-nisite">
                                  <div
                                    data-testid="vector"
                                    className="css-1ok93uu"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://clipground.com/images/arrow-1.png"
                                      alt="arrow right"
                                      width={32}
                                      height={23}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="css-d4gw93">
                  <div className="css-z3rwz">
                    <a
                      href="https://www.timeshighereducation.com/campus"
                      data-mz="true"
                      data-type="https://www.timeshighereducation.com/campus"
                      data-testid="link"
                      target
                      rel
                    >
                      <div
                        className="card-padding-override css-1v2nhwr"
                        data-testid="card"
                      >
                        <div className="css-9e2och">
                          <div className="css-1ij6gjl">
                            <div className="css-mslov4">
                              <h4 className="css-1wxft72">
                                <span>Resources</span>
                              </h4>
                              <div className="css-1gl3nh2">
                                <p className="css-1g825xh">
                                  THE Campus brings together insight and advice
                                  for academics and university staff daily
                                </p>
                              </div>
                              <div className="css-tdhcpt">
                                <div className="linkcard-icon css-1oteowz">
                                  <div
                                    data-testid="vector"
                                    className="css-1t117fb"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://image.freepik.com/free-icon/human-resources-symbol_318-62666.jpg"
                                      alt="resources"
                                      width={32}
                                      height={32}
                                    />
                                  </div>
                                </div>
                                <div className="linkcard-cta-icon css-nisite">
                                  <div
                                    data-testid="vector"
                                    className="css-1ok93uu"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://clipground.com/images/arrow-1.png"
                                      alt="arrow right"
                                      width={32}
                                      height={23}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="css-d4gw93">
                  <div className="css-z3rwz">
                    <a
                      href="https://www.timeshighereducation.com/events"
                      data-mz="true"
                      data-type="https://www.timeshighereducation.com/events"
                      data-testid="link"
                      target
                      rel
                    >
                      <div
                        className="card-padding-override css-1v2nhwr"
                        data-testid="card"
                      >
                        <div className="css-9e2och">
                          <div className="css-1ij6gjl">
                            <div className="css-mslov4">
                              <h4 className="css-1wxft72">
                                <span>Events</span>
                              </h4>
                              <div className="css-1gl3nh2">
                                <p className="css-1g825xh">
                                  Connecting the higher education community
                                </p>
                              </div>
                              <div className="css-tdhcpt">
                                <div className="linkcard-icon css-1oteowz">
                                  <div
                                    data-testid="vector"
                                    className="css-1t117fb"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://cdn2.iconfinder.com/data/icons/mobile-banking-and-pay-online-2-1/66/89-512.png"
                                      alt="events 2"
                                      width={32}
                                      height={32}
                                    />
                                  </div>
                                </div>
                                <div className="linkcard-cta-icon css-nisite">
                                  <div
                                    data-testid="vector"
                                    className="css-1ok93uu"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://clipground.com/images/arrow-1.png"
                                      alt="arrow right"
                                      width={32}
                                      height={23}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="css-d4gw93">
                  <div className="css-z3rwz">
                    <a
                      href="https://www.timeshighereducation.com/student"
                      data-mz="true"
                      data-type="https://www.timeshighereducation.com/student"
                      data-testid="link"
                      target
                      rel
                    >
                      <div
                        className="card-padding-override css-1v2nhwr"
                        data-testid="card"
                      >
                        <div className="css-9e2och">
                          <div className="css-1ij6gjl">
                            <div className="css-mslov4">
                              <h4 className="css-1wxft72">
                                <span>Students</span>
                              </h4>
                              <div className="css-1gl3nh2">
                                <p className="css-1g825xh">
                                  THE Student supports you, from first
                                  university search to your first day on campus
                                </p>
                              </div>
                              <div className="css-tdhcpt">
                                <div className="linkcard-icon css-1oteowz">
                                  <div
                                    data-testid="vector"
                                    className="css-1t117fb"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://th.bing.com/th/id/R.5652602b376e8f04ba5b7af003bd9fa9?rik=tb%2bPC18dS02wsg&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon-bw%2fstudent-icon-1.png&ehk=wRi1I%2fr3gZdAYB8quz1g3EKJMERdltlE3dmjyxA9yX4%3d&risl=&pid=ImgRaw&r=0"
                                      alt="study abroad"
                                      width={32}
                                      height={32}
                                    />
                                  </div>
                                </div>
                                <div className="linkcard-cta-icon css-nisite">
                                  <div
                                    data-testid="vector"
                                    className="css-1ok93uu"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://clipground.com/images/arrow-1.png"
                                      alt="arrow right"
                                      width={32}
                                      height={23}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="css-d4gw93">
                  <div className="css-z3rwz">
                    <a
                      href="https://www.timeshighereducation.com/unijobs/"
                      data-mz="true"
                      data-type="https://www.timeshighereducation.com/unijobs/"
                      data-testid="link"
                      target
                      rel
                    >
                      <div
                        className="card-padding-override css-1v2nhwr"
                        data-testid="card"
                      >
                        <div className="css-9e2och">
                          <div className="css-1ij6gjl">
                            <div className="css-mslov4">
                              <h4 className="css-1wxft72">
                                <span>Jobs</span>
                              </h4>
                              <div className="css-1gl3nh2">
                                <p className="css-1g825xh">
                                  Higher education’s global job board
                                </p>
                              </div>
                              <div className="css-tdhcpt">
                                <div className="linkcard-icon css-1oteowz">
                                  <div
                                    data-testid="vector"
                                    className="css-1t117fb"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://cdn1.iconfinder.com/data/icons/leadership-5/100/identification-512.png"
                                      alt="jobs"
                                      width={35}
                                      height={35}
                                    />
                                  </div>
                                </div>
                                <div className="linkcard-cta-icon css-nisite">
                                  <div
                                    data-testid="vector"
                                    className="css-1ok93uu"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://clipground.com/images/arrow-1.png"
                                      alt="arrow right"
                                      width={32}
                                      height={23}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="css-d4gw93">
                  <div className="css-z3rwz">
                    <a
                      href="https://www.timeshighereducation.com/our-solutions/data-and-insights"
                      data-mz="true"
                      data-type="https://www.timeshighereducation.com/our-solutions/data-and-insights"
                      data-testid="link"
                      target
                      rel
                    >
                      <div
                        className="card-padding-override css-1v2nhwr"
                        data-testid="card"
                      >
                        <div className="css-9e2och">
                          <div className="css-1ij6gjl">
                            <div className="css-mslov4">
                              <h4 className="css-1wxft72">
                                <span>Data</span>
                              </h4>
                              <div className="css-1gl3nh2">
                                <p className="css-1g825xh">
                                  Helping leaders make better decisions
                                </p>
                              </div>
                              <div className="css-tdhcpt">
                                <div className="linkcard-icon css-1oteowz">
                                  <div
                                    data-testid="vector"
                                    className="css-1t117fb"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://cdn-icons-png.flaticon.com/512/72/72907.png"
                                      alt="data"
                                      width={32}
                                      height={32}
                                    />
                                  </div>
                                </div>
                                <div className="linkcard-cta-icon css-nisite">
                                  <div
                                    data-testid="vector"
                                    className="css-1ok93uu"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://clipground.com/images/arrow-1.png"
                                      alt="arrow right"
                                      width={32}
                                      height={23}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="css-d4gw93">
                  <div className="css-z3rwz">
                    <a
                      href="https://www.timeshighereducation.com/our-solutions"
                      data-mz="true"
                      data-type="https://www.timeshighereducation.com/our-solutions"
                      data-testid="link"
                      target
                      rel
                    >
                      <div
                        className="card-padding-override css-1v2nhwr"
                        data-testid="card"
                      >
                        <div className="css-9e2och">
                          <div className="css-1ij6gjl">
                            <div className="css-mslov4">
                              <h4 className="css-1wxft72">
                                <span>Solutions</span>
                              </h4>
                              <div className="css-1gl3nh2">
                                <p className="css-1g825xh">
                                  Services for universities, governments and
                                  corporates
                                </p>
                              </div>
                              <div className="css-tdhcpt">
                                <div className="linkcard-icon css-1oteowz">
                                  <div
                                    data-testid="vector"
                                    className="css-1t117fb"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://th.bing.com/th/id/R.c5df7d627a27828dae1618db28b90553?rik=cFzvc72qdf3wCQ&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2014%2f07%2ficon-innovation-solutions_299199.png&ehk=q5AFtQeXDDRktxf3ec4auk32wmgBF9LD3CINbGa%2fB1k%3d&risl=&pid=ImgRaw&r=0"
                                      alt="solutions"
                                      width={35}
                                      height={35}
                                    />
                                  </div>
                                </div>
                                <div className="linkcard-cta-icon css-nisite">
                                  <div
                                    data-testid="vector"
                                    className="css-1ok93uu"
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://clipground.com/images/arrow-1.png"
                                      alt="arrow right"
                                      width={32}
                                      height={23}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div data-module="contentcards" className="css-0">
        <div data-testid="site-container" className="css-73fvzp">
          <div className="css-1d3v4xz">
            <div className="css-1xhb5ik">
              <div
                data-testid="section-header"
                data-module="section-header"
                className="css-1op23a0"
              >
                <h4 className="css-1ct0qs3">Study abroad</h4>
                <span className="css-epwtfz">
                  <a
                    href="https://www.timeshighereducation.com/student/best-universities"
                    data-mz="true"
                    data-type="https://www.timeshighereducation.com/student/best-universities"
                    data-testid="link"
                    rel
                  >
                    See all
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div data-testid="site-container" className="css-73fvzp">
          <div className="css-1d3v4xz">
            <div className="css-1xhb5ik">
              <div className="css-10nyotm">
                <div data-testid="ContentCards" className="css-1mmdl5j">
                  <div className="css-1r2oxhd">
                    <article className="css-11bpogj" data-testid="card">
                      <div className="css-9e2och">
                        <a
                          href="https://www.timeshighereducation.com/student/best-universities/best-small-universities"
                          data-mz="true"
                          data-type="https://www.timeshighereducation.com/student/best-universities/best-small-universities"
                          data-testid="link"
                          rel
                        >
                          <div className="css-jipda8">
                            <img
                              className="css-1li8esa"
                              src="https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/featured_image/public/small-uni.jpg?itok=QXoXQ5lA"
                              alt="Small world"
                              data-testid="image"
                              loading="lazy"
                            />
                          </div>
                        </a>
                        <div className="css-1bqgj8o">
                          <div className="css-r3bwbo">
                            <a
                              href="https://www.timeshighereducation.com/student/best-universities/best-small-universities"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/student/best-universities/best-small-universities"
                              data-testid="link"
                              target="_self"
                              rel
                            >
                              <h3 className="css-1li3g9s">
                                <div
                                  data-testid="line-clamp"
                                  className="css-10ixdzu"
                                >
                                  <div className="LinesEllipsis  ">
                                    The world’s best small universities 2023
                                    <wbr />
                                  </div>
                                </div>
                              </h3>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="css-1r2oxhd">
                    <article className="css-11bpogj" data-testid="card">
                      <div className="css-9e2och">
                        <a
                          href="https://www.timeshighereducation.com/student/best-universities/best-universities-reducing-inequalities"
                          data-mz="true"
                          data-type="https://www.timeshighereducation.com/student/best-universities/best-universities-reducing-inequalities"
                          data-testid="link"
                          rel
                        >
                          <div className="css-jipda8">
                            <img
                              className="css-1li8esa"
                              src="https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/featured_image/public/istock-1084192994.jpg?itok=nVw1f7Ht"
                              alt="Best universities for reducing inequality"
                              data-testid="image"
                              loading="lazy"
                            />
                          </div>
                        </a>
                        <div className="css-1bqgj8o">
                          <div className="css-r3bwbo">
                            <a
                              href="https://www.timeshighereducation.com/student/best-universities/best-universities-reducing-inequalities"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/student/best-universities/best-universities-reducing-inequalities"
                              data-testid="link"
                              target="_self"
                              rel
                            >
                              <h3 className="css-1li3g9s">
                                <div
                                  data-testid="line-clamp"
                                  className="css-10ixdzu"
                                >
                                  <div className="LinesEllipsis  ">
                                    Best universities for reducing inequalities
                                    <wbr />
                                  </div>
                                </div>
                              </h3>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="css-1r2oxhd">
                    <article className="css-11bpogj" data-testid="card">
                      <div className="css-9e2och">
                        <a
                          href="https://www.timeshighereducation.com/student/best-universities/most-popular-mbas-world"
                          data-mz="true"
                          data-type="https://www.timeshighereducation.com/student/best-universities/most-popular-mbas-world"
                          data-testid="link"
                          rel
                        >
                          <div className="css-jipda8">
                            <img
                              className="css-1li8esa"
                              src="https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/featured_image/public/2023-07/iStock-1368496853.jpg?itok=6WxhM7oc"
                              alt="MBA"
                              data-testid="image"
                              loading="lazy"
                            />
                          </div>
                        </a>
                        <div className="css-1bqgj8o">
                          <div className="css-r3bwbo">
                            <a
                              href="https://www.timeshighereducation.com/student/best-universities/most-popular-mbas-world"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/student/best-universities/most-popular-mbas-world"
                              data-testid="link"
                              target="_self"
                              rel
                            >
                              <h3 className="css-1li3g9s">
                                <div
                                  data-testid="line-clamp"
                                  className="css-10ixdzu"
                                >
                                  <div className="LinesEllipsis  ">
                                    The most popular MBAs in the world
                                    <wbr />
                                  </div>
                                </div>
                              </h3>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="css-1r2oxhd">
                    <article className="css-11bpogj" data-testid="card">
                      <div className="css-9e2och">
                        <a
                          href="https://www.timeshighereducation.com/student/best-universities/10-most-beautiful-universities-europe"
                          data-mz="true"
                          data-type="https://www.timeshighereducation.com/student/best-universities/10-most-beautiful-universities-europe"
                          data-testid="link"
                          rel
                        >
                          <div className="css-jipda8">
                            <img
                              className="css-1li8esa"
                              src="https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/featured_image/public/uppsala_university_1.jpg?itok=YcXuTOcW"
                              alt="Most beautiful universities in Europe"
                              data-testid="image"
                              loading="lazy"
                            />
                          </div>
                        </a>
                        <div className="css-1bqgj8o">
                          <div className="css-r3bwbo">
                            <a
                              href="https://www.timeshighereducation.com/student/best-universities/10-most-beautiful-universities-europe"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/student/best-universities/10-most-beautiful-universities-europe"
                              data-testid="link"
                              target="_self"
                              rel
                            >
                              <h3 className="css-1li3g9s">
                                <div
                                  data-testid="line-clamp"
                                  className="css-10ixdzu"
                                >
                                  <div className="LinesEllipsis  ">
                                    The 10 most beautiful universities in Europe
                                    <wbr />
                                  </div>
                                </div>
                              </h3>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-module="contentcards" className="css-0">
        <div data-testid="site-container" className="css-73fvzp">
          <div className="css-1d3v4xz">
            <div className="css-1xhb5ik">
              <div
                data-testid="section-header"
                data-module="section-header"
                className="css-1op23a0"
              >
                <h4 className="css-1ct0qs3">Latest resources</h4>
                <span className="css-epwtfz">
                  <a
                    href="https://www.timeshighereducation.com/campus"
                    data-mz="true"
                    data-type="https://www.timeshighereducation.com/campus"
                    data-testid="link"
                    rel
                  >
                    See all
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div data-testid="site-container" className="css-73fvzp">
          <div className="css-1d3v4xz">
            <div className="css-1xhb5ik">
              <div className="css-10nyotm">
                <div data-testid="ContentCards" className="css-1mmdl5j">
                  <div className="css-16tqwzg">
                    <article className="css-11bpogj" data-testid="card">
                      <div className="css-9e2och">
                        <div className="css-1bqgj8o">
                          <div className="css-r3bwbo">
                            <a
                              href="https://www.timeshighereducation.com/campus/researcher-you-need-personal-strategycould-business-frameworks-help"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/campus/researcher-you-need-personal-strategycould-business-frameworks-help"
                              data-testid="link"
                              target="_self"
                              rel
                            >
                              <h3 className="css-1li3g9s">
                                <div
                                  data-testid="line-clamp"
                                  className="css-10ixdzu"
                                >
                                  <div className="LinesEllipsis  ">
                                    As a researcher, you need a personal
                                    strategy…could business frameworks help?
                                    <wbr />
                                  </div>
                                </div>
                              </h3>
                            </a>
                            <div className="css-18sdey2">
                              <div
                                data-module="contentcards-tags"
                                className="css-18vrdtx"
                              >
                                <a
                                  href="https://www.timeshighereducation.com/campus/keywords/early-career-research-0"
                                  data-mz="true"
                                  data-type="https://www.timeshighereducation.com/campus/keywords/early-career-research-0"
                                  data-testid="link"
                                  target="_self"
                                  rel
                                >
                                  Early career research
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="css-16tqwzg">
                    <article className="css-11bpogj" data-testid="card">
                      <div className="css-9e2och">
                        <div className="css-1bqgj8o">
                          <div className="css-r3bwbo">
                            <a
                              href="https://www.timeshighereducation.com/campus/nudge-technology-can-help-students-reengage"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/campus/nudge-technology-can-help-students-reengage"
                              data-testid="link"
                              target="_self"
                              rel
                            >
                              <h3 className="css-1li3g9s">
                                <div
                                  data-testid="line-clamp"
                                  className="css-10ixdzu"
                                >
                                  <div className="LinesEllipsis  ">
                                    Nudge technology can help students re-engage{' '}
                                    <wbr />
                                  </div>
                                </div>
                              </h3>
                            </a>
                            <div className="css-18sdey2">
                              <div
                                data-module="contentcards-tags"
                                className="css-18vrdtx"
                              >
                                <a
                                  href="https://www.timeshighereducation.com/campus/keywords/student-success-0"
                                  data-mz="true"
                                  data-type="https://www.timeshighereducation.com/campus/keywords/student-success-0"
                                  data-testid="link"
                                  target="_self"
                                  rel
                                >
                                  Student success
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="css-16tqwzg">
                    <article className="css-11bpogj" data-testid="card">
                      <div className="css-9e2och">
                        <div className="css-1bqgj8o">
                          <div className="css-r3bwbo">
                            <a
                              href="https://www.timeshighereducation.com/campus/practical-tips-remember-when-designing-activities-utilising-chatgpt"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/campus/practical-tips-remember-when-designing-activities-utilising-chatgpt"
                              data-testid="link"
                              target="_self"
                              rel
                            >
                              <h3 className="css-1li3g9s">
                                <div
                                  data-testid="line-clamp"
                                  className="css-10ixdzu"
                                >
                                  <div className="LinesEllipsis  ">
                                    Practical tips to remember when designing
                                    activities utilising ChatGPT
                                    <wbr />
                                  </div>
                                </div>
                              </h3>
                            </a>
                            <div className="css-18sdey2">
                              <div
                                data-module="contentcards-tags"
                                className="css-18vrdtx"
                              >
                                <a
                                  href="https://www.timeshighereducation.com/campus/keywords/digital-transformation-0"
                                  data-mz="true"
                                  data-type="https://www.timeshighereducation.com/campus/keywords/digital-transformation-0"
                                  data-testid="link"
                                  target="_self"
                                  rel
                                >
                                  Digital transformation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="css-16tqwzg">
                    <article className="css-11bpogj" data-testid="card">
                      <div className="css-9e2och">
                        <div className="css-1bqgj8o">
                          <div className="css-r3bwbo">
                            <a
                              href="https://www.timeshighereducation.com/campus/how-improve-your-wellbeing-higher-education"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/campus/how-improve-your-wellbeing-higher-education"
                              data-testid="link"
                              target="_self"
                              rel
                            >
                              <h3 className="css-1li3g9s">
                                <div
                                  data-testid="line-clamp"
                                  className="css-10ixdzu"
                                >
                                  <div className="LinesEllipsis  ">
                                    How to improve your well-being in higher
                                    education
                                    <wbr />
                                  </div>
                                </div>
                              </h3>
                            </a>
                            <div className="css-18sdey2">
                              <div
                                data-module="contentcards-tags"
                                className="css-18vrdtx"
                              >
                                <a
                                  href="https://www.timeshighereducation.com/campus/keywords/equity-diversity-and-inclusion-0"
                                  data-mz="true"
                                  data-type="https://www.timeshighereducation.com/campus/keywords/equity-diversity-and-inclusion-0"
                                  data-testid="link"
                                  target="_self"
                                  rel
                                >
                                  Equity, diversity and inclusion
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="css-16tqwzg">
                    <article className="css-11bpogj" data-testid="card">
                      <div className="css-9e2och">
                        <div className="css-1bqgj8o">
                          <div className="css-r3bwbo">
                            <a
                              href="https://www.timeshighereducation.com/campus/chatgpt-and-generative-ai-25-applications-teaching-and-assessment"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/campus/chatgpt-and-generative-ai-25-applications-teaching-and-assessment"
                              data-testid="link"
                              target="_self"
                              rel
                            >
                              <h3 className="css-1li3g9s">
                                <div
                                  data-testid="line-clamp"
                                  className="css-10ixdzu"
                                >
                                  <div className="LinesEllipsis  ">
                                    ChatGPT and generative AI: 25 applications
                                    in teaching and assessment <wbr />
                                  </div>
                                </div>
                              </h3>
                            </a>
                            <div className="css-18sdey2">
                              <div
                                data-module="contentcards-tags"
                                className="css-18vrdtx"
                              >
                                <a
                                  href="https://www.timeshighereducation.com/campus/keywords/digital-transformation-0"
                                  data-mz="true"
                                  data-type="https://www.timeshighereducation.com/campus/keywords/digital-transformation-0"
                                  data-testid="link"
                                  target="_self"
                                  rel
                                >
                                  Digital transformation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="css-16tqwzg">
                    <article className="css-11bpogj" data-testid="card">
                      <div className="css-9e2och">
                        <div className="css-1bqgj8o">
                          <div className="css-r3bwbo">
                            <a
                              href="https://www.timeshighereducation.com/campus/wholecampus-approach-boost-belonging-student-success"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/campus/wholecampus-approach-boost-belonging-student-success"
                              data-testid="link"
                              target="_self"
                              rel
                            >
                              <h3 className="css-1li3g9s">
                                <div
                                  data-testid="line-clamp"
                                  className="css-10ixdzu"
                                >
                                  <div className="LinesEllipsis  ">
                                    A whole-campus approach to boost belonging
                                    for student success
                                    <wbr />
                                  </div>
                                </div>
                              </h3>
                            </a>
                            <div className="css-18sdey2">
                              <div
                                data-module="contentcards-tags"
                                className="css-18vrdtx"
                              >
                                <a
                                  href="https://www.timeshighereducation.com/campus/keywords/student-success-0"
                                  data-mz="true"
                                  data-type="https://www.timeshighereducation.com/campus/keywords/student-success-0"
                                  data-testid="link"
                                  target="_self"
                                  rel
                                >
                                  Student success
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer data-testid="footer" data-module="footer" className="css-1wa6srz">
      <div className="chakra-accordion css-0">
        <nav
          data-testid="site-container"
          className="css-73fvzp"
          aria-label="Footer Navigation"
        >
          <div className="css-1d3v4xz">
            <div className="css-1xhb5ik">
              <ul data-testid="grid" className="css-e17b86">
                <li className="css-1ty5i9x">
                  <div className="chakra-accordion__item css-17mg6aq">
                    <button
                      type="button"
                      id="accordion-button-0"
                      aria-expanded="true"
                      aria-controls="accordion-panel-0"
                      className="chakra-accordion__button css-1ygl3x"
                      data-index={0}
                    >
                     
                          
                    </button>
                   
                  </div>
                </li>
                <li className="css-1ty5i9x">
                  <div className="chakra-accordion__item css-17mg6aq">
                    <button
                      type="button"
                      id="accordion-button-1"
                      aria-expanded="false"
                      aria-controls="accordion-panel-1"
                      className="chakra-accordion__button css-1ygl3x"
                      data-index={1}
                    >
                      
                    </button>
                    <div
                      className="chakra-collapse"
                      style={{
                        overflow: 'hidden',
                        display: 'none',
                        opacity: 0,
                        height: 0,
                      }}
                    >
                      <div
                        role="region"
                        id="accordion-panel-1"
                        aria-labelledby="accordion-button-1"
                        className="chakra-accordion__panel css-mxa4qn"
                      >
                        <ul className="child">
                          <li>
                            <a
                              href="https://www.timeshighereducation.com/terms-and-conditions"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/terms-and-conditions"
                              data-testid="link"
                              rel
                            >
                              Terms &amp; conditions
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.timeshighereducation.com/privacy-policy"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/privacy-policy"
                              data-testid="link"
                              rel
                            >
                              Privacy
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.timeshighereducation.com/cookie-policy"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/cookie-policy"
                              data-testid="link"
                              rel
                            >
                              Cookie policy
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.timeshighereducation.com/about-us/modern-slavery-act-2015"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/about-us/modern-slavery-act-2015"
                              data-testid="link"
                              rel
                            >
                              Modern slavery statement
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.timeshighereducation.com/content/online-accessibility-statement"
                              data-mz="true"
                              data-type="https://www.timeshighereducation.com/content/online-accessibility-statement"
                              data-testid="link"
                              rel
                            >
                              Accessibility statement
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="css-1hrrlax">
                  <ul className="css-b057v7">
                    <li style={{ display: 'none' }}>
                     
                    </li>
                    <li style={{ display: 'block' }}>
                      
                    </li>
                  </ul>
                </div>
                <div className="css-nah48">
                  <hr data-testid="divider" className="css-12gkpek" />
                  <div>
                   
                  
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  </div>
  <div id="chakra-toast-portal">
    <ul
      id="chakra-toast-manager-top"
      style={{
        position: 'fixed',
        zIndex: 5500,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        margin: '0px auto',
        top: 'env(safe-area-inset-top, 0px)',
        right: 'env(safe-area-inset-right, 0px)',
        left: 'env(safe-area-inset-left, 0px)',
      }}
    />
    <ul
      id="chakra-toast-manager-top-left"
      style={{
        position: 'fixed',
        zIndex: 5500,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        top: 'env(safe-area-inset-top, 0px)',
        left: 'env(safe-area-inset-left, 0px)',
      }}
    />
    <ul
      id="chakra-toast-manager-top-right"
      style={{
        position: 'fixed',
        zIndex: 5500,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        top: 'env(safe-area-inset-top, 0px)',
        right: 'env(safe-area-inset-right, 0px)',
      }}
    />
    <ul
      id="chakra-toast-manager-bottom-left"
      style={{
        position: 'fixed',
        zIndex: 5500,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        bottom: 'env(safe-area-inset-bottom, 0px)',
        left: 'env(safe-area-inset-left, 0px)',
      }}
    />
    <ul
      id="chakra-toast-manager-bottom"
      style={{
        position: 'fixed',
        zIndex: 5500,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        margin: '0px auto',
        bottom: 'env(safe-area-inset-bottom, 0px)',
        right: 'env(safe-area-inset-right, 0px)',
        left: 'env(safe-area-inset-left, 0px)',
      }}
    />
    <ul
      id="chakra-toast-manager-bottom-right"
      style={{
        position: 'fixed',
        zIndex: 5500,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        bottom: 'env(safe-area-inset-bottom, 0px)',
        right: 'env(safe-area-inset-right, 0px)',
      }}
    />
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">Singapore</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">campus</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">‘</span>
    <span className="LinesEllipsis-unit">delusional</span>
    <span className="LinesEllipsis-unit">’</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">for</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">cash</span>
    <span className="LinesEllipsis-unit">-</span>
    <span className="LinesEllipsis-unit">strapped</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">university</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">First</span>
    <span className="LinesEllipsis-unit">-</span>
    <span className="LinesEllipsis-unit">year</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">study</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">abroad</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">gains</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">popularity</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">in</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">US</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">Professional</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">staff</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">call</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">for</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">holiday</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">equality</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">with</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">academics</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">EU</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">taste</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">for</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">big</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">science</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">excluding</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">small</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">nations</span>
    <span className="LinesEllipsis-unit">,</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">minister</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">claims</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '389.6px',
      fontSize: 18,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">World</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">University</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">Rankings</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">2023</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '389.6px',
      fontSize: 18,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">Impact</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">Rankings</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">2023</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '389.6px',
      fontSize: 18,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">World</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">Reputation</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">Rankings</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">2022</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '389.6px',
      fontSize: 18,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">Arab</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">University</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">Rankings</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '389.6px',
      fontSize: 18,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">Asia</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">University</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">Rankings</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">2023</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '389.6px',
      fontSize: 18,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">Participate</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">The</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">world</span>
    <span className="LinesEllipsis-unit">’</span>
    <span className="LinesEllipsis-unit">s</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">best</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">small</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">universities</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">2023</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">Best</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">universities</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">for</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">reducing</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">inequalities</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">The</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">most</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">popular</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">MBAs</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">in</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">the</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">world</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">The</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">10</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">most</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">beautiful</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">universities</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">in</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">Europe</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">As</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">a</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">researcher</span>
    <span className="LinesEllipsis-unit">,</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">you</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">need</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">a</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">personal</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">strategy</span>
    <span className="LinesEllipsis-unit">…</span>
    <span className="LinesEllipsis-unit">could</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">business</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">frameworks</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">help</span>
    <span className="LinesEllipsis-unit">?</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">Nudge</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">technology</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">can</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">help</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">students</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">re</span>
    <span className="LinesEllipsis-unit">-</span>
    <span className="LinesEllipsis-unit">engage</span>
    <span className="LinesEllipsis-unit"> </span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">Practical</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">tips</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">to</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">remember</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">when</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">designing</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">activities</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">utilising</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">ChatGPT</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">How</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">to</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">improve</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">your</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">well</span>
    <span className="LinesEllipsis-unit">-</span>
    <span className="LinesEllipsis-unit">being</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">in</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">higher</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">education</span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">ChatGPT</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">and</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">generative</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">AI</span>
    <span className="LinesEllipsis-unit">:</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">25</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">applications</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">in</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">teaching</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">and</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">assessment</span>
    <span className="LinesEllipsis-unit"> </span>
  </div>
  <div
    className="LinesEllipsis-canvas "
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: '421.6px',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textIndent: 0,
      whiteSpace: 'normal',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      padding: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0,
      overflow: 'hidden',
      border: 'none',
    }}
  >
    <span className="LinesEllipsis-unit">A</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">whole</span>
    <span className="LinesEllipsis-unit">-</span>
    <span className="LinesEllipsis-unit">campus</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">approach</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">to</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">boost</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">belonging</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">for</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">student</span>
    <span className="LinesEllipsis-unit"> </span>
    <span className="LinesEllipsis-unit">success</span>
  </div>
  <iframe
    height={0}
    width={0}
    style={{ display: 'none', visibility: 'hidden' }}
    src="https://11660131.fls.doubleclick.net/activityi;src=11660131;type=invmedia;cat=theco0;ord=2438259292419;auiddc=1010584269.1692029207;gtm=45fe3890;uaa=x86;uab=64;uafvl=Not%252FA)Brand%3B99.0.0.0%7CGoogle%2520Chrome%3B115.0.5790.171%7CChromium%3B115.0.5790.171;uamb=0;uam=;uap=Windows;uapv=15.0.0;uaw=0;epver=2;~oref=https%3A%2F%2Fwww.timeshighereducation.com%2F?"
  />
  <next-route-announcer>
    <p
      aria-live="assertive"
      id="__next-route-announcer__"
      role="alert"
      style={{
        border: 0,
        clip: 'rect(0px, 0px, 0px, 0px)',
        height: 1,
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: 1,
        whiteSpace: 'nowrap',
        overflowWrap: 'normal',
      }}
    />
  </next-route-announcer>
</div>

  );
}

export default App;
