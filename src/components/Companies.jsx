import React, { useEffect, useState } from 'react';
import Company from './Company';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [viewAll, setViewAll] = useState(false);
    const allCompanies = (viewAll) ? companies : companies.slice(0,4);
    useEffect(() => {
    fetch("job.json")
      .then(res => res.json())
      .then(data => {
        setCompanies(data);
      })
  }, []);
  console.log(companies)
    return (
        <div className='bg-base-100 rounded-2xl my-8'>
            <div>
                <h1 className='text-4xl text-center font-bold pt-8'>Top Companies Hiring</h1>
                 <p className='text-center text-[#00000060] mt-2'>Explore and find the best company for your dream job</p>
                <hr className='w-2/3 border-dashed text-[#00000040] mx-auto my-4'/>
                <div className='grid grid-cols-2 sm:grid-cols-4 sm:gap-4 mx-auto w-11/12'>
                    {
                        allCompanies.map((company, index)=><Company key={index} company={company}></Company>)
                    }
                </div>
                <div className='w-fit mx-auto py-6'>
                <button onClick={()=>setViewAll(!viewAll)} className='bg-[#87CEEB20] text-[#87CEEF] font-semibold text-lg px-4 py-2 rounded-4xl border border-[#87CEEF] '>
                    {
                      viewAll ?  "Show Less" : "View All Companies"
                    }</button>
            </div>
            </div>
        </div>
    );
};

export default Companies;