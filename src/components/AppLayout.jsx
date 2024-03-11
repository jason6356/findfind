import { Outlet, useLocation } from "react-router-dom";
import { Button, Layout, theme, Image } from 'antd';
import { useEffect, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import MenuBar from './MenuBar';

const AppLayout = () => {

    const { Header, Content } = Layout;
    const location = useLocation();


    const [collapsed, setCollapsed] = useState(false);
    const [title, setTitle] = useState('Matching');

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const handleTitle = (newTitle) => {
        switch (newTitle) {
            case '/matching':
                setTitle('Matching')
                break;
            case '/conversation':
                setTitle('Conversation')
                break;
            case '/pitching':
                setTitle('Pitching')
                break;
            case '/profile':
                setTitle('Profile')
                break;
        }
    }

    useEffect(() => {
        handleTitle(location.pathname);
    }, [location.pathname]);

    return (
        <Layout className="appLayout">
            <MenuBar value={collapsed} onChange={handleCollapsed} setTitle={handleTitle} />

            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginLeft: (!collapsed ? '250px' : '110px'),
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={handleCollapsed}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <h1 style={{ display: 'block', margin: '0 auto', marginInlineStart: '0px', fontSize: '20px' }}>{title}</h1>
                </Header>
                <Content
                    style={{
                        margin: '24px 0px',
                        padding: 24,
                        minHeight: "80vh",
                        marginLeft: (!collapsed ? '250px' : '110px'),
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;