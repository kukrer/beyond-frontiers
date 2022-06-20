import React from 'react';

import logo from '../assets/logo.svg';

const Footer: React.FC = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
	      	<a href="https://www.ictspring.com/" className="block group relative">
  	      	<img src={logo} alt="ictspring" className="w-32 cursor-pointer invert"/>
    	    </a>
        </div>
<div>
      	<a href="https://www.facebook.com/ICTSpring/" className="block group relative">
        	<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-128.png" alt="facebook" className="w-32 cursor-pointer w-12 h-12"/>
        </a>

      	<a href="https://twitter.com/ICTSpring" className="block group relative">
        	<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-256.png" alt="twitter" className="w-32 cursor-pointer w-12 h-12"/>
        </a>

      	<a href="https://www.linkedin.com/company/ict-spring/" className="block group relative">
        	<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-256.png" alt="LinkedIn" className="w-32 cursor-pointer w-12 h-12"/>
        </a>
</div>
      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">
         <a href="https://www.farvest.com/factsheet-on-personal-data-treatment/" className="block group relative">
        	Privacy policy
        </a>
        </p>
        <p className="text-white text-sm text-center font-medium mt-2">
          
        </p>
      </div>

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-right text-xs"></p>
        <p className="text-white text-right text-xs">team@ictspring.com</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />


      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs"></p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
