import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from '../home';
import Weapons from '../weapons';
import Cart from '../cart';
import Errors from '../errors';

import './styles.css';
import './head-spin.css'

class App extends Component {
    constructor() {
        super();

        this._searchText = "";
    }

    onSearchSubmit(e) {
        e.preventDefault()

        this.props.history.push(`/weapons/q=${this._searchText}`);
    }

    render() {
        return (
            <div>
                <header className="header-upper">
                    <h1 className="header-upper__header">
                    <img className="header-upper__logo-face" alt="wanda's face" src="/images/wandas-face.png" />
                    <span className="header-upper__title">Wacky Wanda's Wicked Weapons</span>
                </h1>        
                </header>
                <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__li-buttons"><Link to="/">Home</Link></li>
                    <li className="navbar__li-buttons"><Link to="/weapons">Weapons</Link></li>
                    <li className="navbar__li-search">
                        <form className="weapons-search" onSubmit={(e) => this.onSearchSubmit}>
                            <input 
                                className="weapons-search__input" 
                                type="text" 
                                name="q"
                                placeholder="Weapons search"
                                ref={input => this._searchText = input}
                            />
                        </form>
                    </li>
                    <li className="navbar__li-pay"><Link to="/cart">gp<img src="/images/coins.png" alt=""/></Link></li>
                </ul>
                </nav>
    
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/weapons" component={Weapons}/>
                    <Route path="/cart" component={Cart}/>
                    <Route component={Errors} />
                </Switch>
            </div>
        )
    }
}

export default App;