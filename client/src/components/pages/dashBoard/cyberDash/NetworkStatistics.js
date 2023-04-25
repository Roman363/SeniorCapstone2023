import * as React from 'react';
import axios from 'axios';
import { Container } from '@mui/system';

//const Data = '[{"name":"John","age":30,"city":"New York"},{"name":"Jane","age":25,"city":"Los Angeles"},{"name":"Bob","age":40,"city":"Chicago"}]';
//const jsonData = JSON.parse(Data);
let data = 0;
const jsonData = axios.get('http://127.0.0.1:5000/users')
  .then(response => data = response.data)
  .catch(error => console.error(error))


export default function NetworkStatistics() {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>Age</th>
          <th>city</th>
          <th></th>
          <th></th>
        </tr>
     </thead>
     <tbody>
      {data.map(item =>(
        <tr key = {item.id}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.emailId}</td>
        </tr>

      ))}
     </tbody>



    </table>
  );
}

//const jsonData = '[{"name":"John","age":30,"city":"New York"},{"name":"Jane","age":25,"city":"Los Angeles"},{"name":"Bob","age":40,"city":"Chicago"}]';

//using axios to retreive the data from out table
//const Data = axios.get('https://cloud.mongodb.com/v2/63e7ecdae91bc92f7b039373#/metrics/replicaSet/63e863ce80db0533d656da05/explorer/Naive/canvasmaps/find')
  //.then(response => console.log(response.data))
  //.catch(error => console.error(error))

//variable to store the canvas map data
//const mapData = JSON.parse(jsonData);

//create a table instead of using a dummy table
//const mapTable = document.createElement('table');

//const Headers = ['ip', 'address', 'hostname', 'type', 'status', 'label']
//const Headers = ['ip', 'address', 'hostname', 'type', 'status', 'label'];

//const rowHeader = document.createElement('tr');

//Headers.forEach(headerText => {
  //const header = document.createElement('th');
  //const nodetext = document.createTextNode(headerText);
  //header.appendChild(nodetext);
  //rowHeader.appendChild(header);

//});
//mapTable.appendChild(rowHeader);  

//mapData.forEach(obj => {
  //const row = document.createElement('tr');
  //Object.values(obj).forEach(value => {
    //const cell = document.createElement('td');
    //const nodetext2 = document.createTextNode(value);
    //cell.appendChild(nodetext2);
    //row.appendChild(cell);
  //});
  //mapTable.appendChild(row);


//});


//document.getElementById('table-container').appendChild(mapTable);


// name, calories, fat, carbs, protein 
//function createData(systemIP, associations, op, activeService, protocol, sentPackets, trafficAmount) {
  //return { systemIP, associations, op, activeService, protocol, sentPackets, trafficAmount };
//}

//const statistics = [
  //createData("157.143.80.158", "Open", "Windows", "Windows Bot Service", "VTP", "350", "Low"),
  //createData("157.143.80.158", "Open", "Windows", "Windows Bot Service", "VTP", "350", "Low"),
  //createData("157.143.80.158", "Open", "Windows", "Windows Bot Service", "VTP", "350", "Low"),
  //createData("157.143.80.158", "Open", "Windows", "Windows Bot Service", "VTP", "350", "Low"),
  //createData("157.143.80.158", "Open", "Windows", "Windows Bot Service", "VTP", "350", "Low"),
  //createData("157.143.80.158", "Open", "Windows", "Windows Bot Service", "VTP", "350", "Low"),
  //createData("157.143.80.158", "Open", "Windows", "Windows Bot Service", "VTP", "350", "Low"),

//];

//export default function NetworkStatistics() {
  //return (
    //<TableContainer component={Paper}>
      //<Table sx={{ minWidth: 650 }} aria-label="simple table">
        //<TableHead>
          //<TableRow>
            //<TableCell>SystemIP</TableCell>
            //<TableCell align="right">Associations</TableCell>
            //<TableCell align="right">OP&nbsp;(g)</TableCell>
            //<TableCell align="right">Active Service&nbsp;(g)</TableCell>
            //<TableCell align="right">Protocol&nbsp;(g)</TableCell>
            //<TableCell align="right">Sent Packets&nbsp;(g)</TableCell>
            //<TableCell align="right">Traffic Amount&nbsp;(g)</TableCell>
          //</TableRow>
        //</TableHead>
        //<TableBody>
          //{statistics.map((row) => (
            //<TableRow
              //key={row.name}
              //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            //>
              //<TableCell component="th" scope="row">
                //{row.systemIP}
              //</TableCell>
              //<TableCell align="right">{row.associations}</TableCell>
              //<TableCell align="right">{row.op}</TableCell>
              //<TableCell align="right">{row.activeService}</TableCell>
              //<TableCell align="right">{row.protocol}</TableCell>
              //<TableCell align="right">{row.sentPackets}</TableCell>
              //<TableCell align="right">{row.trafficAmount}</TableCell>
            //</TableRow>
          //))}
        //</TableBody>
      //</Table>
    //</TableContainer>
  //);
//}