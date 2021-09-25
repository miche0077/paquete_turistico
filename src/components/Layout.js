import { makeStyles } from "@material-ui/core";



export const Layout = ({children}) => {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}


const useStyle = makeStyles((theme)=>({
root:{
    display: "flex", 
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    margin: theme.spacing(2)
    
}
}));