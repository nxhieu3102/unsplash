import { Input } from "antd"
const Search = Input.Search

const SearchBar = () => {
    const onSearch = (value) => console.log(value);

    return (
        <div className="flex align-center">
            <Search placeholder="input search text"
                onSearch={onSearch}
                style={{
                    width: 200,
                }} />
        </div>
    )
}

export default SearchBar