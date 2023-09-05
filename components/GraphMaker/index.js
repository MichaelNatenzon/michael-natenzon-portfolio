import styles from "../../styles/Home.module.css";

import { CircularProgress } from "@mui/material";

import React, { useState, useEffect } from "react";

const PlotGenerator = ({ userDetails, url }) => {
  const [loadingIframe, setLoadingIframe] = useState(true);

  const handleFrameElement = React.useCallback((e) => {
    e.target != null ? setLoadingIframe(false) : "";
  }, []);

  return userDetails ? (
    <div className={styles}>
      <div>
        {loadingIframe ? (
          <div className={styles.iframeplaceholder}>
            <CircularProgress />
          </div>
        ) : (
          <></>
        )}
        <iframe
          style={{ height: loadingIframe ? "1px" : "" }}
          src={url}
          id="plot_iframe"
          onLoad={handleFrameElement}
        ></iframe>
      </div>
    </div>
  ) : (
    <div className={styles.iframeplaceholder}>
      <h1>
        Please login using the button in the top right corner
        <br />
        to use the graph maker
      </h1>
    </div>
  );
};

export default PlotGenerator;
