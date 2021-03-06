import React from "react";
import GoogleLogin from "react-google-login";
import { Button } from "@material-ui/core";
import GG from "../../Assets/img/gg.svg";
import { connect } from "react-redux";
import { loginWithGG } from "../../Actions/User";
import { toggle } from "../../Actions/Dialog";

const ButtonLoginWithGG = props => {
  const responseGoogle = response => {
    if (!response.error) {
      const { ig, Eea, U3, Paa } = response.w3;
      const user = {
        id: Eea,
        name: ig,
        email: U3,
        picture: Paa
      };
      props.getUser(user);
      props.toggleDialog();
      props.enqueueSnackbar(`Xin chào ${ig}`, {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
    }
  };
  return (
    <GoogleLogin
      clientId="1094777990327-us272p0iqrbefvqae453k6oi1qicnpdk.apps.googleusercontent.com"
      render={renderProps => (
        <Button variant="contained" onClick={renderProps.onClick}>
          <img src={GG} alt="hinh gg" />
        </Button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: user => {
      dispatch(loginWithGG(user));
    },
    toggleDialog: () => {
      dispatch(toggle());
    }
  };
};

export default connect(null, mapDispatchToProps)(ButtonLoginWithGG);
