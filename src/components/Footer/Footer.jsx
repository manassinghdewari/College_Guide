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
                            <li><a href="javascript:void(0)">MBA</a></li>
                            <li><a href="javascript:void(0)">MBA Colleges</a></li>
                            <li><a href="javascript:void(0)">CAT</a></li>
                            <li><a href="javascript:void(0)">MAT</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Engineering</h4>
                        <ul>
                            <li><a href="javascript:void(0)">B.Tech</a></li>
                            <li><a href="javascript:void(0)">B.Tech Colleges</a></li>
                            <li><a href="javascript:void(0)">JEE Main</a></li>
                            <li><a href="javascript:void(0)">JEE Advance</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Medical</h4>
                        <ul>
                            <li><a href="javascript:void(0)">NEET UG</a></li>
                            <li><a href="javascript:void(0)">Medical Colleges</a></li>
                            <li><a href="javascript:void(0)">NEET PG</a></li>
                            <li><a href="javascript:void(0)">BDS</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Other Courses</h4>
                        <ul>
                            <li><a href="javascript:void(0)">Hotel Management</a></li>
                            <li><a href="javascript:void(0)">Fasion Design</a></li>
                            <li><a href="javascript:void(0)">Law</a></li>
                            <li><a href="javascript:void(0)">Mass Communication</a></li>
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