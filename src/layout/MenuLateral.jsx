
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// ListItem
import List          from '@material-ui/core/List';
import ListItem      from '@material-ui/core/ListItem';
import ListItemIcon  from '@material-ui/core/ListItemIcon';
import ListItemText  from '@material-ui/core/ListItemText';
import Divider       from '@material-ui/core/Divider';

// Ícones
import DashboardIcon     from '@material-ui/icons/Dashboard';
import ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import PersonIcon        from '@material-ui/icons/Person';
import CardGiftcardIcon  from '@material-ui/icons/CardGiftcard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon          from '@material-ui/icons/List';
import AddIcon           from '@material-ui/icons/Add';
import Collapse          from '@material-ui/core/Collapse';
import ExpandLess        from '@material-ui/icons/ExpandLess';
import ExpandMore        from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


export default function MenuLateral() {

  const classes = useStyles();

  const [openVendas,   setOpenVendas  ] = React.useState(false);
  const [openClientes, setOpenClientes] = React.useState(false);
  const [openProdutos, setOpenProdutos] = React.useState(false);
  const [openUsuarios, setOpenUsuarios] = React.useState(false);

  const handleClickVendas   = () => setOpenVendas   (!openVendas);
  const handleClickClientes = () => setOpenClientes (!openClientes);
  const handleClickProdutos = () => setOpenProdutos (!openProdutos);
  const handleClickUsuarios = () => setOpenUsuarios (!openUsuarios);

  return (

    <List>
      {/* CAIXA */}
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Caixa" />
      </ListItem>
      <Divider />

      {/* VENDAS */}
      <ListItem button onClick={handleClickVendas}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Vendas" />
        {openVendas ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openVendas} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider />
          <ListItem button className={classes.nested} component={Link} to="/vendas">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="vendas" />
          </ListItem>

          <Divider />
          <ListItem button className={classes.nested} component={Link} to="/venda-cadastro">
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="venda nova" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />

      {/* CLIENTES */}
      <ListItem button onClick={handleClickClientes}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
        {openClientes ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openClientes} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider />
          <ListItem button className={classes.nested} component={Link} to="/clientes">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="clientes" />
          </ListItem>

          <Divider />
          <ListItem button className={classes.nested} component={Link} to="/cliente-cadastro">
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="cliente novo" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />

      {/* PRODUTOS */}
      <ListItem button onClick={handleClickProdutos}>
        <ListItemIcon>
          <CardGiftcardIcon />
        </ListItemIcon>
        <ListItemText primary="Produtos" />
        {openProdutos ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openProdutos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider />
          <ListItem button className={classes.nested} component={Link} to="/produtos">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="produtos" />
          </ListItem>

          <Divider />
          <ListItem button className={classes.nested} component={Link} to="/produto-cadastro">
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="produto novo" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />

      {/* USUÁRIOS */}
      <ListItem button onClick={handleClickUsuarios}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuários" />
        {openUsuarios ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openUsuarios} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider />
          <ListItem button className={classes.nested} component={Link} to="/usuarios">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="usuários" />
          </ListItem>

          <Divider />
          <ListItem button className={classes.nested} component={Link} to="/usuario-cadastro">
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="usuário novo" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />
    </List>
  );
};