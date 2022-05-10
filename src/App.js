import React, { useEffect, useState } from 'react';
import './App.css';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from './data.json';



function App() {
        const [initial,setInitial] = useState("");
        const [inputCheck,setInputCheck] = useState(false);
        const [newData, setNewData] = useState(data);
        const [count, setCount] = useState(0);
        
         const clickHandler = ()=>{
           if(initial != "")
           {
            setInputCheck(true)
            setCount(count+1)
           }
           else{
             alert("Please Select A Query");
           }
         }

        const handleClear = () => {
                return ( 
                  setInitial(""),
                setInputCheck(false),
                setCount(0)
                );
        }

        useEffect(()=>{
          if(initial == 'Select * from orders where freight > 40;'){
            let newData1 = data.filter((curEle)=>{
            return curEle.freight>40;
            });
            setNewData(newData1);
          }
          if(initial == "Select * from orders where employeeId = 3;"){
            let newData1 = data.filter((curEle)=>{
            return curEle.employeeID = 3;
            });
            setNewData(newData1);
          }
          if(initial == "Select * from orders where orderedDate = '1996-07-10';"){
            let newData1 = data.filter((curEle)=>{
            return curEle.orderDate = '1996-07-10';
            });
            setNewData(newData1);
          }
          if(initial == "Select * from orders where shippedDate = '1996-07-23';"){
            let newData1 = data.filter((curEle)=>{
            return curEle.shippedDate = '1996-07-23';
            });
            setNewData(newData1);
          }
          if(initial == "Select * from orders where orderID = 10248;"){
            let newData1 = data.filter((curEle)=>{
            return curEle.orderID = 10248;
            });
            setNewData(newData1);
          }
        },[count])

  return (
    <div className="App">
          <main>
        <div className="box1"><h1>SQL</h1></div>
        <div className="box2">
    <div className="query"><span className="text1"> Choose a query from the list below:-</span>
    </div>
    <div className="query"> <PlayCircleFilledOutlinedIcon className='img'/> 
        <a href="#" onClick={()=>{setInitial("Select * from orders;")}}> 
                <span className="text">Select * from orders;</span>
        </a>
    </div>
    <div className="query"> <PlayCircleFilledOutlinedIcon className='img'/> <a href="#"  onClick={()=>{setInitial("Select * from orders where freight > 40;")}}> <span className="text">Select * from orders where freight `{'>'}` 40;</span></a>
        
    </div>
    <div className="query"> <PlayCircleFilledOutlinedIcon className='img'/> <a href="#"  onClick={()=>{setInitial("Select * from orders where employeeId = 3;")}}> <span className="text">Select * from orders where employeeId = 3;</span></a>
        
    </div>
    <div className="query">  <PlayCircleFilledOutlinedIcon className='img'/><a href="#"  onClick={()=>{setInitial("Select * from orders where orderedDate = '1996-07-10';")}}> <span className="text">Select * from orders where orderedDate = '1996-07-10';</span></a>
        
    </div>
    <div className="query"> <PlayCircleFilledOutlinedIcon className='img'/><a href="#"  onClick={()=>{setInitial("Select * from orders where shippedDate = '1996-07-23';")}}><span className="text">Select * from orders where shippedDate = '1996-07-23';</span></a>
        
    </div>
    <div className="query">  <PlayCircleFilledOutlinedIcon className='img'/><a href="#"  onClick={()=>{setInitial("Select * from orders where orderID = 10248;")}}><span className="text">Select * from orders where orderID = 10248;</span></a>
        
    </div>
</div>
        <div className="box3">
            <div className="head"><h2>Execute SQL Query</h2></div>
            <div className="textfield"><input name="Query_area" id="Query_area" type="text" value={initial}></input></div>
            <div className="run"> <a href="#" className='btn' onClick={clickHandler}> Run </a> </div>
            <div className="clear">  <a href="#" className='btn' onClick={handleClear}> Clear </a> </div>
            {inputCheck&&<div className='tableData'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 670 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>OrderId</TableCell>
            <TableCell align="right">customerID</TableCell>
            <TableCell align="right">employeeID</TableCell>
            <TableCell align="right">orderedDate</TableCell>
            <TableCell align="right">shippedDate</TableCell>
            <TableCell align="right">freight</TableCell>
            <TableCell align="right">shipName</TableCell>
            <TableCell align="right">shipAddress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newData.map((row) => (
            <TableRow
              key={row.orderID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.orderID}
              </TableCell>
              <TableCell align="right">{row.customerID}</TableCell>
              <TableCell align="right">{row.employeeID}</TableCell>
              <TableCell align="right">{row.orderDate}</TableCell>
              <TableCell align="right">{row.shippedDate}</TableCell>
              <TableCell align="right">{row.freight}</TableCell>
              <TableCell align="right">{row.shipName}</TableCell>
              <TableCell align="right">{row.shipAddress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    }
        </div>
    </main>
    </div>
  );
}

export default App;
