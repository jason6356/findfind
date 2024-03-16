import { Outlet, useLocation } from "react-router-dom";
import { Button, Layout, theme, Drawer } from 'antd';
import { useEffect, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MenuOutlined
} from '@ant-design/icons';
import MenuBar from './MenuBar';
import { useMediaQuery } from 'react-responsive';


const AppLayout = () => {

    const { Header, Content } = Layout;
    const location = useLocation();


    const [collapsed, setCollapsed] = useState(false);
    const [title, setTitle] = useState('Matching');

    const isMobileOrDesktop = useMediaQuery({ minWidth: 768 });

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleCollapsed = () => {
        setCollapsed(!collapsed);
        onClose();
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

    //For Drawer
    const [open, setOpen] = useState(false);
    const showMenu = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        handleTitle(location.pathname);
    }, [location.pathname]);

    return (
        <>
            {isMobileOrDesktop ? (
                <div>
                    <Layout className="appLayout">
                        <MenuBar isMobileOrDesktop={isMobileOrDesktop} value={collapsed} onChange={onClose} setTitle={handleTitle} />

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
                </div>
            ) : (
                <div>
                    <Layout style={{ backgroundColor: 'white' }}>
                        <div style={{
                            display: 'flex',
                            position: 'fixed',
                            top: '0',
                            width: '100%',
                            backgroundColor: 'white',
                            zIndex: '1000' 
                        }}>
                            <Button onClick={showMenu} style={{ border: 'none', marginLeft: '10px', marginTop: '15px' }}>
                                <MenuOutlined />
                            </Button>
                            <Header
                                style={{
                                    background: colorBgContainer,
                                    flex: '1',
                                    paddingLeft: '10px',
                                    display: 'flex',
                                    alignItems: 'center' /* Align center vertically */
                                }}
                            >
                                <h1 style={{ fontSize: '20px', margin: 0 }}>{title}</h1>
                            </Header>
                        </div>


                        <Content
                            style={{
                                marginTop: '60px',
                                padding: 24,
                                // minHeight: "80vh",
                                // marginLeft: (!collapsed ? '250px' : '110px'),
                                background: colorBgContainer,
                            }}
                        >
                            <Outlet />
                        </Content>
                    </Layout>


                    <Drawer title="Find Find" onClose={onClose} open={open} placement="left" width={180} style={{ backgroundColor: '#d5def5' }}>
                        <MenuBar isMobileOrDesktop={isMobileOrDesktop} value={collapsed} onChange={onClose} setTitle={handleTitle} />
                    </Drawer>
                </div>
            )}
        </>

    );
};

export default AppLayout;