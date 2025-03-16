import AuthLayout from "./AuthLayout.jsx";
import LoginBody from "../../components/units/auth/body/LoginBody.jsx";
import LoginFooter from "../../components/units/auth/footer/LoginFooter.jsx";
import LoadingScreen from "../../components/units/auth/loading/LoadingScreen.jsx";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
  const { loading, ...loginProps } = useLogin();

  return (
    <>
      {loading ? (
        <LoadingScreen {...loginProps} />
      ) : (
        <>
          <AuthLayout title="로그인/회원가입">
            <LoginBody {...loginProps} />
            <LoginFooter />
          </AuthLayout>
        </>
      )}
    </>
  );
};

export default Login;
