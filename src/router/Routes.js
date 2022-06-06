import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

const Routes = () => {
  const routes = [
    { url: '', component: Home },
    { url: 'page-not-found', component: NotFound },
  ]
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          {routes.map((data, i) => (
            <Route 
              key={i} 
              exact 
              path={`/${data.url}`}
              component={data.component} />
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
