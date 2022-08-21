<<<<<<< HEAD
import React from 'react';
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const dataAlumni=[
    {
    name:"Manuella Nevoresky",
    photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
    designation:{
        companyName:"Grey-Slone Memorial Hospital",
        position:"Founder",
    },
    websites:{
        Twitter:"https://twitter.com/johndoefromX",
        Linkedin:"https://www.linkedin.com/company/john-doe/ ",
    },
    research:{
        title:[
            {
                name:"NLP",
                url:"NLP.com",
            },
            {
                name:"NLP",
                url:"NLP.com",
            }
        ]
    },
    branch:"Computer Science Engineering"
    },
    {
        name:"Manuella Nevoresky",
        photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
        designation:{
            companyName:"Grey-Slone Memorial Hospital",
            position:"Founder",
        },
        websites:{
            Twitter:"https://twitter.com/johndoefromX",
            Linkedin:"https://www.linkedin.com/company/john-doe/ ",
        },
        research:{
            title:[
                {
                    name:"NLP",
                    url:"NLP.com",
                },
                {
                    name:"NLP",
                    url:"NLP.com",
                }
            ]
        },
        branch:"Computer Science Engineering"
    },
    {
        name:"Manuella Nevoresky",
        photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
        designation:{
            companyName:"Grey-Slone Memorial Hospital",
            position:"Founder",
        },
        websites:{
            Twitter:"https://twitter.com/johndoefromX",
            Linkedin:"https://www.linkedin.com/company/john-doe/ ",
        },
        research:{
            title:[
                {
                    name:"NLP",
                    url:"NLP.com",
                },
                {
                    name:"NLP",
                    url:"NLP.com",
                }
            ]
        },
        branch:"Computer Science Engineering"
        },
        {
            name:"Manuella Nevoresky",
            photo:"https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg",
            designation:{
                companyName:"Grey-Slone Memorial Hospital",
                position:"Founder",
            },
            websites:{
                Twitter:"https://twitter.com/johndoefromX",
                Linkedin:"https://www.linkedin.com/company/john-doe/ ",
            },
            research:{
                title:[
                    {
                        name:"NLP",
                        url:"NLP.com",
                    },
                    {
                        name:"NLP",
                        url:"NLP.com",
                    }
                ]
            },
            branch:"Computer Science Engineering"
            },

]
const Alumni=()=> {
    return (
        <div className="container">
        <div className="row text-center">   
        {
            dataAlumni.map((value)=>{
                return (
                    <div className="col-xl-3 col-sm-6 mb-2.5 mt-2.5">
                        <div className="bg-white rounded shadow-sm py-5 px-4">
                            <div className='flex items-center justify-center'>
                            <img src={value.photo} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            </div>
                            <div className="text-xl font-bold mb-0 text-center ">{value.name}</div>
                            <div className="  text-uppercase font-semibold text-slate-400">{value.designation.position}</div>
                            <div className="small text-uppercase text-muted font-semibold">{value.designation.companyName}</div>
                            <div className="small text-muted">{value.branch}</div>
                            <div>Research on:-
                            {
                                value.research.title.map((val)=>{
                                    <Link to={val.url}>{val.name+","}</Link>      
                                })
                            }
                            </div>
                            <div className='flex justify-evenly text-lg'>
                                <Link to={value.websites.Linkedin}><FaLinkedin/></Link>
                                <Link to={value.websites.Twitter}><FaTwitter/></Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }  
        </div>
        </div>
    );
}

>>>>>>> dc596f6a8da0a6b55ce2d1846fd789dfbf5e2076
export default Alumni;