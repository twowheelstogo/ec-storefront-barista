import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Whatsapp as WhatsAppIcon,
  Twitter,
} from "mdi-material-ui";

const styles = (theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#000000",
    color: "#EA6D23",
  },
  main: {
    flex: "1 1 auto",
    // maxWidth: theme.layout.mainContentMaxWidth,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    paddingBottom: "100px"
  },
  article: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
});

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    viewer: PropTypes.object,
  };

  static defaultProps = {
    classes: {},
  };

  render() {
    const {
      classes,
      children,
      viewer,
      shop,
      components: { NavigationHeader },
      components: { CustomFooter },
      withHero
    } = this.props;

    const Logo = {
      urlLogo:
        "https://firebasestorage.googleapis.com/v0/b/twg-vehicle-dashboard.appspot.com/o/Iconos%2Fbarista.png?alt=media&token=14f371da-1a82-4de9-b443-6f205d6b81ae",
      WidthDesktop: "155.4px",
      WidthMobile: "96px",
      HeightDesktop: "56px",
      HeightMobile: "38px",
    };

    const Descripcion = {
      urlLogo: Logo.urlLogo,
      Mensaje1: "Contáctenos",
      Mensaje2: "Encuétrenos",
      ContenidoMensaje1: [
        "+502 41427517",
        "20 calle 24-26 bodega 15 zona 10 Ofibodegas Pradera",
        "Lunes- Sábado: 8am - 8pm",
        "Domingo: 10am - 8pm",
      ],
      ContenidoMensaje2: [
        { Titulo: "Sobre Nosotros", ruta: "/sobre" },
        { Titulo: "Extra", ruta: "/sobre" },
      ],
      NombreEmpresa: "Cafe Barista",
      RedesSociales: [
        { Icono: <InstagramIcon />, ruta: "https://www.instagram.com/baristalovers/" },
        { Icono: <FacebookIcon />, ruta: "https://www.facebook.com/CafeBaristaLovers/" },
      ],
      Colores: { Fondo: "#000000", Letra: "#EA6D23" },
    };

    return (
      <React.Fragment>
        <div className={classes.root}>
          {/* <Header shop={shop} viewer={viewer} /> */}

          <NavigationHeader
            withHero={withHero}
            Logo={Logo}
            shop={shop}
            viewer={viewer}
            AppColor={"#000000"}
            ColoresBusqueda={["#000000", "#DCDCDC"]}
            ColorIcono={"#000000"}
            MetodoBusqueda={(Busqueda) => {
              alert(Busqueda);
            }}
            ImageCoverUrl={
              "https://firebasestorage.googleapis.com/v0/b/twg-vehicle-dashboard.appspot.com/o/Iconos%2FCafeBaristaInicio.jpeg?alt=media&token=df1df06b-3c1b-43e6-8e96-12d494fdc4fd"
            }
            MessageCover={"SOMOS CAFE BARISTA"}
            ModalMenuColores={{ Fondo: "#000000", Letra: "#EA6D23", Icono: "#EA6D23" }}
          />

          <main className={classes.main}>
            <article className={classes.article}>{children}</article>
          </main>
          <CustomFooter Descripcion={Descripcion} />
        </div>
      </React.Fragment>
    );
  }
}

export default withComponents(withStyles(styles)(Layout));