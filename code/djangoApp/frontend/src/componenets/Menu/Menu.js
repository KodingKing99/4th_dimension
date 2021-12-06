import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useMemo, useState } from "react";
import { transferMoney, getUserById } from "../../services/services";
import { addMenuItem, deleteMenuItem, changeMenuItem, getAllMenuItems, createNewTransaction } from "../../services/services";
import { Drawer } from "@material-ui/core";
import Icon from '@mui/material/Icon';
import './Menu.css'
import { setUser } from "../../redux/userSlice";

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

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
    const [imageToSave, setImageToSave] = useState();
    const [description, setDescription] = useState();
    const [id, setId] = useState();

    const[imageButtonsSelected, setImageButtonsSelected] = useState([]);


    const dispatch = useDispatch();

    useEffect(() => {
        getAllMenuItems().then(res => {
            setMenu(res);
        })
    }, [])

    const handleIconClick = (item, update = false,edit=false) => {
        if(update){
            setName(item.itemname)
            setPrice(item.itemprice)
            setImageToSave(item.itemimage)
            setDescription(item.itemdescription)
        }
        setToggleDrawer(true);
        setPaymentError(false);
        setEditable(edit);
    }
    const handlePurchaseClick = (price,itemId) => {
        // Add item to purchase history
        setRecentPurchaseItems(itemId);
        transferMoney(user.id, 8, price * quantity).then((isSuccess) => {
            if (!isSuccess) {
                setPaymentError(true);
                setQuantity(0);
                return
            }
            createNewTransaction(user.id, 4, price * quantity,itemId);

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
        handleIconClick(null,false, true);
    }
    const handleEditMenuItem = (id) => {
        // Add menu
        changeMenuItem(id, name, price, description, imageToSave).then((res) => {
            getAllMenuItems().then(res => {
                setMenu(res);
            })
            setToggleDrawer(false);
        });
       
    }
    const handleDeleteMenuItem = (id) => {
        // Delete menu item
        deleteMenuItem(id).then(res => {
            getAllMenuItems().then(res => {
                setMenu(res);
            })
        });

        setToggleDrawer(false);
    }
    const handleSaveNewItem = () => {
        // Add menu item
        addMenuItem(name, price, description, imageToSave).then((res) => {
            handleCancel();
            getAllMenuItems().then(res => {
                setMenu(res);
            })
        });

    }
    const handleCancel = () => {
        // Cancel
        setToggleDrawer(false);
        setEditable(false);
    }

    const handleSelectImageChange = (imageSelected,indexToDisable) => {
        setImageToSave(imageSelected);
        let tempArray = [0,0,0,0,0,0,0,0]
        tempArray[indexToDisable] = 1;
        setImageButtonsSelected(tempArray);
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
                                    <span className="icon-span" onClick={() => { handleIconClick(item, true,true); setMenuItem(item); setId(item.itemid);}} key={item.itemid}><div className="inner-icon"><div><Icon>{item?.itemimage}</Icon></div><span>{item.itemname}</span></div></span>
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
                                <div >                                    <label htmlFor="image-input">Select Image for Drink</label>


                                </div>
                                <div>
                                

                                    <ButtonGroup aria-label="outlined button group">
                                    <Button disabled={imageButtonsSelected[0]} variant="contained" color="success" onClick={() =>{handleSelectImageChange("local_cafe",0)}} >
                                        <Icon>local_cafe</Icon>
                                    </Button>
                                    <Button disabled={imageButtonsSelected[1]} variant="contained" color="success" onClick={() =>{handleSelectImageChange("coffee",1)}}>
                                        <Icon>coffee</Icon>
                                    </Button>
                                    <Button disabled={imageButtonsSelected[2]} variant="contained" color="success" onClick={() =>{handleSelectImageChange("local_drink",2)}}>
                                        <Icon>local_drink</Icon>
                                    </Button>
                                    <Button disabled={imageButtonsSelected[3]} variant="contained" color="success" onClick={() =>{handleSelectImageChange("local_bar",3)}}>
                                        <Icon>local_bar</Icon>
                                    </Button>
                                    <Button disabled={imageButtonsSelected[4]} variant="contained" color="success" onClick={() =>{handleSelectImageChange("sports_bar",4)}}>
                                        <Icon>sports_bar</Icon>
                                    </Button>
                                    <Button disabled={imageButtonsSelected[5]} variant="contained" color="success" onClick={() =>{handleSelectImageChange("emoji_food_beverage",5)}}>
                                        <Icon>emoji_food_beverage</Icon>
                                    </Button>
                                    <Button disabled={imageButtonsSelected[6]} variant="contained" color="success" onClick={() =>{handleSelectImageChange("wine_bar",6)}}>
                                        <Icon>wine_bar</Icon>
                                    </Button>
                                    <Button disabled={imageButtonsSelected[7]} variant="contained" color="success" onClick={() =>{handleSelectImageChange("coffee_maker",7)}}>
                                        <Icon>coffee_maker</Icon>
                                    </Button>
                            </ButtonGroup>

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