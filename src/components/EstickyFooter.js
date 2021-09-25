import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles, Typography, Container } from "@material-ui/core";
import { Copyright, Link } from "@material-ui/icons";


const copyright = () =>{
return(
   <Typography variant='body2' color="textSecondary">
    Copyright ©️
       <Link color="inherit" href="https://https://www.facebook.com/profile.php?id=100007954066624" target="_blank" rel="noreferrer">profile</Link>
       {
           new Date().getFullYear()
       }
   </Typography>
)

}

export const EstickyFooter = () => {
    const classes = useStyles()
    return (
<footer className={classes.footer}>
  <Container maxWidth="sm">  
   <Typography variant="body1">
    Curated with<FavoriteIcon style={{color:"red"}}/>
    by Michelle<span>
        <a href="https://https://www.facebook.com/profile.php?id=100007954066624"
        target="_blank"
        rel="noreferrer"
        >
     Michelle/workshop 
     </a>
    </span>
   </Typography>
  <Copyright/>

   
   </Container>
  </footer>
       
    )
}
const useStyles = makeStyles((theme)=>({
   footer:{
     padding: theme.spacing(3,2),
     marginTop: "auto",
    textAlign: "center"
    }
    }));
