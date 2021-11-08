import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.scss';
import { NavBar } from './components/nav-bar/nav-bar';

// import { NavBar } from './components/nav-bar/nav-bar';
// import ScrollToTop from './components/scroll-to-top';
// import HomeScreen from './screens/web/home/home-screen';

const HomeScreen = React.lazy(() => import('./screens/home/home-screen'));
const About = React.lazy(() => import('./screens/about/about'));
const Work = React.lazy(() => import('./screens/work/work'));

export const App = () => {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Switch>
        <section className="main-wrapper-position">
          <div className="nav-bar-position">
            <NavBar />
          </div>
          <Switch>
            <Route path="/" exact>
              <Suspense fallback={null}>
                <HomeScreen />
              </Suspense>
            </Route>
            <Route path="/about">
              <Suspense fallback={null}>
                <About />
              </Suspense>
            </Route>
            <Route path="/work">
              <Suspense fallback={null}>
                <Work />
              </Suspense>
            </Route>
          </Switch>
        </section>
      </Switch>
    </Router>
  );
};
