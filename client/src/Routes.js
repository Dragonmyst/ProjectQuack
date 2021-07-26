import * as React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { FeedCollectionPage } from './pages/FeedCollectionPage';
import { Page404 } from './pages/Page404';

const Routes = (props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact={true} path="/about" component={AboutPage} />
                <Route exact={true} path="/feederform" render={() => <Redirect to="/feederform" />} />
                <Route exact={true} path="/" component={FeedCollectionPage} />
                
                <Route path="*" component={Page404} />
            </Switch>
        </React.Fragment>
    )
}

export default Routes;