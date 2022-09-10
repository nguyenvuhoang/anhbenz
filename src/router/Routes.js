import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import BlogDetail from "../views/BlogDetail";
import Preview from "../views/Preview";

const Routes = () => {
  document.body.classList.add("dark");
  const routes = [
    { url: '', component: Home },
    { url: 'page-not-found', component: NotFound },
    { url: 'preview', component: Preview },
    { url: 'blog-details/:name', component: BlogDetail }
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
