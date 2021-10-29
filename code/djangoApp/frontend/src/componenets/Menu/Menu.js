import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import Icon from '@mui/material/Icon';
import './Menu.css'


const Menu = () => {
    const role = useSelector((state) => state.user.role);
    const [toggleAll, setToggleAll] = useState(false);
    const [toggleDrawer, setToggleDrawer] = useState(false);

    const handleIconClick = (itemId) => {
        setToggleDrawer(true);
    }
    const handlePurchaseClick = () => {
        // Add item to purchase history
        setToggleDrawer(false);
    }
    const item = { id: 1 }
    return (
        <div className="menu-main">
            {role === "player" &&
                <div className="player-view">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

                    <div className="recent-items">
                        <span className="icon-span" onClick={() => { handleIconClick(item.id) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        <span className="icon-span" onClick={() => { handleIconClick(item.id) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        <span className="icon-span" onClick={() => { handleIconClick(item.id) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                    </div>
                    {toggleAll &&
                        <div className="all-items">
                            <span className="icon-span" onClick={() => { handleIconClick(item.id) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        </div>
                    }
                    <div className="toggle-button">
                        <button onClick={() => setToggleAll(!toggleAll)}>View All</button>
                    </div>
                    <Drawer
                        anchor="right"
                        open={toggleDrawer}
                        onClose={() => { setToggleDrawer(false) }}
                    >
                        <div className="drawer-content">
                            <Icon>coffee</Icon>
                            <div>Coffee</div>
                            <div>$1.00</div>
                            <input type="number" />
                            <button className="purchase-button">Purchase</button>
                        </div>
                    </Drawer>
                </div>
            }{role === "drinkMiester" &&
                <div className="drink-miester-view">
                    {/* Get all current drinks and display them */}
                    {/* Button to fulfill and delete */}
                </div>
            }{(role === "owner" || role === "manager") &&
                <div className="manager-view">
                    {/* Edit drinks */}
                </div>
            }
        </div>
    );
}

export default Menu;