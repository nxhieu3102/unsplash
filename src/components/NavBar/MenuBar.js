import { Menu } from "antd"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const items = [
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'Animal',
        key: 'animal',
    },
    {
        label: 'Sports',
        key: 'sports',
    },
    {
        label: 'Game',
        key: 'game',
    },
    {
        label: 'Science',
        key: 'science',
    },
];

const STYLE = {
    display: "flex",
    justifyContent: 'center',
}

const MenuBar = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
        setCurrent(e.key);
        if(e.key !== 'home')
            navigate("/collection/" + e.key)
        else navigate("/")
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