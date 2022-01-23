import React, { Suspense } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import useFetch from 'use-http';
import './app.scss';
import { NavBar } from './components/nav-bar/nav-bar';
import ScrollToTop from './components/scroll-top/scroll-top';
import { Website } from './service/website-types';

const RouteComponent = React.lazy(() => import('./screens/screen-layout'));


export const App = () => {
  const options = {};

  const { data } = useFetch<Website>(
    './assets/website.json',
    options,
    []
  );
  if (!data) return null;
  return (
    <Router >
      <ScrollToTop />
      <Switch>
        <Route path="/">
          <article className="main-wrapper-position">
            <section className="nav-bar-position">
              <NavBar   content={data.routes} />
            </section>
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
          </article>
        </Route>
      </Switch>
    </Router>
  );
};

