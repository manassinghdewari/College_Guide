import { RedoTwoTone } from '@mui/icons-material';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api/UseFetch';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import FacultyData from '../FacultyData';
import { useSelector } from 'react-redux';


const Faculty=()=> {


  
const {collegeData } = useSelector((state)=>state.college)
console.log(collegeData)

    return(

                <div className='container'>
                    <div className='row text-center'>

                    {collegeData?.faculty?.map((id) =>(
                        
                        <FacultyData id={id}/>
                        ))}
                        </div>
                </div>
    )
};

export default Faculty;