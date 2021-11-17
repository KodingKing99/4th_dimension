import {makeStyles} from '@material-ui/core'
export const APPGREEN = '#7ea75f';
export const DEADGREEN = '#92a982'
export const CREAM = '#fff';
export const DARKRED = '#4d1212'
export const RED = 'crimson';
export const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor : APPGREEN,
    "&:hover": {
      backgroundColor : DEADGREEN, 
    },
  },
  bottomNavbar: {
    selected: {
      color: APPGREEN
    },
  },
}));