import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
