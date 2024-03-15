import { useNavigate } from "react-router-dom";

export const useNav = () => {
  const navigate = useNavigate();
  const compiler = {};

  compiler.redirectHome = () => {
    navigate(`/home`);
  };

  compiler.redirectRegister = () => {
    navigate(`/register`);
    setShouldScrollToVideo(true);
  };

  compiler.redirectLogin = () => {
    navigate(`/login`);
  };

  compiler.redirectAdmin = () => {
    navigate(`/admin`);
  };

  compiler.goBack = () => {
    navigate(-1);
  };

  return { ...compiler };
};
