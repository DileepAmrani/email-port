import React from "react";
import { SideBar } from "./../../Components";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
const useStyles = makeStyles((theme) => ({
  formBox: {
    padding: 10,
  },
  label: {
    padding: "5px 0",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <SideBar />
      <Container maxWidth="sm">
        <div className={classes.formBox}>
          <form noValidate autoComplete="off">
            <FormLabel component="legend" className={classes.label}>
              List Title
            </FormLabel>
            <TextField
              id="outlined-basic"
              placeholder="List Title"
              variant="outlined"
              fullWidth
            />
            <br />
            <br />
            <Button variant="contained" component="label" color="secondary">
              Upload File
              <input type="file" hidden />
            </Button>
            <br />
            <br />
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default App;
