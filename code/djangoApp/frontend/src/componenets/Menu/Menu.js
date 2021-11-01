import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useMemo, useState } from "react";
import { transferMoney, getUserById } from "../../services/services";
import { Drawer } from "@material-ui/core";
import Icon from '@mui/material/Icon';
import './Menu.css'
import { setUser } from "../../redux/userSlice";


const Menu = () => {
    const role = useSelector((state) => state.user.role);
    const user = useSelector((state) => state.user);
    const [toggleAll, setToggleAll] = useState(false);
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const [editable, setEditable] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [paymentError, setPaymentError] = useState(false);
    const dispatch = useDispatch();
    

    const handleIconClick = (itemId, edit = false) => {
        setToggleDrawer(true);
        setPaymentError(false);
        setEditable(edit)
    }
    const handlePurchaseClick = (price) => {
        // Add item to purchase history
        transferMoney(user.id, 8, price * quantity).then((isSuccess) => {
            console.log(isSuccess);
            if (!isSuccess) {
                setPaymentError(true);
                setQuantity(0);
                return
            }
            getUserById(user.id).then((user) => {
                console.log(user)
                dispatch(setUser(user));
            });
        });
        setToggleDrawer(false);
        setQuantity(0);

    }

    const handleAddMenuItemClick = () => {
        // Add menu item
    }
    const handleEditMenuItem = () => {
        // Add menu
    }
    const handleDeleteMenuItem = () => {
        // Delete menu item
    }
    const item = { id: 1 }
    return (
        <div className="menu-main">
            {role === "player" &&
                <div className="player-view">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    {paymentError && <div className="payment-error">Error: Insufficient funds</div>}
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
            }
            {(role === "owner" || role === "manager") &&
                <div className="manager-view">
                    {/* Edit drinks */}
                    <div className="menu-items">
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                        {/*  icon onclick should open a drawer to edit name, price, and icon */}
                        <div>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                            <span className="icon-span" onClick={() => { handleIconClick(item.id, true) }}><div className="inner-icon"><div><Icon>coffee</Icon></div><span>Coffee</span></div></span>
                        </div>
                        <div>
                            <button className="add-button" onClick={() => { handleAddMenuItemClick() }}>Add</button>
                        </div>
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
                                <div>
                                    <label htmlFor="name-input">Name</label>
                                    <input id="name-input" type="text" placeholder="Coffee" onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div>
                                    <label htmlFor="price-input">Price ($)</label>
                                    <input id="price-input" type="number" placeholder="1.00" onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div>
                                    <label htmlFor="description-input">Description</label>
                                    <input id="description-input" type="text" placeholder="Pipping hot coffee" onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <button className="edit-button drawer-button" onClick={() => { handleEditMenuItem() }}>Edit</button>
                                <button className="delete-button drawer-button" onClick={() => { handleDeleteMenuItem() }}>Delete</button>

                            </form>

                        </div>
                        :
                        <div className="menu-item">
                            <Icon>coffee</Icon>
                            <div>Coffee</div>
                            <div>$1.00</div>
                            <div>Pipping hot coffee</div>
                            <label htmlFor="purchase-button">Quantity: </label>
                            <input type="number" defaultValue="0" onInput={e => setQuantity(e.target.value)} />
                            <div>
                                <button className="purchase-button drawer-button" onClick={() => { handlePurchaseClick(1) }}>Purchase</button>
                            </div>
                        </div>
                    }

                </div>
            </Drawer>
        </div>
    );
}

export default Menu;