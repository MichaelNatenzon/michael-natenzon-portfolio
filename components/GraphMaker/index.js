import styles from "../../styles/Home.module.css";

const PlotGenerator = ({ userDetails, url }) => {
  return userDetails ? (
    <div className={styles}>
      <iframe src={url} />
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
