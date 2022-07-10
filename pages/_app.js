// Follow steps here to implement styled components with SSR
// https://stackoverflow.com/questions/70643407/next-js-styled-components-weird-behaviour

import "../styles/variable.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
