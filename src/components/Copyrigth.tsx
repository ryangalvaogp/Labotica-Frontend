import { Link, Typography } from "@material-ui/core";

export function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Labótica - Instituto Federal do Pará Paragominas <br/>
        </Link>{' '}
        {new Date().getFullYear()}
        {''}
      </Typography>
    );
  };