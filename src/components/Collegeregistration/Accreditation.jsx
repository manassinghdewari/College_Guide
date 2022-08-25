import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./Accreditation.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

function Accreditation() {
  const classes = useStyles();
  const { collegeId } = useSelector((state) => state.collegeId);

  const navigate = useNavigate();

  const [accreditationFields, setAccreditationFields] = useState([
    {
      id: uuidv4(),
      provider: "",
      grade: "",
    },
  ]);

  // const accreditationData = accreditationFields.map((accData) => {
  //   let accObj = { provider: accData.provider, grade: accData.grade };
  //   console.log(accObj);
  // });
  // console.log();

  const [researchFields, setResearchFields] = useState([
    { id: uuidv4(), researchTopic: "", url: "" },
  ]);
  console.log(researchFields);

  // const researchData = researchFields.map((resData) => resData);

  const handleSubmit = async () => {
    accreditationFields.map(async (accInput) => {
      try {
        const { data } = await axios.post(
          `/accreditation/${collegeId}`,
          accInput
        );
      } catch (error) {
        console.log(error);
      }
    });

    researchFields.map(async (resInput) => {
      try {
        const { data } = await axios.post(`/research/${collegeId}`, resInput);
      } catch (error) {
        console.log(error);
      }
    });
    navigate("/collegeRegistration/location");
  };

  // console.log("InputFields", inputFields);

  const handleChangeInputAccreditation = (id, event) => {
    const newInputAccreditationFields = accreditationFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setAccreditationFields(newInputAccreditationFields);
  };

  const handleChangeInputResearch = (id, event) => {
    const newInputResearchFields = researchFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setResearchFields(newInputResearchFields);
  };

  const handleAddFields = () => {
    setAccreditationFields([...accreditationFields, { id: uuidv4() }]);
    setResearchFields([...researchFields, { id: uuidv4() }]);
  };

  const handleRemoveAccreditationFields = (id) => {
    const values = [...accreditationFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setAccreditationFields(values);
  };

  const handleRemoveResearchFields = (id) => {
    const values = [...researchFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setResearchFields(values);
  };

  return (
    <>
      <Container className="box pb-10">
        <Typography variant="h4">Accreditation Details</Typography>
        <form className={classes.root} onSubmit={handleSubmit}>
          {accreditationFields.map((accreditationField) => (
            <span key={accreditationField.id}>
              <div className="">
                <div className="addremove justify-center items-center text-center">
                  <IconButton
                    disabled={accreditationField.length === 1}
                    onClick={() =>
                      handleRemoveAccreditationFields(accreditationField.id)
                    }
                  >
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={handleAddFields}>
                    <AddIcon />
                  </IconButton>
                </div>
                <div>
                  <TextField
                    name="provider"
                    label="Providing authority"
                    variant="filled"
                    value={accreditationField.provider}
                    onChange={(event) =>
                      handleChangeInputAccreditation(
                        accreditationField.id,
                        event
                      )
                    }
                  />
                  <TextField
                    name="grade"
                    label="Grade"
                    variant="filled"
                    value={accreditationField.grade}
                    onChange={(event) =>
                      handleChangeInputAccreditation(
                        accreditationField.id,
                        event
                      )
                    }
                  />
                </div>
              </div>
            </span>
          ))}
        </form>
      </Container>
      <Container className="box">
        <Typography variant="h4">Research Paper Details</Typography>
        <form className={classes.root} onSubmit={handleSubmit}>
          {researchFields.map((researchField) => (
            <span key={researchField.id}>
              <div className="justify-center items-center text-center">
                <div className="addremove justify-center items-center text-center">
                  <IconButton
                    disabled={researchField.length === 1}
                    onClick={() => handleRemoveResearchFields(researchField.id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={handleAddFields}>
                    <AddIcon />
                  </IconButton>
                </div>
                <TextField
                  name="researchTopic"
                  label="Research Topic"
                  variant="filled"
                  value={researchField.researchTopic}
                  onChange={(event) =>
                    handleChangeInputResearch(researchField.id, event)
                  }
                  fullWidth
                />
              </div>

              <div className="addremove_container">
                <div>
                  <TextField
                    name="url"
                    label="Research Paper Link"
                    variant="filled"
                    value={researchField.url}
                    onChange={(event) =>
                      handleChangeInputResearch(researchField.id, event)
                    }
                  />
                </div>
              </div>
            </span>
          ))}
        </form>
        <Button onClick={handleSubmit}>Next</Button>
      </Container>
    </>
  );
}

export default Accreditation;
