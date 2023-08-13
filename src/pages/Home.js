import APIService from "services/APIservice"
import BasePage from "pages/BasePage"

const Home = () => {
    return (
        <div>
            <BasePage
                promise={APIService.getRandomPhotos()}
            />
        </div>
    )
}

export default Home 