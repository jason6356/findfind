import React from 'react';
import JobSwippingCard from './JobSwippingCard';
import companyData from './companyMockData.json'; // Import JSON file

const CompanyList = companyData.map(company => ({
    id: company.id,
    meta: company.meta,
    src: company.src,
    content: <JobSwippingCard 
        companyName={company.companyName} 
        jobTitle={company.jobTitle} 
        jobLocation={company.jobLocation} 
        salaryRange={company.salaryRange}
        industry={company.industry}
    />
}));

export default CompanyList;
