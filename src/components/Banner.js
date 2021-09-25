import { makeStyles, Paper, Typography } from "@material-ui/core";
import venezuela from '../images/venezuela.jpeg';
import Logo from '../images/Logo.jpg';
import StarsIcon from '@material-ui/icons/Stars';

export const Banner = () => {
    const classes = useStyles()
    return (
       <>
       <Paper variant="outlined" square elevation={0} className={classes.Banner}>
        <div className={classes.titleContainer}>
        <Typography variant="h3" component="h1" className={classes.title}>
            Reset your Events in <span style={{color:"#03bb85"}}> Caracas</span>
            </Typography>
            <img src={Logo} alt="Logo" className={classes.Logo}/>
        </div>
        <div className={classes.subtituleContainer} >
         <Typography className={classes.subTitle} variant="h6">
        Organize your meeting in a...
        <br/>
        100% certified eco-resort 
        <StarsIcon className={classes.icon} fonSize="small"/>
        best-in-class-speed-connection
        <StarsIcon className={classes.icon} fonSize="small"/>
        surrounded by nature
        <StarsIcon className={classes.icon} fonSize="small"/>
        20-mins from Caracas 
         </Typography>
     

        </div>
       </Paper>
       </>
    )
}

const useStyles = makeStyles((theme)=>({
    Banner:{
     width: "inherit",
     height: "55vh",
     backgroundImage: `url(${venezuela})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     backgroundPosition: "center center",
     color: "#fff",
     fontWeight: "bold",
     position: "relative",
     
    },
    titleContainer:{
        background: "#000",
        opacity: 0.8,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left:0,
        right: 0
    },
    Logo:{
        width: "5rem",
        height: "auto",
        padding: theme.spacing(2),
       
    },
    title:{
        padding: theme.spacing(2)
    },
    subtituleContainer:{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#000",
        opacity: 0.9,
    },
    subTitle:{
        color:"#03bb85",
        fontWeight: "bold",
        padding: theme.spacing(2),
        height: "auto",
        textAlign: "center",
    },
    icon:{
        verticalAlign: "middle",
        marginRight: theme.spacing(0,1)

    },
    [theme.breakpoints.down("sm")]:{
        title: {
            fontSize: "1.5rem",
        },
        Logo:{
            width: "7rem",
        },
        subTitle:{
            fontSize: "1rem"
        }

    },
    [theme.breakpoints.down("xs")]:{
        subTitle:{
            display: 'none'
        }

    }
  
})); 