import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';
import currencyFormat from '../../utils/currencyFormat';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root} >
      <CardHeader title="ExpenseTracker Pro" subheader="By James Jerkowski" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance {currencyFormat(balance)}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
        <CardContent className={classes.cardContent}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </CardContent>
      </CardContent>
    </Card>
  )
}

export default Main;
