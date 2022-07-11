import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";


// import NewQuote from "./pages/NewQuote";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const Quotes = React.lazy(() => import('./pages/Quotes'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/new">
          <NewQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
