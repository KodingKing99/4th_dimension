import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  fab: {
    // margin: theme.spacing.unit, // You might not need this now
    // position: "absolute",
    // bottom: theme.spacing.unit * 2,
    // top: 100,
    // bottom: 0,
    // margin: '20px'
    // top: -30,
    // height: theme.spacing.unit,
    // height: 20px,
    // right: theme.spacing.unit * 3
  },
}));
// const StyledFab = styled(Fab)({
//   position: 'absolute',
//   zIndex: 1,
//   top: -30,
//   left: 0,
//   right: 0,
//   margin: '0 auto',
// });
function Navbar() {
  const classes = useStyles();

  return (
      <div>
        <AppBar color="primary" sx={{ top: 'auto', bottom: 0 }} >
        <CssBaseline />
        <Toolbar>
            <Typography variant="h4" className={classes.logo}>
            Putt Putt Golf
            </Typography>
            <div className={classes.navlinks}>
              <LogoutIcon/>
            </div>
        </Toolbar>
        </AppBar>
      </div>
    
  );
}
export default Navbar;
