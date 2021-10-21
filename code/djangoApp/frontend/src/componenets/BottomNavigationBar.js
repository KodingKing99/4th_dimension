import * as React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';import FavoriteIcon from '@mui/icons-material/Favorite';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Icon from "@mdi/react";
import { mdiBeerOutline } from '@mdi/js';
import { mdiViewListOutline } from '@mdi/js';
import { mdiFamilyTree } from '@mdi/js';
import { mdiCash } from '@mdi/js';
import { useSelector } from "react-redux";
export default function BottomNavigationBar(props) {
  const {paths} = props;
  const [value, setValue] = React.useState(0);
  const role = useSelector((state) => state.user.role);
  console.log(role);
  if(role == 'player'){
    return (
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(paths[newValue])
          }}
        >
          <BottomNavigationAction  to='/#game' component={Link}  label="Game" icon={<SportsGolfIcon />} />
          <BottomNavigationAction to='/#drinks' component={Link} label="Drinks" icon={<Icon path={mdiBeerOutline} title="Drink" size={1} />}/>
          <BottomNavigationAction to='/#leaderboard' component={Link} label="Leaderboards" icon={<BarChartIcon />} />
          <BottomNavigationAction to='/#account' component={Link} label="Account" icon={<AccountCircleIcon />}></BottomNavigationAction>
        
        </BottomNavigation>
    );
  } else if(role=="drinkMiester"){
    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(paths[newValue])
        }}
      >
        <BottomNavigationAction  to='/#drink-orders' component={Link}  label="Drink Orders" icon={<Icon path={mdiViewListOutline} />} />
        <BottomNavigationAction to='/#account' component={Link} label="Account" icon={<AccountCircleIcon />}></BottomNavigationAction>
      
      </BottomNavigation>)
  } else if(role=="manager"){
    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(paths[newValue])
        }}
      >
        <BottomNavigationAction  to='/#manage-tournaments' component={Link}  label="Manage Tournaments" icon={<Icon path={mdiFamilyTree} />} />
        <BottomNavigationAction to='/#manage-drinks' component={Link} label="Manage Drinks" icon={<Icon path={mdiBeerOutline} title="Drink" size={1} />}/>
        <BottomNavigationAction to='/#manage-users' component={Link} label="Manage Users" icon={<PeopleIcon />} />
        <BottomNavigationAction to='/#manage-refunds' component={Link} label="Refunds" icon={<AccountBalanceWalletIcon />} />
        <BottomNavigationAction to='/#account' component={Link} label="Account" icon={<AccountCircleIcon />}></BottomNavigationAction>
      
      </BottomNavigation>)
  }else if(role=="owner"){
    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(paths[newValue])
        }}
      >
        <BottomNavigationAction  to='/#owner-manage-users' component={Link}  label="Manage Users" icon={<PeopleIcon />} />
        <BottomNavigationAction to='/#manage-drinks' component={Link} label="Manage Drinks" icon={<Icon path={mdiBeerOutline} title="Drink" size={1} />}/>
        <BottomNavigationAction to='/#money' component={Link} label="Money" icon={<Icon path={mdiCash} />} />
        <BottomNavigationAction to='/#account' component={Link} label="Account" icon={<AccountCircleIcon />}></BottomNavigationAction>
      
      </BottomNavigation>)
  }
  else {
    return ''
  }
}
