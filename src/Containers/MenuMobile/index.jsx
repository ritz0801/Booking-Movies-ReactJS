import React, { useState } from "react";
import { connect } from "react-redux";
import { toggle } from "../../Actions/Dialog";
import { logout } from "../../Actions/User";
import _ from "lodash";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import AnchorLink from "../../Components/AnchorLink";

import "./style.scss";
import imgMenu from "../../Assets/img/menu-mobile.png";
import userDefault from "../../Assets/img/user-default.png";

const MenuMobile = props => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openList, setOpenList] = useState(false);
  const { user, toggleDialog, logout } = props;

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const toggleList = () => {
    setOpenList(!openList);
  };
  return (
    <div className="menu-mobile">
      <div className="toggle-drawer" onClick={toggleMenu}>
        {" "}
        <img src={imgMenu} alt="hinh menu" />
      </div>
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={toggleMenu}
        className="drawer-menu-mobile"
      >
        {_.isEmpty(user) ? (
          <div
            className="login"
            onClick={() => {
              toggleMenu();
              const delayOpenDialog = _.debounce(() => toggleDialog(), 300);
              delayOpenDialog();
            }}
          >
            <img src={userDefault} alt="hinh user" /> <p>Đăng nhập</p>
          </div>
        ) : (
          <React.Fragment>
            <List className="user-wrap">
              <ListItem button onClick={toggleList} className="user-toggle">
                <div className="user-toggle-item">
                  <img src={user.picture || userDefault} alt="hinh user" />
                  <p>{user.name || user.hoTen}</p>
                </div>
                {openList ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={openList}
                timeout="auto"
                unmountOnExit
                className="user-dropdown-wrap"
              >
                <List
                  component="div"
                  disablePadding
                  className="user-dropdown-content"
                >
                  <ListItem button>Thông tin cá nhân</ListItem>
                  <ListItem
                    button
                    onClick={() => {
                      logout();
                      setOpenList(false);
                    }}
                  >
                    Đăng xuất
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </React.Fragment>
        )}
        <AnchorLink mobile={true} />
      </Drawer>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const napDispatchToProps = dispatch => {
  return {
    toggleDialog: () => dispatch(toggle()),
    logout: () => dispatch(logout())
  };
};
export default connect(mapStateToProps, napDispatchToProps)(MenuMobile);
