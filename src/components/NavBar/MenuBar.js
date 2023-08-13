import { Menu } from "antd"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
    {
        label: 'Home',
        key: '/',
    },
    {
        label: 'Animals',
        key: '/topic/animals',
    },
    {
        label: 'Travel',
        key: '/topic/travel',
    },
    {
        label: 'Athletics',
        key: '/topic/athletics',
    },
    {
        label: 'Film',
        key: '/topic/film',
    },
];

const STYLE = {
    display: "flex",
    justifyContent: 'center',
    backgroundColor: 'transparent',
    outline:0,
}

const MenuBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [current, setCurrent] = useState(location.pathname);

    const onClick = (e) => {
        setCurrent(e.key);
        navigate(e.key)
    };

    return (
        <Menu
            style={STYLE}
            mode="horizontal"
            items={items}
            onClick={onClick}
            selectedKeys={[current]}
        />
    )
}

export default MenuBar