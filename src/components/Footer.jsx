import React from 'react';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-100 text-base-content p-10 mt-8 rounded-t-2xl">
            <aside>
                <h1 className="text-3xl font-bold text-[#87CEEF] ">JobHunt</h1>
                <p className=''>
                Jobhunt Ltd.
                <br />
                 Your reliable source of jobs 
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Follow us</h6>
                <div className='flex gap-2'>
                    <SocialIcon url="https://www.facebook.com/" style={{ height: 30, width: 30 }}/>
                    <SocialIcon url="https://www.linkedin.com/" style={{ height: 30, width: 30 }}/>
                    <SocialIcon url="https://twitter.com/" style={{ height: 30, width: 30 }}/>
                    <SocialIcon url="https://github.com/" style={{ height: 30, width: 30 }}/>
                </div>
            </nav>
        </footer> 
    );
};

export default Footer;