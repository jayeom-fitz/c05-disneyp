import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { signInWithPopup, signOut } from "@firebase/auth";
import { auth, provider } from "firebase";

import {
  selectUserName,
  selectUserPhoto,
  setUserLoginState,
  setLogoutState,
} from "_redux/userSlice";
import NavMenu from "./NavMenu";
import User from "./User";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      signOut(auth)
        .then(() => {
          dispatch(setLogoutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginState({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <>
      {!userName ? (
        <Container onClick={handleAuth}>Login</Container>
      ) : (
        <>
          <NavMenu />
          <User
            userName={userName}
            userPhoto={userPhoto}
            handleAuth={handleAuth}
          />
        </>
      )}
    </>
  );
}

export default Login;

const Container = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
