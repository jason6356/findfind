import React from 'react';

const JobSwippingCard = ({ companyName, jobTitle, jobLocation, salaryRange, industry }) => {
    return (
        <div style={{ 
            padding: '1rem', 
            borderRadius: '5px', 
            height: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <h1 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{companyName}</h1>
            <h2 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{jobTitle}</h2>
            <p style={{ marginBottom: '0.5rem' }}>Location: {jobLocation}</p>
            <p style={{ marginBottom: '0.5rem' }}>Salary Range: {salaryRange}</p>
            <p style={{ marginBottom: '0.5rem' }}>Industry: {industry}</p>
        </div>
    );
};

export default JobSwippingCard;
