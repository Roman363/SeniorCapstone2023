import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// name, calories, fat, carbs, protein 
function createData(systemIP, associations, op, activeService, protocol, sentPackets, trafficAmount) {
  return { systemIP, associations, op, activeService, protocol, sentPackets, trafficAmount };
}

const statistics = [
  createData("157.143.80.158", "Open", "Windows", "Windows Bot Service", "VTP", "350", "Low")
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SystemIP</TableCell>
            <TableCell align="right">Associations</TableCell>
            <TableCell align="right">OP&nbsp;(g)</TableCell>
            <TableCell align="right">Active Service&nbsp;(g)</TableCell>
            <TableCell align="right">Protocol&nbsp;(g)</TableCell>
            <TableCell align="right">Sent Packets&nbsp;(g)</TableCell>
            <TableCell align="right">Traffic Amount&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.systemIP}
              </TableCell>
              <TableCell align="right">{row.associations}</TableCell>
              <TableCell align="right">{row.op}</TableCell>
              <TableCell align="right">{row.activeService}</TableCell>
              <TableCell align="right">{row.protocol}</TableCell>
              <TableCell align="right">{row.sentPackets}</TableCell>
              <TableCell align="right">{row.trafficAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}