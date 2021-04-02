import { Fragment } from 'react';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event: any) {
  event.preventDefault();
};

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Orders() {
  const classes = useStyles();
  return (
    <Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </Fragment>
  );
};