/**@format */

import React, { useState } from "react";
import Logo from "../logo.svg";
import {
  TextField,
  Typography,
  Button,
  InputAdornment,
  makeStyles,
  Grid,
  IconButton,
} from "@material-ui/core";

import { Mail, Lock, Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Validator from "email-validator";

const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: "underline",
    },
    field: {
      width: "20vw",
      minWidth: "250px",
    },
    error: {
      color: theme.palette.error.main,
    },
  }));

  export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
  
    const classes = useStyles();
  
    const onEmailChange = (e) => setEmail(e.target.value);
  
    const onPasswordChange = (e) => setPassword(e.target.value);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      setSubmitAttempted(true);
  
      if (Validator.validate(email) && password !== "") {
        let accept = await props.tryLogin(email, password);
        if (!accept) setLoginFailed(true);
        return accept;
      } else {
        return false;
      }
    };
  
    const handleClickShowPassword = () => setShowPassword(!showPassword);
  
    const handleMouseDownPassword = (event) => event.preventDefault();
  
    return (
      <main className={classes.content}>
        <form>
          <Grid
            style={{ minHeight: "100vh", textAlign: "center" }}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <img alt="logo" src={Logo} width={160} />
            <br />
            <Grid item>
              <Typography
                style={{
                  padding: 2,
                  fontWeight: 900,
                  fontSize: 50,
                }}
              >
                TypeKing
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                className={classes.field}
                error={
                  (submitAttempted && email === "") ||
                  (submitAttempted && !Validator.validate(email))
                }
                helperText={
                  submitAttempted && email === ""
                    ? "this field cannot be empty"
                    : "" || (submitAttempted && !Validator.validate(email))
                    ? "invalid email address"
                    : ""
                }
                name="email"
                label="Email"
                type="email"
                variant="filled"
                margin="normal"
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail color="primary" />
                    </InputAdornment>
                  ),
                }}
                inputProps={{
                  dataTestId: "loginEmail",
                }}
                value={email}
                onChange={onEmailChange}
              />
            </Grid>
            <Grid item>
              <TextField
                className={classes.field}
                error={submitAttempted && password === ""}
                helperText={
                  submitAttempted && password === ""
                    ? "this field cannot be empty"
                    : ""
                }
                name="password"
                label="Password"
                variant="filled"
                margin="normal"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="primary" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                inputProps={{
                  dataTestId: "loginPassword",
                }}
                value={password}
                onChange={onPasswordChange}
              />
            </Grid>
            {loginFailed && (
              <Grid item>
                <Typography
                  className={classes.error}
                  style={{ padding: 5, fontSize: 16 }}
                >
                  an incorrect email or password was provided
                  <br />
                  please try again
                </Typography>
              </Grid>
            )}
            <Grid item>
              <Button
                dataTestId="loginSubmit"
                style={{
                  marginTop: 16,
                  padding: 5,
                  fontSize: 22,
                  borderRadius: "50px",
                  width: "260px",
                }}
                type="submit"
                color="primary"
                variant="contained"
                onClick={async (e) => await onSubmit(e)}
              >
                Log in
              </Button>
            </Grid>
            <Grid item>
              <Typography style={{ padding: 30, fontSize: 20 }}>
                {" "}
                <Link className={classes.link} to="/register">
                  Register
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </main>
    );
  }
  