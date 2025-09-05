import React from 'react';
import { Link } from 'react-router';

const Company = ({company}) => {
    const {name, id, location} = company;
    return (
        <div className="card bg-base-100 shadow-sm hover:scale-105 hover:shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={company.logo}
                alt="logo"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{location}</p>
                <div className="card-actions">
                    <Link to={`Company/Details/${id}`}>
                        <button className="btn rounded-4xl bg-[#87CEEB20] text-[#87CEEF] border border-[#87CEEF] hover:font-semibold hover:text-xl">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Company;