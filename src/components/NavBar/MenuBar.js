import { Menu } from "antd"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
    {
        label: 'Home',
        key: '/',
    },
    {
        label: 'Animal',
        key: '/collection/animal',
    },
    {
        label: 'Sports',
        key: '/collection/sports',
    },
    {
        label: 'Game',
        key: '/collection/game',
    },
    {
        label: 'Science',
        key: '/collection/science',
    },
];

const STYLE = {
    display: "flex",
    justifyContent: 'center',
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