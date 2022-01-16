import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from 'use-http';
import './app.scss';
import { NavBar } from './components/nav-bar/nav-bar';
import ScrollToTop from './components/scroll-top/scroll-top';
import { RouteComponent } from './screens/screen-layout';
import { Website } from './service/website-types';


export const App = () => {
  const options = {};
  const { data } = useFetch<Website>(
    './assets/website.json',
    options,
    []
  );
  if (!data) return null;
  return (
    <Router basename={process.env.NX_BASE_HREF} >
      <ScrollToTop />
      <Switch>
        <Route path="/">
          <section className="main-wrapper-position">
            <div className="nav-bar-position">
              <NavBar   content={data.routes} />
            </div>
            <Switch>
              {data.routes
              .filter((route) => !route.hideButton)
              .map((route) => {
                return (
                  <Route key={route.name} path={route.path} exact={route.exact}>
                    <Suspense fallback={null}>
                      <RouteComponent content={route} />
                    </Suspense>
                  </Route>
                );
              })}
            </Switch>
          </section>
        </Route>
      </Switch>
    </Router>
  );
};

