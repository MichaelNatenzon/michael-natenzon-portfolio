import styles from "../../styles/Home.module.css";

const PlotGenerator = ({ userDetails }) => {
  return userDetails ? (
    <div className={styles}>
      <iframe src="https://automatedplotgeneration.azurewebsites.net/" />
    </div>
  ) : (
    <div className={styles.iframeplaceholder}>
      <h1>
        Please login using the button in the top right corner
        <br />to use the plot generator
      </h1>
    </div>
  );
};

export default PlotGenerator;
