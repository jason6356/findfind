import { Button, Select } from 'antd';
import React, { useState } from 'react';
import './Matching.css';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import JobSwipping from './JobSwipping';

const Matching = () => {
    const navigate = useNavigate();
    const isMobileOrDesktop = useMediaQuery({ minWidth: 768 });

    const [industry, setIndustry] = useState('All Industries');
    const [position, setPosition] = useState('All Positions');
    const [area, setArea] = useState('All Areas');

    const navigateTo = () => {
        console.log('navigate to question allocation');
        navigate('/matching/question-allocation');
    };

    const handleChangeIndustry = (value) => {
        setIndustry(value);
    };

    const handleChangePosition = (value) => {
        setPosition(value);
    };

    const handleChangeArea = (value) => {
        setArea(value);
    };

    const applyFilter = () => {
        // Apply filter logic here
        console.log('Applying filter...');
    };

    return (
        <div
            style={!isMobileOrDesktop ? { ...buttonMobileStyles, flexDirection: 'column' } : buttonDesktopStyles}
            className='matching-button'
        >
            {/* <div style={{ textAlign: 'center' }}>
                <Button type='primary' onClick={navigateTo}>Question Allocation</Button>
            </div> */}
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <Select
                    placeholder="Select Industry"
                    style={{ width: 200, marginRight: '1rem', marginBottom: '1rem' }}
                    onChange={handleChangeIndustry}
                    value={industry}
                    options={industryOptions}
                />
                <Select
                    placeholder="Select Position"
                    style={{ width: 200, marginRight: '1rem', marginBottom: '1rem' }}
                    onChange={handleChangePosition}
                    value={position}
                    options={positionOptions}
                />
                <Select
                    placeholder="Select Area"
                    style={{ width: 200, marginRight: '1rem', marginBottom: '1rem' }}
                    onChange={handleChangeArea}
                    value={area}
                    options={areaOptions}
                />
                <Button type='primary' onClick={applyFilter} style={{marginBottom: '20px'}}>Apply Filter</Button>
                <JobSwipping></JobSwipping>
            </div>
        </div>
    );
};

const buttonMobileStyles = {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    padding: '0 20px',  
};

const buttonDesktopStyles = {
    display: 'flex',
    justifyContent: 'center',
};

const industryOptions = [
    { value: '0', label: 'All Industries' },
    { value: '1', label: 'Technology' },
    { value: '2', label: 'Finance' },
    { value: '3', label: 'Healthcare' },
    { value: '4', label: 'Education' },
    { value: '5', label: 'Retail' },
    { value: '6', label: 'Manufacturing' },
    { value: '7', label: 'Hospitality' },
    { value: '8', label: 'Media & Entertainment' },
];

const positionOptions = [
    { value: '0', label: 'All Positions' },
    { value: '1', label: 'Software Engineer' },
    { value: '2', label: 'Financial Analyst' },
    { value: '3', label: 'Registered Nurse' },
    { value: '4', label: 'Teacher' },
    { value: '5', label: 'Sales Manager' },
    { value: '6', label: 'Marketing Specialist' },
    { value: '7', label: 'Operations Manager' },
    { value: '8', label: 'Human Resources Coordinator' },
];

const areaOptions = [
    { value: '0', label: 'All Areas' },
    { value: '1', label: 'Kuala Lumpur' },
    { value: '2', label: 'George Town' },
    { value: '3', label: 'Johor Bahru' },
    { value: '4', label: 'Ipoh' },
    { value: '5', label: 'Kuching' },
    { value: '6', label: 'Kota Kinabalu' },
    { value: '7', label: 'Shah Alam' },
    { value: '8', label: 'Malacca City' },
];

export default Matching;
