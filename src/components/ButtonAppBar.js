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
}));


const ButtonAppBar = (props) => {
  const setAuth = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const message = getText(props.lang.current);


  const menuItems = props.lang.select.map((val,index) => <MenuItem key={index} value={val} onClick={e=>click(val)}>{val}</MenuItem> )
  


  const classes = useStyles();


  const click = val => {
    props.changeLang(val);
    handleClose();
  }
  function handleChange(event) {
    setAuth(event.target.checked);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

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
          >
            <Badge badgeContent={props.totalQuantity} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

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
              >
                  <GitHubIcon />
              </IconButton>



        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar