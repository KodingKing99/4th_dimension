import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useMemo, useState } from "react";
import { transferMoney, getUserById } from "../../services/services";
import { addMenuItem, deleteMenuItem, changeMenuItem, getAllMenuItems, createNewTransaction } from "../../services/services";
import { Drawer } from "@material-ui/core";
import Icon from '@mui/material/Icon';
import './Menu.css'
import { setUser } from "../../redux/userSlice";


const Menu = () => {
    const user = useSelector((state) => state.user);
    const [toggleAll, setToggleAll] = useState(false);
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const [editable, setEditable] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [paymentError, setPaymentError] = useState(false);
    const [menu, setMenu] = useState([]);
    const [menuItem, setMenuItem] = useState({});

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();
    const [id, setId] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        getAllMenuItems().then(res => {
            setMenu(res);
        })
    }, [])

    const handleIconClick = (itemId, edit = false) => {
        setToggleDrawer(true);
        setPaymentError(false);
        setEditable(edit);
    }
    const handlePurchaseClick = (price,itemId) => {
        // Add item to purchase history
        console.log(itemId);
        setRecentPurchaseItems(itemId);
        transferMoney(user.id, 8, price * quantity).then((isSuccess) => {
            if (!isSuccess) {
                setPaymentError(true);
                setQuantity(0);
                return
            }
            createNewTransaction(user.id, 4, price * quantity);

            getUserById(user.id).then((user) => {
                dispatch(setUser(user));
            });

        });
        setToggleDrawer(false);
        setQuantity(0);
    }


    const setRecentPurchaseItems = (drinkId) => {
        if(localStorage.getItem('recentDrinkPurchases')){
            let recentDrinkPurchases = JSON.parse(localStorage.getItem('recentDrinkPurchases'));
            if(recentDrinkPurchases.length > 3){
                recentDrinkPurchases.shift();
            }
            recentDrinkPurchases.push(drinkId);
            localStorage.setItem('recentDrinkPurchases', JSON.stringify(recentDrinkPurchases));
        } else {
            let recentDrinkPurchases = [];
            recentDrinkPurchases.push(drinkId);
            localStorage.setItem('recentDrinkPurchases', JSON.stringify(recentDrinkPurchases));
        }
    }

    const handleAddMenuItemClick = () => {
        // Add menu item
        setMenuItem(null);
        handleIconClick(null, true);
    }
    const handleEditMenuItem = (id) => {
        // Add menu
        changeMenuItem(id, name, price, description, image)
        getAllMenuItems().then(res => {
            setMenu(res);
        })
        setToggleDrawer(false);
    }
    const handleDeleteMenuItem = (id) => {
        // Delete menu item
        deleteMenuItem(id)
        getAllMenuItems().then(res => {
            setMenu(res);
        })
        setToggleDrawer(false);
    }
    const handleSaveNewItem = () => {
        // Add menu item
        addMenuItem(name, price, description, image)
        handleCancel();
        getAllMenuItems().then(res => {
            setMenu(res);
        })
    }
    const handleCancel = () => {
        // Cancel
        setToggleDrawer(false);
        setEditable(false);
    }
    const item = { id: 1 }
    return (
        <div className="menu-main">
            {user.role === "player" &&
                <div className="player-view">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    {paymentError && <div className="payment-error">Error: Insufficient funds</div>}
                    <div className="recent-items">
                        {menu.slice(0, 3).map((item) => {
                            return (
                                <span className="icon-span" onClick={() => { handleIconClick(item.itemid); setMenuItem(item) }} key={item.itemid}><div className="inner-icon"><div><Icon>{item?.itemimage}</Icon></div><span>{item.itemname}</span></div></span>
                            )
                        })}
                    </div>
                    {toggleAll &&
                        <div className="all-items">

                            {menu.slice(3, menu.length).map((item) => {
                                return (
                                    <span className="icon-span" onClick={() => { handleIconClick(item.itemid); setMenuItem(item) }} key={item.itemid}><div className="inner-icon"><div><Icon>{item?.itemimage}</Icon></div><span>{item.itemname}</span></div></span>
                                )
                            })}
                        </div>
                    }
                    <div className="toggle-button">
                        <button onClick={() => setToggleAll(!toggleAll)}>View All</button>
                    </div>
                </div>
            }
            {(user.role === "owner" || user.role === "manager") &&
                <div className="manager-view">
                    {/* Edit drinks */}
                    <div className="menu-items">
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                        {/*  icon onclick should open a drawer to edit name, price, and icon */}
                        <div>
                            {menu.map((item) => {
                                return (
                                    <span className="icon-span" onClick={() => { handleIconClick(setId(item.itemid), true); setMenuItem(item) }} key={item.itemid}><div className="inner-icon"><div><Icon>{item?.itemimage}</Icon></div><span>{item.itemname}</span></div></span>
                                )
                            })}
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
                            <Icon>{menuItem?.itemimage}</Icon>
                            <form>
                                <div>
                                    <label htmlFor="image-input">Image</label>
                                    <input id="image-input" type="text" placeholder={menuItem?.itemimage} onChange={(e) => { setImage(e.target.value) }} />
                                </div>
                                <div>
                                    <label htmlFor="name-input">Name</label>
                                    <input id="name-input" type="text" placeholder={menuItem?.itemname} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div>
                                    <label htmlFor="price-input">Price ($)</label>
                                    <input id="price-input" type="number" placeholder={menuItem?.itemprice} step="0.01" onChange={(e) => { setPrice(e.target.value) }} />
                                </div>
                                <div>
                                    <label htmlFor="description-input">Description</label>
                                    <input id="description-input" type="text" placeholder={menuItem?.itemdescription} onChange={(e) => { setDescription(e.target.value) }} />
                                </div>
                                {menuItem ?
                                    <>
                                        <button className="edit-button drawer-button" onClick={() => { handleEditMenuItem(id) }}>Edit</button>
                                        <button className="delete-button drawer-button" onClick={() => { handleDeleteMenuItem(id) }}>Delete</button>
                                    </>
                                    :
                                    <>
                                        <button className="edit-button drawer-button" onClick={() => { handleSaveNewItem() }}>Save</button>
                                        <button className="delete-button drawer-button" onClick={() => { handleCancel() }}>Cancel</button>
                                    </>
                                }

                            </form>

                        </div>
                        :
                        <div className="menu-item">
                            <Icon>{menuItem?.itemimage}</Icon>
                            <div>{menuItem?.itemname}</div>
                            <div>${menuItem?.itemprice}</div>
                            <div>{menuItem?.itemdescription}</div>
                            <label htmlFor="purchase-button">Quantity: </label>
                            <input type="number" defaultValue="0" onInput={e => setQuantity(e.target.value)} />
                            <div>
                                <button className="purchase-button drawer-button" onClick={() => { handlePurchaseClick(menuItem?.itemprice,menuItem?.itemid) }}>Purchase</button>
                            </div>
                        </div>
                    }

                </div>
            </Drawer>
        </div>
    );
}

export default Menu;