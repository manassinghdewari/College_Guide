import { RedoTwoTone } from '@mui/icons-material';
import axios, { Axios } from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch, { BASE_URL } from '../../api/UseFetch';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

// const {facultyData}= await axios.get(`${BASE_URL}/faculty/`);
// const facultyData=[
//     {
//         name:"Manuella Nevoresky",
//         department:"Computer Science And Enginneering",
//         designation:"Head of Department",
//         qualifiaction:[
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//         ],
//         college:"Sir M Visvesvarya Institute Of Technology",
//         email:"abc@example.com",
//         photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
//         research:{
//             totalPublications:73,
//             title:[
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//             ]
//         }
//     },
//     {
//         name:"Manuella Nevoresky",
//         department:"Computer Science And Enginneering",
//         designation:"Head of Department",
//         qualifiaction:[
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//         ],
//         college:"Sir M Visvesvarya Institute Of Technology",
//         email:"abc@example.com",
//         photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
//         research:{
//             totalPublications:73,
//             title:[
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//             ]
//         }
//     },
//     {
//         name:"Manuella Nevoresky",
//         department:"Computer Science And Enginneering",
//         designation:"Head of Department",
//         qualifiaction:[
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//         ],
//         college:"Sir M Visvesvarya Institute Of Technology",
//         email:"abc@example.com",
//         photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
//         research:{
//             totalPublications:73,
//             title:[
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//             ]
//         }
//     },
//     {
//         name:"Manuella Nevoresky",
//         department:"Computer Science And Enginneering",
//         designation:"Head of Department",
//         qualifiaction:[
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//         ],
//         college:"Sir M Visvesvarya Institute Of Technology",
//         email:"abc@example.com",
//         photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
//         research:{
//             totalPublications:73,
//             title:[
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//             ]
//         }
//     },
//     {
//         name:"Manuella Nevoresky",
//         department:"Computer Science And Enginneering",
//         designation:"Head of Department",
//         qualifiaction:[
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//         ],
//         college:"Sir M Visvesvarya Institute Of Technology",
//         email:"abc@example.com",
//         photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
//         research:{
//             totalPublications:73,
//             title:[
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//             ]
//         }
//     },
//     {
//         name:"Manuella Nevoresky",
//         department:"Computer Science And Enginneering",
//         designation:"Head of Department",
//         qualifiaction:[
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//             {
//                 degree:"BE,MTECH",
//                 Field:"Computer",
//             },
//         ],
//         college:"Sir M Visvesvarya Institute Of Technology",
//         email:"abc@example.com",
//         photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
//         research:{
//             totalPublications:73,
//             title:[
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//                 {
//                     name:"NLP",
//                     url:"NLP.com",
//                 },
//             ]
//         }
//     },   
// ]

const Faculty=()=> {

    let facultyData=[];
    const {collegeData}= useSelector((state) => state.college);
    console.log(collegeData)
    let actualData;
    // const [facultyData,setFacultyData]=useState("")
    
        collegeData?.faculty?.map((value)=>{        
                facultyData.push(value)
                })
       console.log(facultyData)
    //    setFacultyData(value)
            
        // })
console.log("this is new one",facultyData);       
    return (
            <div className="container">
            <div className="row text-center">
                {
                   facultyData.map(async(val)=>{
                    const res= await axios.get(`${BASE_URL}/faculty/${val}`)
                    console.log(res);
                    <div className="col-xl-3 col-sm-6 mb-2.5 mt-2.5">
                    <div className="bg-white rounded shadow-sm py-5 px-4">
                    <div className='flex items-center justify-center'>
                    {/* <img src={res.photo} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" /> */}
                    </div>
                    <div className="text-xl font-bold mb-0 text-center ">{res.data.name}</div>
                    <div className="  text-uppercase font-semibold text-slate-400">{res.data.designation}</div>
                    {/* <div className="small text-uppercase text-muted font-semibold">{res.data.college}</div> */}
                    <div className="small text-muted">{res.data.department}</div>
                    <div>Research on:{res.data.research}</div>
                </div>
            </div>
                   })
                       
        
                       
                    }
                
            </div>
            </div>
        
    );
};

export default Faculty;