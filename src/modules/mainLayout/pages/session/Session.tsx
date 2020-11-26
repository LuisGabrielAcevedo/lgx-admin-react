import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import MainAppBar from "./components/appBar/AppBar";
import DrawerContent from "./components/drawerContent/DrawerContent";
import ScrollTop from "./components/scrollTop/ScrollTop";
import sessionRoutes from "./session.routes";
import { Switch, Route } from "react-router-dom";

interface ISessionProps {
  window?: () => Window;
}

export default function Session(props: ISessionProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    )
      return;

    setDrawerOpen(open);
  };

  return (
    <React.Fragment>
      <MainAppBar onOpenDrawer={toggleDrawer} />
      <Container>
        <Box my={2}>
          <React.Fragment>
            <Switch>
              {sessionRoutes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
            </Switch>
          </React.Fragment>
        </Box>
      </Container>
      <ScrollTop {...props} />
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerContent onCloseDrawer={setDrawerOpen} />
      </Drawer>
    </React.Fragment>
  );
}
