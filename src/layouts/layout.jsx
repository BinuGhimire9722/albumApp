import routes from "../routes/route";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomNavbar  from "../components/navbar.jsx";
import history from "../history/history.js";
function Layout(props){
    return <div>
        <Router history={history}>
            <CustomNavbar/>
            <Switch>
                { routes.map((item)=>{
                    return <Route key={item.name} path={item.path} component={(prop)=><item.component {...prop} {...props} />}  exact/>
                })}
            </Switch>
        </Router>
              
    </div>
}

export default Layout;