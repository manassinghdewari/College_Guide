import React from 'react';
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';
// import {Chart} from 'react-chartjs-2';
// import {CategoryScale} from 'chart.js'; 
// Chart.register(CategoryScale);
import Chart from 'chart.js/auto';
import { Bar} from 'react-chartjs-2';


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

const state = {
    labels: ['Arts', 'Business/StartUp', 'Political & Civil Services',
             'Science & Technology', 'IT Sector'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
        borderWidth: 2,
        data: [8, 15, 8, 13, 34]
      }
    ]
  }

const Alumni=()=> {
    return (
        <>
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
        
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
                labels: {
                    fontSize: 25,
                  },
              display:true,
              position:'right'
            }
          }}
        />
      </div>
        </>
    );
}
export default Alumni;