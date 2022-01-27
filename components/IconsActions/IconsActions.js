
import React, { Component } from "react";
import { TextField, InputAdornment, Grid } from "@material-ui/core";
import { AccountCircleOutline } from "mdi-material-ui";
import { ShoppingOutline } from "mdi-material-ui";
import { withComponents } from "@reactioncommerce/components-context";
import AccountDropdown from "components/AccountDropdown";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import inject from "hocs/inject";
import MiniCart from "components/MiniCart";

const styles = (theme) => ({
  root: {
    ["@media (min-width:1280px)"]: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "8%",
    },
    ["@media (max-width:1279px) and (min-width: 946px)"]: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "12%",
    },
    ["@media (max-width:945px) and (min-width: 600px)"]: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "15%",
    },
    ["@media (max-width:599px)"]: {
      marginTop: "10%",
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  Usuario: {
    ["@media (min-width:600px)"]: {
      display: "flex",
      justifyContent: "flex-end",
    },
    ["@media (max-width:599px) and (min-width:312px)"]: {
      display: "flex",
      justifyContent: "flex-end",
    },
    ["@media (max-width:311px)"]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  Compra: {
    ["@media (max-width:599px)"]: {
      display: "flex",
      justifyContent: "flex-start",
    },
    ["@media (max-width:1280px) and (min-width: 600px)"]: {
      display: "flex",
      justifyContent: "center",
    },
    ["@media (min-width:1281px)"]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
});

class IconsActions extends Component {
  static propTypes = {
    classes: PropTypes.object,
    cart: PropTypes.object,
  };

  static defaultProps = {
    classes: {},
  };

  render() {
    const { classes, width, Letra, cart } = this.props;
    const Validar = (tamaño) => {
      console.log(tamaño)
      let nuevo = 4;
      switch (tamaño) {
        case "xs":
          nuevo = 1;
          break;
        case "xl":
          nuevo = 3;
          break;
        default:
          nuevo = 4;
      }
      return nuevo;
    };
    
    return (
      <Grid container className={classes.root} spacing={Validar(width)}>
        <Grid item xs={6} md={2} lg={2} className={classes.Usuario}>
          <AccountDropdown Letra={Letra} />
        </Grid>
        <Grid item xs={6} md={2} lg={2} className={classes.Compra}>
          <MiniCart Letra={Letra} {...cart} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(inject("uiStore")(IconsActions));