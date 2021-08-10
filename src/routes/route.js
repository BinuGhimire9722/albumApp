import AboutPage from "../pages/aboutPage";
import AlbumPage from "../pages/albumPage";
import HomePage from "../pages/homePage";

const routes = [
    {
        name : "About",
        path : "/about",
        show : true,
        component : AboutPage,
    },
    {
        name : "Home",
        path : "/",
        show : true ,
        component : HomePage,
    },
    {
        name : "Album",
        path : "/album/:id",
        show : false,
        component : AlbumPage,
    }
]

export default routes;