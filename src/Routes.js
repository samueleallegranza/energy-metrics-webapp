import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';

import MainLayout from './Layouts/Main/Main';
import MinimalLayout from './Layouts/Minimal/Minimal';

import HomeView from './Views/Home/Home';

const Routes = () => {
    return(
        <Switch>
            {/* Redirects */}
            <Redirect from='/' to='/home' exact />
            
            {/* Routes */}
            <Route path='/home' exact>
                <MainLayout>
                    <HomeView />
                </MainLayout>
            </Route>

            <Route path='/not-found' exact>
                <MinimalLayout>
                    <div> 404 - Not Found! </div>
                </MinimalLayout>
            </Route>

            {/* Not found page handler */}
            <Redirect to='/not-found' exact></Redirect>
        </Switch>
    )
}

export default Routes;