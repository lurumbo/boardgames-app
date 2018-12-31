import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GameItem from './GameItem';

class GamesList extends Component {

    render () {        
        return (            
            <Grid container spacing={24} style={{padding:24}}>
                {
                    Object.keys( this.props.games ).map( key => (                        
                        <Grid item key={key} xs={12} sm={6} md={4} lg={3} xl={3}>                            
                            <GameItem data={this.props.games[key]} />
                        </Grid>
                    ) )
                }
            </Grid>            
        )
    }

}

export default GamesList;