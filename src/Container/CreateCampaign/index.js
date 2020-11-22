import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SideBar } from "./../../Components";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  headingBox: {
    margin: "10px 0",
  },
  heading: {
    fontSize: 30,
    fontWeight: 600,
    color: "#8c8f8d",
  },
  formLabel: {
    margin: theme.spacing(1, 0),
  },
  textField: {
    width: "100%",
  },
  textArea: {
    width: "100%",
    borderColor: "#b4b8b5",
    borderRadius: 5,
    outline: "none",
  },
}));

function Index() {
  const classes = useStyles();
  const [editorState, seteditorState] = useState();
  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);
    console.log(url);
  };

  const onEditorStateChange = (editorState) => {
    seteditorState(editorState);
    console.log(editorState)
  };
  return (
    <div>
      <SideBar />
      <Container maxWidth="lg">
        <div className={classes.headingBox}>
          <span className={classes.heading}>Create a New Campaign</span>
        </div>
        <Grid container spacing={2}>
          <Grid item xl={4} lg={4}>
            <form>
              <FormLabel component="legend" className={classes.formLabel}>
                Subject
              </FormLabel>
              <TextField
                placeholder="Subject"
                id="outlined-margin-dense"
                className={classes.textField}
                variant="outlined"
                helperText="Set a title for campaign?"
              />

              <FormLabel component="legend" className={classes.formLabel}>
                Form Name
              </FormLabel>
              <TextField
                placeholder="Form Name"
                id="outlined-margin-dense"
                className={classes.textField}
                variant="outlined"
              />

              <FormLabel component="legend" className={classes.formLabel}>
                Form Email
              </FormLabel>
              <TextField
                placeholder="Form Email"
                id="outlined-margin-dense"
                className={classes.textField}
                variant="outlined"
              />

              <FormLabel component="legend" className={classes.formLabel}>
                Reply to Email
              </FormLabel>
              <TextField
                placeholder="Reply to Email"
                id="outlined-margin-dense"
                className={classes.textField}
                variant="outlined"
              />

              <FormLabel component="legend" className={classes.formLabel}>
                Plain Text
              </FormLabel>
              <TextareaAutosize
                placeholder="Plain text of this Email"
                rowsMin={15}
                className={classes.textArea}
              />

              <FormLabel component="legend" className={classes.formLabel}>
                Attachments
              </FormLabel>

              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                type="file"
                onChange={handleUploadClick}
              />
            </form>
          </Grid>
          <Grid item xl={8} lg={8}>
            <FormLabel component="legend" className={classes.formLabel}>
              HTML Code
            </FormLabel>

            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Index;
