import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import dataGames from '../data/games.json';
import Header from './Header';
import Home from './Home';
import Game from './Game';

class Router extends Component {

    state = {
        games : []
    }
    
    componentWillMount () {
        this.setState({
            games : dataGames
        });
    }

    getGameById = (games, props) => {
        let game = games.filter(  game => {
            let pathId = props.location.pathname.replace('/games/', '');
            return game.id == pathId;
        });
        return game[0];
    }

    render () {
        return (
            
            // Todo lo que tenga que ver con links o enlaces debe ir dentro del BrowserRouter
            <BrowserRouter>

                <React.Fragment>
    
                    <Header />

                    {/* El Switch permite manejar todas las Rutas que tengamos en el proyecto */}
                    <Switch>
                        
                        {/* <Route exact path="/" component={Home} /> */}
                        <Route exact path="/" render={ () => (
                            <Home games={this.state.games} />
                        )} />
                        
                        <Route exact path="/games/:gameId" render={
                            (props) => {
                                let game = this.getGameById(this.state.games, props);                                
                                return (
                                    <Game data={game} />
                                )                        
                            } 
                        } />                    

                    </Switch>

                </React.Fragment>            
            
            </BrowserRouter>
        )
    }

}

export default Router;