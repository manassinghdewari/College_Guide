import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

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

function FacultyInfo() {
  const navigate = useNavigate();

  const classes = useStyles();
  const [inputFields, setInputFields] = useState([{ id: uuidv4() }]);

  const { collegeId } = useSelector((state) => state.collegeId);

  const handleSubmit = async () => {
    inputFields.map(async (facultyInput) => {
      try {
        const { data } = await axios.post(
          `/faculty/${collegeId}`,
          facultyInput
        );
        navigate("/collegeRegistration/placement");
      } catch (error) {}
    });
  };

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
      { id: uuidv4(), firstName: "", lastName: "" },
    ]);
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
    <div className="box">
      <Container alignItems="center">
        <h1>Faculty Details</h1>

        <form className={classes.root}>
          {inputFields.map((inputField) => (
            <span key={inputField.id}>
              <div className="items-center justify-center text-center">
                <div className="addremove">
                  <Typography variant="h6" display="block" gutterBottom>
                    Add/Remove Faculty
                  </Typography>
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

                <TextField
                  name="name"
                  label="Name"
                  variant="filled"
                  value={inputField.name}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <TextField
                  name="department"
                  label="Department"
                  variant="filled"
                  value={inputField.department}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </div>
              <div className="justify-center items-center text-center">
                <TextField
                  name="qualification"
                  label="Qualification"
                  variant="filled"
                  value={inputField.qualification}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <TextField
                  name="email"
                  label="E-Mail"
                  variant="filled"
                  value={inputField.emailaddress}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </div>
              <div className="justify-center items-center text-center">
                <TextField
                  name="research"
                  label="Research Paper Link"
                  variant="filled"
                  value={inputField.research}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <TextField
                  name="designation"
                  label="Designation"
                  variant="filled"
                  value={inputField.designation}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </div>
              <div className="upload_button justify-center items-center text-center">
                <Button
                  variant="contained"
                  component="label"
                  color="primary"
                  alignItems="center"
                >
                  Upload Photo
                  <input hidden accept="file/*" multiple type="file" />
                </Button>
              </div>
            </span>
          ))}
        </form>
        <Button onClick={handleSubmit}>Next</Button>
      </Container>
    </div>
  );
}

export default FacultyInfo;
