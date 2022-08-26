import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import ImageButton from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";

import "./Alumni.css";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Alumni() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([{ id: uuidv4() }]);

  const { collegeId } = useSelector((state) => state.collegeId);

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        name: "",
        position: "",
        companyName: "",
        email: "",
        url: "",
        Twitter: "",
        Linkedin: "",
      },
    ]);
  };
  console.log(inputFields.flat());

  const handleSubmit = async () => {
    inputFields.map(async (alumniInput) => {
      try {
        const { data } = await axios.post(`/alumni/${collegeId}`, alumniInput);
        navigate("/collegeRegistration/faculty");
      } catch (error) {}
    });
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <Container className="box ">
      <Typography variant="h4">Alumni Details</Typography>
      <form className={classes.root}>
        {inputFields.map((inputField) => (
          <span key={inputField.id}>
            <Grid container spacing={2}>
              <div className="addremove_container">
                <div className="addremove text-center justify-center items-center">
                  <IconButton
                    disabled={inputFields.length === 1}
                    onClick={() => handleRemoveFields(inputField.id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={handleAddFields}>
                    <AddIcon />
                  </IconButton>
                </div>
              </div>

              <div className="input-field" class="form-check-inline">
                <Grid item xs={12} ms={6}>
                  <TextField
                    name="name"
                    label="Name of Alumni"
                    variant="filled"
                    fullWidth
                    value={inputField.name}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </Grid>
                <Grid item xs={12} ms={6}>
                  <TextField
                    name="branch"
                    label="Branch"
                    fullWidth
                    variant="filled"
                    value={inputField.branch}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    label="Email Address"
                    fullWidth
                    variant="filled"
                    value={inputField.email}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="companyName"
                    label="Company Name"
                    fullWidth
                    variant="filled"
                    value={inputField.company}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </Grid>
              </div>
              <div className="input-field">
                <Grid item xs={12}>
                  <TextField
                    name="position"
                    label="Designation"
                    fullWidth
                    variant="filled"
                    value={inputField.designation}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="Linkedin"
                    label="Linkedin profile"
                    fullWidth
                    variant="filled"
                    value={inputField.profile}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="Twitter"
                    label="Twitter profile"
                    fullWidth
                    variant="filled"
                    value={inputField.profile}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="url"
                    label="Research Paper Link"
                    fullWidth
                    variant="filled"
                    value={inputField.research}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <ImageButton
                    className="upload-btn"
                    variant="contained"
                    component="label"
                  >
                    Upload Photo
                    <input hidden accept="file/*" multiple type="file" />
                  </ImageButton>
                </Grid>
              </div>
            </Grid>
          </span>
        ))}
      </form>
      <Button onClick={handleSubmit}>Next</Button>
    </Container>
  );
}

export default Alumni;
