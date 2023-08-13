import APIService from "services/APIservice"
import BasePage from "pages/BasePage"

const Home = () => {
    return (
        <div>
            <BasePage
                fnc={APIService.getRandomPhotos}
                fncNext={APIService.getRandomPhotosNext}
            />
        </div>
    )
}

export default Home 