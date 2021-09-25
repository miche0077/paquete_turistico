import { List, ListItem, ListSubheader, ListItemText, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import data from '../ListData';


export const ListComponent = () => {
    const classes = useStyles()
    return (
        <List component="nav" aria-labelledby="nested-list-subheader" subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            Cost based on a group of 30px, acomodated in twin rooms
            </ListSubheader>
        }> 
        {
            data.map(item =>(

                <ListItem key={item.text}>
                    <ListItemIcon className={classes.icon}>
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text}/>

                    
               </ListItem>
            ))
        }
        </List>

        
    ) 
} 
const useStyles = makeStyles((theme) =>({
icon:{
    color:"#03bb85"
}

}))  