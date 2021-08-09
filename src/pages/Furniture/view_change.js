
import { makeStyles } from "@material-ui/core/styles";
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ViewListIcon from '@material-ui/icons/ViewList';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles({
  formControl: {
    width: "100%",
    paddingBottom: "20px",
  },
});


export default function ViewChange(props) {
  
  const classes = useStyles();

  return (
    
     
          
    <Grid container direction="row" justify="flex-end" alignItems="baseline"> 
    
    <h5 >View :</h5>
      <IconButton><ViewListIcon/></IconButton>
     <IconButton><ViewComfyIcon/></IconButton> 
     </Grid>
  );
}
