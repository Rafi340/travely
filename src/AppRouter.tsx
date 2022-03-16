import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route
  } from "react-router-dom"; // Switch use in V5, Now in V6 we use Routes 
import ProductDetails from './Pages/Home/ProductDetails';
const Home = React.lazy(() => import('./Pages/Home/Home'));
const Help = React.lazy(()=> import('./Pages/Help/Help'));

  const AppRouter: React.FC = ({children}) =>{
      return <>
        <Router>
            {
                children
            }
            <Switch>
                <Suspense fallback={<div> Loading....</div>}>
                <Route exact path="/" component={Home} />
                <Route exact path="/Help" component={Help} />
                <Route exact path="/product/:id" component={ProductDetails} />
                </Suspense>
            </Switch>
        </Router>
      </>;
  };
  export default AppRouter;