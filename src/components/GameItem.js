import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Grid from  '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

//import IconButton from '@material-ui/core/IconButton';
//import SvgIcon from '@material-ui/core/SvgIcon';
import { People, PersonAdd, AccessTime, Share, SupervisorAccount, Visibility } from '@material-ui/icons';

const pStyle = {
  display: 'flex'
}

const timeStyle = {
  display: 'inline-flex',
  float: 'right'
}

const playersStyle = {
  display: 'inline-flex'
}

// Por defecto, el componente CardMedia es un div con un background image, 
// al darle estos estilos, se logra el efecto de que se vea una parte sola de la imagen de forma rectangular
const mediaStyle = {
  height: 0, 
  // relacion 16:9
  paddingTop: '56.25%',
  backgroundSize: 'contain'
}

class GameItem extends Component {

    render() {      

        let gameId = this.props.data.id;

        let {          
          name,
          minPlayers,
          maxPlayers, 
          playingTime,
          age          
        } = this.props.data;
        
        let image = this.props.data.thumbnail;
        

        return (            

            <Card>
              <CardMedia                 
                image={image}
                alt={name}
                title={name}                
                style={mediaStyle}
              />
              <CardContent>
              <Typography variant="title" gutterBottom style={{paddingLeft:7}}>
                {name}
              </Typography>
                
                <Grid container justify="space-between">

                  <Grid item style={{background:'', padding:8}}>
                    <Typography component="span">                  
                      <People titleAccess="meaning" style={{position:'relative', top:5}} /> 
                      <span style={{fontSize:'18px', marginLeft:5}}>
                         {minPlayers}-{maxPlayers}
                      </span>                  
                    </Typography>
                  </Grid>

                  <Grid item style={{background:'', padding:8}}>
                    <Typography component="span">                  
                      <AccessTime titleAccess="meaning" style={{position:'relative', top:5}} />
                      <span style={{fontSize:'18px', marginLeft:5}} >
                        {playingTime} min
                      </span>                  
                    </Typography>
                  </Grid>

                  <Grid item style={{background:'', padding:8}}>
                    <Typography component="span">                  
                      <SupervisorAccount titleAccess="meaning" style={{position:'relative', top:5}} />
                      <span style={{fontSize:'18px', marginLeft:5}}>
                        {age}
                      </span>                  
                    </Typography>
                  </Grid>
                </Grid>
                
                <CardActions>

                  <Grid container justify="space-between">
                    <Grid item>
                      <Button size="medium" color="primary">
                        <Link to={`/games/${gameId}`} className="not-underline primary">
                          Ver más
                        </Link>                                      
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button size="small" color="primary">
                          <Share link={`/games/${gameId}`} />                        
                      </Button>
                    </Grid>

                  </Grid>
                  
                </CardActions>
                

              </CardContent>    
            </Card>
        

        );
    }
}

export default GameItem;