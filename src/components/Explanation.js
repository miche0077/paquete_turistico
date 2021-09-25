import { makeStyles, Paper, Typography, Divider, Button } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';

const Emoji = props =>(
    <span 
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}>
        {props.symbol}
    </span> 
)

export const Explanation = () => {
    const classes = useStyles()
    return (
        <Paper variant="outlined" elevation="0" square className={classes.Explanation}>
          <Typography variant="subtitle1" paragraph gutterBottom style={{margin:"0.5rem"}} >
         <strong>MICHE</strong>  groups are finally back, <Emoji symbol="✌️" labeland="victory"/> and we fell like we are in the pink!
           All this past months, we have been talking to you guys, and
           we have listened what the new necessities are now for the <strong>MICHE</strong> Market, now that... this thingy is over
            <Emoji symbol="😷" label="virus"/> ehem..
          </Typography>
          <Divider/>
          <Typography variant="subtitle1" paragraph gutterBottom style={{margin: "0.5rem"}}>
            It took time, but our Operations Team have managed to curate a progra, that has it all,
             This offer is based on a 5 star 100% certified eco-resort 20 mins north of <strong>Caracas</strong>,
              and surrounded by nature <Emoji symbol="🏞 " label="nature"/> <Emoji symbol="👉" label="finger"/>
         </Typography>

           <Typography variant="subtitle1" paragraph gutterBottom style={{margin: "1rem 1.5rem"}}>
              <Emoji symbol="👉" label="finger"/> For<strong>day 1</strong>, we have prepared a 1/2 meeting, and pic-nic lunch among vineyards, with sea-views and a great wine activity. 
              </Typography>
              
            <Typography variant="subtitle1" paragraph gutterBottom style={{margin: "1rem 1.5rem"}}>
              <Emoji symbol="👉" label="finger"/> For<strong> day 2</strong>, we actually spend the day in <strong>Caracas</strong>. We first enjoy a specialised tour at the @22 district, we kwown as a major hub in the South of America for digital entrepreneurs, and tech start ups.
              </Typography>
        <Typography variant="subtitle1" paragraph gutterBottom style={{margin: "0.5rem"}}>
           Our guide will help us notice all  the high-tech infraestructure, the IOT(Internet of Things) present in everyday life urban objects, and the policies that have transformed <strong>Caracas</strong> to a capital for Mobile<Emoji symbol="📱" label="phone"/>, Startups and SmartCities.
           Last, but not least -we are offering a first-in-class experience at  Jw Marriot -an extraordinary atelier , where our tailor-made workshop, will help the group enhance their digital image.
           <Emoji symbol="🤩" label="wonderful"/> This workshop can work for the individual participants, as well as at a company level.

        </Typography>
        <div className={classes.action}>
            <Button variant="contained" startIcon={<EmailIcon/>}  style={{margin: "2rem 0" }} style={{backgroundColor:"#ea5933"}}> 
            <a className={classes.link} href="mailto:michellevegas_16@hotmail.com">
            Send me an Email  <span className={classes.extendText}> to learn more..</span>
            </a>
         
            </Button>
               <br/>
            <Typography variant="h6">
         Or get in touch at michellevegas_16@hotmail.com
            </Typography>
        </div>
        
        </Paper>
    )
}
const useStyles = makeStyles((theme)=>({
    explanation:{
        width: "inherit",
        height: "auto",
        padding:theme.spacing(2)
        

    },
    action:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& button:hover":{
            backgroundColor: "#ccc !important",
        
        }
    },
    link:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1rem",
        textDecoration: "none",
        fontStyle: "italic",
    },
    [theme.breakpoints.down("md")]: {
        extendText:{
            display: "none"
        }
    }
}));