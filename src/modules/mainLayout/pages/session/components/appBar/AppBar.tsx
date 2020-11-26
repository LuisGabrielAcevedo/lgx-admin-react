import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useAppBarStyles from "./appBar.styles";

interface IMainAppBarProps {
  onOpenDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const MainAppBar = ({ onOpenDrawer }: IMainAppBarProps) => {
  const classes = useAppBarStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            component="span"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Lgx React Admin</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
};

export default MainAppBar;
