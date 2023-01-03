import { motion } from "framer-motion";

import { Logout } from "../services/authService";

export const LoginIcon = ({ toggleLoginMenu, userDetails, setUserDetails }) => {
  return userDetails ? (
    <div>
      <motion.button
        style={{
          marginRight: "20px",
          cursor: "pointer",
          background: "transparent",
          border: "0",
        }}
        initial={{ color: "#fff" }}
        animate={{ color: ["#fff", "#71a0d1"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={() => {
          Logout(userDetails, setUserDetails);
        }}
        onMouseOver={toggleLoginMenu}
      >
        {userDetails.user.toString().length > 10
          ? userDetails.loginMethod == "UD"
            ? userDetails.user
            : [
                userDetails.user.toString().slice(0, 8),
                "...",
                userDetails.user.toString().slice(-9),
              ].join("")
          : userDetails.user}
      </motion.button>
    </div>
  ) : (
    <div>
      <button
        style={{
          marginRight: "20px",
          cursor: "pointer",
          background: "transparent",
          border: "0",
          color: "#fff",
        }}
        onClick={toggleLoginMenu}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 16 16"
          initial={{ fill: "#fff" }}
          animate={{ fill: ["#fff", "#71a0d1"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        </motion.svg>
      </button>
    </div>
  );
};
