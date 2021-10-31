import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useMemo, useState } from "react";
import { getAllActiveTransactions } from "../../services/services";
import { Drawer } from "@material-ui/core";
import Icon from '@mui/material/Icon';
import './Menu.css'



const Menu = () => {
    const role = useSelector((state) => state.user.role);
    const [toggleAll, setToggleAll] = useState(false);
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [editable, setEditable] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        if (role === 'drinkMiester') {
            getAllActiveTransactions().then((data) => {
                setTransactions(data);
            });
        }
    }, []);


    const handleIconClick = (itemId, edit = false) => {
        setToggleDrawer(true);
        setEditable(edit)
    }
    const handlePurchaseClick = () => {
        // Add item to purchase history
        setToggleDrawer(false);
    }
    const handleCompleteClick = () => {
        // Complete transaction
    }
    const handleDeleteClick = () => {
        // Delete transaction
    }
    const handleAddMenuItemClick = () => {
        // Add menu item
    }
    const handleEditMenuItem = () => {
        // Add menu
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

                </div>
            }{role === "drinkMiester" &&
                <div className="drink-miester-view">
                    {transactions.map((item) => {
                        return (
                            <div className="transaction-container" key={item.transactionid}>
                                <div className="item-name">{item.transactionbuyer}</div>
                                <div className="item-price">{item.transactiondrinkmeister}</div>
                                <div className="item-quantity">{item.transactiondate}</div>
                                <div className="item-quantity">${item.transactionprice}</div>
                                <div className="item-quantity">{item.transactionactiveflag}</div>
                                <button className="complete-button" onClick={() => { handleCompleteClick(item.transactionid) }}>Complete</button>
                                <button className="delete-button" onClick={() => { handleDeleteClick(item.transactionid) }}>Delete</button>
                            </div>
                        )
                    })}
                    {/* Get all current drinks and display them */}
                    {/* Button to fulfill and delete */}
                </div>
            }{(role === "owner" || role === "manager") &&
                <div className="manager-view">
                    {/* Edit drinks */}
                    <div className="menu-items">
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                        {/*  icon onclick should open a drawer to edit name, price, and icon */}
                        <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        <button className="add-button" onClick={() => { handleAddMenuItemClick() }}>Add</button>
                    </div>
                </div>
            }
            <Drawer
                anchor="right"
                open={toggleDrawer}
                onClose={() => { setToggleDrawer(false) }}
            >
                <div className="drawer-content">
                    {editable ?
                        <div className="edit-menu-item">
                            <Icon>coffee</Icon>
                            <form>
                                <input type="text" placeholder="Coffee" onChange={(e) => { setName(e.target.value) }} />
                                <input type="text" placeholder="Coffee" onChange={(e) => { setName(e.target.value) }} />
                                <input type="text" placeholder="Coffee" onChange={(e) => { setName(e.target.value) }} />
                                <button onClick={() => { handleEditMenuItem() }}>Edit</button>
                            </form>

                        </div>
                        :
                        <div className="menu-item">
                            <Icon>coffee</Icon>
                            <div>Coffee</div>
                            <div>$1.00</div>
                            <div>Pipping hot coffee</div>
                            <label htmlFor="purchase-button">Quantity: </label>
                            <input type="number" onInput={e => setQuantity(e.target.value)} />
                            <button className="purchase-button" onClick={() => { handlePurchaseClick() }}>Purchase</button>
                        </div>
                    }

                </div>
            </Drawer>
        </div>
    );
}

export default Menu;