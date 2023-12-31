import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ pathname: "/" });
  }, [navigate]);

  return <></>;
};

export { Root };
