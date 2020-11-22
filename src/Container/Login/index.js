import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: "auto",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submitBtn: {
    color: "#fff",
    backgroundColor: "#4db6ac",
    grow: 0,
  },
}));

function Index(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("pass");

  const Login = () => {
    if (email === "admin@admin.com" && password === "pass") {
      props.history.push("/dashboard");
    }
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <FormLabel component="legend" className={classes.formLabel}>
              Email Address *
            </FormLabel>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel component="legend" className={classes.formLabel}>
              Password *
            </FormLabel>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <Button
              type="button"
              fullWidth
              variant="contained"
              className={classes.submitBtn}
              onClick={() => Login()}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Index;
