import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useMemo, useState } from "react";
import { transferMoney, getUserById } from "../../services/services";
import { addMenuItem, deleteMenuItem, changeMenuItem, getAllMenuItems } from "../../services/services";
import { Drawer } from "@material-ui/core";
import Icon from '@mui/material/Icon';
import './Menu.css'
import { setUser } from "../../redux/userSlice";
import { setMenu } from "../../redux/dataSlice";


const Menu = () => {
    const user = useSelector((state) => state.user);
    const [toggleAll, setToggleAll] = useState(false);
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const [editable, setEditable] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [paymentError, setPaymentError] = useState(false);
    const [menu, setMenu] = useState([]);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0.0);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllMenuItems().then(res => {
            setMenu(res);
        })
    }, [])

    const handleIconClick = (itemId, edit = false) => {
        setToggleDrawer(true);
        setPaymentError(false);
        setEditable(edit)
    }
    const handlePurchaseClick = (price) => {
        // Add item to purchase history
        transferMoney(user.id, 8, price * quantity).then((isSuccess) => {
            if (!isSuccess) {
                setPaymentError(true);
                setQuantity(0);
                return
            }
            getUserById(user.id).then((user) => {
                dispatch(setUser(user));
            });
        });
        setToggleDrawer(false);
        setQuantity(0);

    }

    const handleAddMenuItemClick = () => {
        // Add menu item
        addMenuItem(name, price, description, image)
    }
    const handleEditMenuItem = () => {
        // Add menu
        changeMenuItem(name, price, description)
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
                                <span className="icon-span" onClick={() => { handleIconClick(item.id) }} key={item.itemid}><div className="inner-icon"><div><Icon>{item.itemimage}</Icon></div><span>{item.itemname}</span></div></span>
                            )
                        })}
                    </div>

                    {toggleAll &&
                        <div className="all-items">

                            {menu.slice(3, menu.length).map((item) => {
                                return (
                                    <span className="icon-span" onClick={() => { handleIconClick(item.id) }} key={item.itemid}><div className="inner-icon"><div><Icon>{item.itemimage}</Icon></div><span>{item.itemname}</span></div></span>
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
                                    <span className="icon-span" onClick={() => { handleIconClick(setId(item.itemid), true) }} key={item.itemid}><div className="inner-icon"><div><Icon>{item.itemimage}</Icon></div><span>{item.itemname}</span></div></span>
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
                            <Icon>coffee</Icon>
                            <form>
                                <div>
                                    <label htmlFor="name-input">Name</label>
                                    <input id="name-input" type="text" placeholder="Coffee" onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div>
                                    <label htmlFor="price-input">Price ($)</label>
                                    <input id="price-input" type="number" placeholder="1.00" onChange={(e) => { setPrice(e.target.value) }} />
                                </div>
                                <div>
                                    <label htmlFor="description-input">Description</label>
                                    <input id="description-input" type="text" placeholder="Pipping hot coffee" onChange={(e) => { setDescription(e.target.value) }} />
                                </div>
                                <button className="edit-button drawer-button" onClick={() => { handleEditMenuItem() }}>Edit</button>
                                <button className="delete-button drawer-button" onClick={() => { handleDeleteMenuItem(id) }}>Delete</button>

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