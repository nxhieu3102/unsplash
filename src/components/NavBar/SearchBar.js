import { Input } from "antd"
import { useNavigate } from "react-router-dom";
const Search = Input.Search

const SearchBar = () => {
    const navigate = useNavigate();
    const onSearch = (value) => navigate(`/search/${value}`);

    return (
        <div className="flex align-center">
            <Search placeholder="topic"
                onSearch={onSearch}
                style={{
                    width: 200,
                }} />
        </div>
    )
}

export default SearchBar