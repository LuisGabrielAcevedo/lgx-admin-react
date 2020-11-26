import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useAppBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export default useAppBarStyles;
