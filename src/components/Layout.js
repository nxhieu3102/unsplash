import NavBar from "components/NavBar"

const Layout = ({ children }) => {
    return (
        <div className="flex justify-center">
            <div className="w-[1340px]">
                <NavBar />
                {children}
            </div>
        </div>
    )
}

export default Layout