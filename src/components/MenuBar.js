import { Menu } from "antd"

const items = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];

const MenuBar = () => {
    return (
        <Menu
            theme="dark"
            mode="horizonReactDOMtal"
            defaultSelectedKeys={['2']}
            items={items}
        />
    )
}

export default MenuBar