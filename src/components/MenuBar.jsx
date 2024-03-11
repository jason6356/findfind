import { CgProfile } from 'react-icons/cg'
import { GiCardRandom } from 'react-icons/gi'
import { BiTimeFive, BiLogOutCircle, BiSolidConversation } from 'react-icons/bi'
import { TbWorldQuestion } from "react-icons/tb";
import { Layout, Menu, Image } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MenuBar = ({ value, setTitle }) => {

    const { Sider } = Layout;
    const navigate = useNavigate();


    useEffect(() => {
        const storedKey = localStorage.getItem('selectedKey');
        if (storedKey) {
            setSelectedKey(storedKey);
        }
    }, []);

    const [selectedKey, setSelectedKey] = useState('/matching')

    return (
        <Sider trigger={null} collapsible collapsed={value} collapsedWidth={90} width={220} className='menuSidebar'
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                height: '100%',
                overflowY: 'auto',
                zIndex: '100',
            }}>
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={[selectedKey]}
                selectedKeys={[selectedKey]}
                style={{
                    backgroundColor: '#d5def5',
                    height: '100%',
                    overflowY: 'auto',
                }}
                onClick={async ({ key }) => {
                    if (key === '/logout') {
                        const user_id = (await supabase.auth.getUser()).data.user.id;
                        recordUserLog(user_id, "logout");
                        await supabase.auth.signOut();
                        localStorage.removeItem('selectedKey');
                        navigate('/');
                        return;
                    } else {
                        setSelectedKey(key);
                        localStorage.setItem('selectedKey', key);
                        setTitle(key)
                        navigate(key)
                    }
                }}
                items={[
                    {
                        key: 'logo',
                        icon: <Image width={45} preview={false} style={{ marginLeft: '-10px', marginRight: '0px' }} />,
                        label: <span style={{ marginLeft: '10px', fontSize: '20px', color: 'black' }}>Find Find</span>,
                        style: { height: 'auto' },
                        disabled: "true",
                    },
                    {
                        key: '/matching',
                        icon: <GiCardRandom style={{ width: '25px', height: 'auto' }} />,
                        label: 'Matching',
                    },
                    {
                        key: '/conversation',
                        icon: <BiSolidConversation style={{ width: '25px', height: 'auto' }} />,
                        label: 'Conversation',
                    },
                    {
                        key: '/pitching',
                        icon: <TbWorldQuestion style={{ width: '25px', height: 'auto' }} />,
                        label: 'Pitching',
                    },
                    {
                        key: '/profile',
                        icon: <CgProfile style={{ width: '25px', height: 'auto' }} />,
                        label: 'Profile',
                    },
                    {
                        key: '/logout',
                        icon: <BiLogOutCircle style={{ width: '25px', height: 'auto' }} />,
                        style: { position: 'absolute', bottom: '0', width: '95%' },
                        label: 'Logout',
                    },
                ]}
            />
        </Sider>
    );
}

export default MenuBar;