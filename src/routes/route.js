import AboutPage from "../pages/aboutPage";
import AlbumPage from "../pages/albumPage";
import HomePage from "../pages/homePage";

const routes = [
    {
        name : "About",
        path : "/about",
        component : AboutPage,
    },
    {
        name : "Home",
        path : "/",
        component : HomePage,
    },
    {
        name : "Album",
        path : "/album/:id",
        component : AlbumPage,
    }
]

export default routes;