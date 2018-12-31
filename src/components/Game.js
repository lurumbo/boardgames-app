import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { People, SupervisorAccount, AccessTime } from '@material-ui/icons';
import '../css/Game.css';

const Game = (props) => {

    console.log(props);

    //return null;

    //let {gameId, name, thumbnail, image, minPlayers, maxPlayers, playingTime, averageRating} = props.data;

    // Por falta del dato, usamos uno cualquiera.
    //let age = maxPlayers;

    let gameId = props.data.id;

    let {          
        name,
        minPlayers,
        maxPlayers, 
        playingTime,
        age,
        category,
        description          
    } = props.data;
    
    let image = props.data.thumbnail;

    let backegroundImage = props.data.backgroundImage;

    const backgroundImageSrc = {        
        backgroundImage : `url(${backegroundImage})`        
    }


    return (
        <React.Fragment>
            <div className="background" style={backgroundImageSrc}>
                <div className="layer">                                       
                </div>
            </div>
            <div className="paper-container">                                   
                <div className="avatar">
                    <img src={`${image}`} alt={name} />
                </div>
                <div className="align-center">                    
                    <Typography className="title-2" variant="h2" gutterBottom>
                        {name}
                    </Typography>                
                    <Typography variant="subtitle1" gutterBottom>
                        {category[0]}
                    </Typography>                    
                </div>
                <div className="align-center">
                    <Grid container justify="space-between" className="grid-container">
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className="grid-item">
                            <People fontSize="large" />
                            <Typography>
                                {minPlayers}-{maxPlayers} Jugadores
                            </Typography>                            
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className="grid-item">      
                            <AccessTime fontSize="large" />
                            <Typography>
                                {playingTime} minutos de juego
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className="grid-item">
                            <SupervisorAccount fontSize="large" />
                            <Typography>
                                A partir de {age} años
                            </Typography>
                        </Grid>
                    </Grid>                
                </div>
                <Divider />
                <div className="grid-container">
                    <Typography align="center" gutterBottom>
                    {description}
                    </Typography>
                </div>           
            </div>
        </React.Fragment>            
    )
}

export default Game;