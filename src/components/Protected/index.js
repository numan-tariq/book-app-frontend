import React, { useEffect } from "react";
import { useHistory } from "react-router";

const Protected = ({ components:Components }) => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("./signin");
    }
  }, []);

  return <Components />;
};

export default Protected;
