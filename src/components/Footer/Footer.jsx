import React from 'react';
import './Footer.css'
const Footer=()=> {
    return (
        <>
            <div className="footer">
            <div className='text-white font-extrabold text-xl text-center pb-6'>Quick Links</div>
            <div className="container">
                <div className="row items-center justify-items-center">
                    <div className="footer-col">
                        <h4>MBA</h4>
                        <ul>
                            <li><a href="/">MBA</a></li>
                            <li><a href="/">MBA Colleges</a></li>
                            <li><a href="/">CAT</a></li>
                            <li><a href="/">MAT</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Engineering</h4>
                        <ul>
                            <li><a href="/">B.Tech</a></li>
                            <li><a href="/">B.Tech Colleges</a></li>
                            <li><a href="/">JEE Main</a></li>
                            <li><a href="/">JEE Advance</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Medical</h4>
                        <ul>
                            <li><a href="/">NEET UG</a></li>
                            <li><a href="/">Medical Colleges</a></li>
                            <li><a href="/">NEET PG</a></li>
                            <li><a href="/">BDS</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Other Courses</h4>
                        <ul>
                            <li><a href="/">Hotel Management</a></li>
                            <li><a href="/">Fasion Design</a></li>
                            <li><a href="/">Law</a></li>
                            <li><a href="/">Mass Communication</a></li>
                        </ul>
                    </div>
                   
                </div>
            </div>
            <div className='text-white text-center pt-16 text-sm'>Copyright &copy; 2022</div>
        </div>
        </>
    );
}

export default Footer;