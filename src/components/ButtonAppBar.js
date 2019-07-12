import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import LanguageIcon from '@material-ui/icons/Language';
import { getText } from './HeaderText';
import GitHubIcon from './GitHub';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
}));

const getModalStyle = () => {
  const top = 50;
  const left = 50;

return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const ButtonAppBar = (props) => {

  // text
  const message = getText(props.lang.current);

  // Menu of Language 
  const setAuth = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const menuItems = props.lang.select.map((val,index) => <MenuItem key={index} value={val} onClick={e=>click(val)}>{val}</MenuItem> )
  
  // Modal of Cart
  const modal_message = props.totalQuantity === 0 ? 
  <p id="simple-modal-description">
    {message.empty}
  </p>
    :
  <p id="simple-modal-description">
    {props.totalQuantity}{message.quantity} {props.total_price}{message.yen}
  </p>
  const [modal_open, modal_setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);




  const click = val => {
    props.changeLang(val);
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleModalOpen = () => {
    modal_setOpen(true);
  };

  const handleModalClose = () => {
    modal_setOpen(false);
  };


  return (
    <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            { message.title }
          </Typography>

          <IconButton 
            aria-label="shopping-cart"
            color="inherit"
            onClick={handleModalOpen}
          >
            <Badge badgeContent={props.totalQuantity} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={modal_open}
               onClose={handleModalClose}
            >
            
            <div style={modalStyle} className={classes.paper}>
          <h2 id="modal-title">{message.your_cart}</h2>
          
          {modal_message}
          
          
        </div>


            </Modal>


          <IconButton
                aria-label="language"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
          <LanguageIcon  />
          </IconButton>

          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                value={props.lang.current}
              >
              { menuItems }
              </Menu>

              <IconButton
                color="inherit"
                href="https://github.com/JunyaUkyou/Fruits-react-shopping-cart"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <GitHubIcon />
              </IconButton>

              
                
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar