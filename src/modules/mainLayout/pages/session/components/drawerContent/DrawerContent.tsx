import React from "react";
import { useDispatch } from "react-redux";
import {
  Collapse,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { push } from "connected-react-router";
import { drawerItems } from "../../../../../../constants";
import { IDrawerItem } from "../../../../../../interfaces";
import useDrawerContentStyles from "./drawer.styles";

export interface IDrawerContentProps {
  onCloseDrawer: (open: boolean) => void;
}

export interface IItemProps extends IDrawerItem {
  level: number;
  handleClick?: (path?: string) => void;
  rightIcon?: string;
  classes: Record<"root" | "icon" | "container", string>;
}
export interface INestedItemProps extends IItemProps {}

const Item = ({
  name,
  icon,
  level,
  rightIcon,
  path,
  classes,
  handleClick,
}: IItemProps) => {
  const handleClickAction = () => {
    if (handleClick) handleClick(path);
  };

  return (
    <ListItem
      button
      onClick={handleClickAction}
      style={{
        paddingLeft: `${16 * level}px`,
      }}
    >
      <ListItemIcon>
        <Icon className={`${icon} ${classes.icon}`} />
      </ListItemIcon>
      <ListItemText primary={name} />
      {rightIcon && (
        <Icon className={rightIcon} style={{ fontSize: 20, width: 30 }} />
      )}
    </ListItem>
  );
};

const NestedItem = (props: INestedItemProps) => {
  const { children, level, classes, handleClick } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpenClick = () => setOpen(!open);

  const selectItem = (item: IDrawerItem) => {
    const itemProps = {
      ...item,
      level: level + 1,
      handleClick,
    };

    const Component = item.children ? NestedItem : Item;

    return <Component {...itemProps} {...{ classes }} />;
  };

  const nestedItemProps = {
    ...props,
    rightIcon: `${open ? "fas fa-chevron-up" : "fas fa-chevron-down"}`,
    handleClick: handleOpenClick,
  };

  return (
    <>
      <Item {...nestedItemProps} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children &&
            children.map((item, j) => <div key={j}>{selectItem(item)}</div>)}
        </List>
      </Collapse>
    </>
  );
};

const DrawerContent = ({ onCloseDrawer }: IDrawerContentProps) => {
  const classes = useDrawerContentStyles();
  const dispatch = useDispatch();
  const redirect = (path?: string) => {
    onCloseDrawer(false);
    if (path) dispatch(push(path));
  };

  const selectItem = (item: IDrawerItem) => {
    const Component = item.children ? NestedItem : Item;
    return (
      <Component {...item} level={1} handleClick={redirect} {...{ classes }} />
    );
  };

  return (
    <div className={classes.container}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {drawerItems.map((item, i) => (
          <div key={i}>
            {selectItem(item)}
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default DrawerContent;
