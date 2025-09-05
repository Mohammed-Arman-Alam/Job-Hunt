import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";


const CompanyDetails = () => {
    const {id} = useParams();
    const companyData = useLoaderData();
    const [company, setCompany] = useState(null);
    const [modal, setModal] = useState(false);
    const [job, setJob] = useState(null);
 useEffect(() => {
    const selestedCompany = companyData.find((details) => details.id == id);
    setCompany(selestedCompany);
 }, [id]);
 console.log(company);
 if(!company){
     return<h1>Loading</h1>;
 }
  return (
    
    <div className="pt-8">
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <div className="flex items-center gap-10">
          <img src={company?.logo} alt={company?.name} className="w-40 h-40 rounded-lg" />
          <div>
            <h1 className="text-3xl font-bold">{company.name}</h1>
            <p className="text-[#00000060]">{company.location}</p>
            <p className="text-[#00000060]">{company.industry}</p>
            <a href={company.website} target="_blank" className="text-blue-500 underline mt-2 block">
              Visit Website
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
      <div className="space-y-4">
        {company.jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-[#00000060]">{job.salary}</p>
            </div>
            <button onClick={()=>{
                setModal(true);
                setJob(job);
            }} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Details
            </button>
          </div>
        ))}
      </div>
      {modal && (
        <div className="fixed inset-0 bg-[#87CEEB] flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-11/12 max-w-lg relative">
            <button
              onClick={() => setModal(false)}
              className="absolute top-4 right-4 text-gray-800 font-bold text-xl border rounded-4xl px-2"
            >
                X
            </button>
            <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
            <p className="mb-2"><strong>Type:</strong> {job.jobType}</p>
            <p className="mb-2"><strong>Salary:</strong> {job.salary}</p>
            <p className="mb-4"><strong>Description:</strong> {job.description}</p>
            <button
              onClick={() => window.open(company.website, '_blank')}
              className="bg-[#87CEEF] text-white px-4 py-2 rounded-lg"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
        );
 };

export default CompanyDetails;
