import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useDrawerContentStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 300,
    },
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    icon: { fontSize: 20, width: 30 },
  })
);

export default useDrawerContentStyles;
