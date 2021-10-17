import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { styles } from '../styles/styles'

const ChartTable = ({ classes, posts }) => {
  const { root, table, headerRow } = classes;

  console.log(`posts`, posts)

  return (
    <Paper className={root}>
      <Table className={table}>
        <TableHead>
          <TableRow>
            <TableCell align="center" className={headerRow}>Person ID</TableCell>
            <TableCell align="center" className={headerRow}>Gender</TableCell>
            <TableCell align="cen" className={headerRow}>Race</TableCell>
            <TableCell align="centerter" className={headerRow}>Birth</TableCell>
            <TableCell align="center" className={headerRow}>Age</TableCell>
            <TableCell align="center" className={headerRow}>Ethnicity</TableCell>
            <TableCell align="center" className={headerRow}>Is Death</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts?.map((post, idx) => (
            <TableRow key={idx}>
              <TableCell align="center" component="th" scope="post">
                {post.personID}
              </TableCell>
              <TableCell align="center">{post.gender}</TableCell>
              <TableCell align="center">{post.birthDatetime}</TableCell>
              <TableCell align="center">{post.age}</TableCell>
              <TableCell align="center">{post.race}</TableCell>
              <TableCell align="center">{post.ethnicity}</TableCell>
              <TableCell align="center">{post.isDeath ? "O" : "X"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(ChartTable);