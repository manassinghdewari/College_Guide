import { RedoTwoTone } from '@mui/icons-material';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch, { BASE_URL } from '../../api/UseFetch';
import { useSelector } from 'react-redux';

// const {facultyData}= await axios.get(`${BASE_URL}/faculty/`);
const facultyData=[
    {
        name:"Manuella Nevoresky",
        department:"Computer Science And Enginneering",
        designation:"Head of Department",
        qualifiaction:[
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
        ],
        college:"Sir M Visvesvarya Institute Of Technology",
        email:"abc@example.com",
        photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
        research:{
            totalPublications:73,
            title:[
                {
                    name:"NLP",
                    url:"NLP.com",
                },
                {
                    name:"NLP",
                    url:"NLP.com",
                },
            ]
        }
    },
    {
        name:"Manuella Nevoresky",
        department:"Computer Science And Enginneering",
        designation:"Head of Department",
        qualifiaction:[
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
        ],
        college:"Sir M Visvesvarya Institute Of Technology",
        email:"abc@example.com",
        photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
        research:{
            totalPublications:73,
            title:[
                {
                    name:"NLP",
                    url:"NLP.com",
                },
                {
                    name:"NLP",
                    url:"NLP.com",
                },
            ]
        }
    },
    {
        name:"Manuella Nevoresky",
        department:"Computer Science And Enginneering",
        designation:"Head of Department",
        qualifiaction:[
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
        ],
        college:"Sir M Visvesvarya Institute Of Technology",
        email:"abc@example.com",
        photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
        research:{
            totalPublications:73,
            title:[
                {
                    name:"NLP",
                    url:"NLP.com",
                },
                {
                    name:"NLP",
                    url:"NLP.com",
                },
            ]
        }
    },
    {
        name:"Manuella Nevoresky",
        department:"Computer Science And Enginneering",
        designation:"Head of Department",
        qualifiaction:[
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
        ],
        college:"Sir M Visvesvarya Institute Of Technology",
        email:"abc@example.com",
        photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
        research:{
            totalPublications:73,
            title:[
                {
                    name:"NLP",
                    url:"NLP.com",
                },
                {
                    name:"NLP",
                    url:"NLP.com",
                },
            ]
        }
    },
    {
        name:"Manuella Nevoresky",
        department:"Computer Science And Enginneering",
        designation:"Head of Department",
        qualifiaction:[
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
        ],
        college:"Sir M Visvesvarya Institute Of Technology",
        email:"abc@example.com",
        photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
        research:{
            totalPublications:73,
            title:[
                {
                    name:"NLP",
                    url:"NLP.com",
                },
                {
                    name:"NLP",
                    url:"NLP.com",
                },
            ]
        }
    },
    {
        name:"Manuella Nevoresky",
        department:"Computer Science And Enginneering",
        designation:"Head of Department",
        qualifiaction:[
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
            {
                degree:"BE,MTECH",
                Field:"Computer",
            },
        ],
        college:"Sir M Visvesvarya Institute Of Technology",
        email:"abc@example.com",
        photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
        research:{
            totalPublications:73,
            title:[
                {
                    name:"NLP",
                    url:"NLP.com",
                },
                {
                    name:"NLP",
                    url:"NLP.com",
                },
            ]
        }
    },   
]

const Faculty=()=> {
    let facultyData;
    const {collegeData}= useSelector((state) => state.college);
    return (
        <>
            {/* {
                collegeData.faculty.map((value)=>{
                    const fd=get(`/faculty/${value}`)
                    console.log("this is faculty data",fd);
                })
            } */}
            <div className="container">
            <div className="row text-center">
                {
                    
                    collegeData?.faculty.map(async(value)=>{
                            try{
                                 const {Data}=await axios.get(`/faculty/${value}`) 
                                 facultyData=Data;
                                console.log("this is faculty data",facultyData);
                            }
                            catch(error){
                                console.log(error);
                            }
                        // console.log("this is faculty data",fd);
                        <div className="col-xl-3 col-sm-6 mb-2.5 mt-2.5">
                        <div className="bg-white rounded shadow-sm py-5 px-4">
                            <div className='flex items-center justify-center'>
                            <img src={facultyData.photo} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            </div>
                            <div className="text-xl font-bold mb-0 text-center ">{facultyData.name}</div>
                            <div className="  text-uppercase font-semibold text-slate-400">{facultyData.designation}</div>
                            <div className="small text-uppercase text-muted font-semibold">{facultyData.college}</div>
                            <div className="small text-muted">{facultyData.department}</div>
                            <div>Research on:{facultyData.research}</div>
                        </div>
                    </div>
                        
                    })
                }
            {/* {   facultyData.map((value)=>{
                    return(
                        <div className="col-xl-3 col-sm-6 mb-2.5 mt-2.5">
                        <div className="bg-white rounded shadow-sm py-5 px-4">
                            <div className='flex items-center justify-center'>
                            <img src={value.photo} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            </div>
                            <div className="text-xl font-bold mb-0 text-center ">Manuella Nevoresky</div>
                            <div className="  text-uppercase font-semibold text-slate-400">Founder</div>
                            <div className="small text-uppercase text-muted font-semibold">Grey-Slone Memorial Hospital</div>
                            <div className="small text-muted">Computer Science and Engineering</div>
                            <div>Research on:-NLP</div>
                            <div className='flex justify-evenly text-lg'>
                                <a href="https://www.linkedin.com/company/john-doe/"><FaLinkedin/></a>
                            <a href="https://twitter.com/johndoefromX"><FaTwitter/></a>
                            </div>
                        </div>
                    </div>
                    )
                })
            } */}
            </div>
            </div>
        </>
    );
};

export default Faculty;