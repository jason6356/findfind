import React, { useState } from 'react';
import { Button , Typography} from 'antd';
import LogoImage from '../../assets/findfind_logo.jpeg'; 
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [size, setSize] = useState('large'); 
    const { Title, Paragraph } = Typography;
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={LogoImage} alt="Logo" style={{ width: '200px', height: '200px', marginBottom: '20px', marginTop: '10px' }} />
            <Title  level={1} style={{ fontSize: '50px', textAlign: 'center' }}>Welcome Back</Title>
            <Paragraph style={{ fontSize: '1.1em', lineHeight: '1.7' }}>Find Find is the best way to find your Job</Paragraph>
            <Button 
                type="default" 
                shape="round" 
                size="large"
                style={{ 
                    marginTop: '20px',
                    marginBottom: '20px', 
                    padding: '25px 20px',
                    fontSize: '1.5em',
                    width: '100%',
                    maxWidth: '300px',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                }}
                onClick={() => {navigate('/register');}}
            >
            Register
            </Button>

            <Button 
                type="primary" 
                shape="round" 
                align="center" 
                size={size}
                style={{ 
                    marginTop: '10px',
                    marginBottom: '20px', 
                    padding: '25px 20px',
                    fontSize: '1.5em',
                    width: '100%',
                    maxWidth: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', 
                }}
                onClick={() => {navigate('/login');}}
                >
                Login
            </Button>

            <div style={{ marginTop: '50px', textAlign: 'center', fontSize: '1.0em' }}>
                <span>Copyright &copy; 2024. All rights reserved.</span><br/>
                <span>Version 1.0.0</span>
            </div>
        </div>   
    );
};

export default Home;