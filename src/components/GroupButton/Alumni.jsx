import React from 'react';
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
const Alumni=()=> {
    return (
        <div className="container">
    <div className="row text-center">     
        <div className="col-xl-3 col-sm-6 mb-2.5 mt-2.5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
                <div className='flex items-center justify-center'>
                <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
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
        
        <div className="col-xl-3 col-sm-6 mb-2.5 mt-2.5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
                <div className='flex items-center justify-center'>
                <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
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
        
        
        
       
    </div>
</div>

    );
}

export default Alumni;