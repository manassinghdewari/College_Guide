import React, {useState} from 'react';
import BasicDetails from '../Collegeregistration/BasicDetails';
import StreamSelect from '../Collegeregistration/Stream';
import Accreditation from '../Collegeregistration/Accreditation';
import FacultyInfo from '../Collegeregistration/FacultyInfo';
import ResearchPublication from '../Collegeregistration/ResearchPublication';
import OnlineCourses from '../Collegeregistration/OnlineCourses';
import Placement from '../Collegeregistration/Placement';
import Alumni from '../Collegeregistration/Alumni';
import { Button } from '@material-ui/core';


 function Collegesignup() {
const [page, setPage] = useState(0);

const FormTitles = ["Basic Details" , "Branch Details", "Accreditation Details", "Faculty Details" , "Research Publications", "Online Courses", "Placement Details", "Alumni Details"];

const pageDisplay = () => { 
  if (page==0) {
    return <BasicDetails/>;
  }
  else if (page==1){
  return <StreamSelect/>;
  }
  
  else if (page==2){
    return <Accreditation/>;
  }
  else if (page==3){
    return <FacultyInfo/>;
  }
  else if (page==4){
    return <ResearchPublication/>;
  }
  else if (page==5){
    return <OnlineCourses/>;
  }
  else if (page==6){
    return <Placement/>;
  }
  else if (page==7){
    return <Alumni/>;
  }
 
 }
return (

<>
  <div className='header'>
    <h1> {FormTitles[page]} </h1>
  </div>
 <div className='body'>
  {pageDisplay()}
 </div>

<Button
disabled={page == 0}
onClick={() => {
  setPage((currpage) => currpage-1);
}}>
  Prev
  </Button>
<Button
disabled={page== FormTitles.length-1}
onClick={() => {
  setPage((currpage) => currpage+1);
}}
>Next
</Button> 
</>
);
 }

export default Collegesignup;