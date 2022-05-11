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
        const [initial, setInitial] = useState("");
        const [inputCheck, setInputCheck] = useState(false);
        const [newData, setNewData] = useState(data);
        const [count, setCount] = useState(0);
        
         const clickHandler = (e)=>{
           e.preventDefault();
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
            console.log('i am in');
            let newData1 = data.filter((curEle)=>{
            return curEle.freight>40;
            });
            setNewData(newData1);
          }
          if(initial == "Select * from orders where employeeId = 3;"){
            console.log('i am in');
            let newData1 = data.filter((curEle)=>{
            return curEle.employeeID = 3;
            });
            setNewData(newData1);
          }
          if(initial == "Select * from orders where orderedDate = '1996-07-10';"){
            console.log('i am in');
            let newData1 = data.filter((curEle)=>{
            return curEle.orderDate = '1996-07-10';
            });
            setNewData(newData1);
          }
          if(initial == "Select * from orders where shippedDate = '1996-07-23';"){
            console.log('i am in');
            let newData1 = data.filter((curEle)=>{
            return curEle.shippedDate = '1996-07-23';
            });
            setNewData(newData1);
          }
          if(initial == "Select * from orders where orderID = 10248;"){
            console.log('i am in');
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
        <a href="#box" onClick={()=>{setInitial("Select * from orders;")}}> 
                <span className="text">Select * from orders;</span>
        </a>
    </div>
    <div className="query"> <PlayCircleFilledOutlinedIcon className='img'/> <a href="#box"  onClick={()=>{setInitial("Select * from orders where freight > 40;")}}> <span className="text">Select * from orders where freight &gt 40;</span></a>
        
    </div>
    <div className="query"> <PlayCircleFilledOutlinedIcon className='img'/> <a href="#box"  onClick={()=>{setInitial("Select * from orders where employeeId = 3;")}}> <span className="text">Select * from orders where employeeId = 3;</span></a>
        
    </div>
    <div className="query">  <PlayCircleFilledOutlinedIcon className='img'/><a href="#box"  onClick={()=>{setInitial("Select * from orders where orderedDate = '1996-07-10';")}}> <span className="text">Select * from orders where orderedDate = '1996-07-10';</span></a>
        
    </div>
    <div className="query"> <PlayCircleFilledOutlinedIcon className='img'/><a href="#box"  onClick={()=>{setInitial("Select * from orders where shippedDate = '1996-07-23';")}}><span className="text">Select * from orders where shippedDate = '1996-07-23';</span></a>
        
    </div>
    <div className="query">  <PlayCircleFilledOutlinedIcon className='img'/><a href="#box"  onClick={()=>{setInitial("Select * from orders where orderID = 10248;")}}><span className="text">Select * from orders where orderID = 10248;</span></a>
        
    </div>
</div>
        <div id="box" className="box3">
            <div className="head"><h2>Execute SQL Query</h2></div>
            <div className="textfield"><input name="Query_area" id="Query_area" type="text" placeholder='Select Query from the list' value={initial}></input></div>
            <div className="run"> <a href="#" className='btn' onClick={clickHandler}> Run </a> </div>
            <div className="clear">  <a href="#" className='btn' onClick={handleClear}> Clear </a> </div>
            {inputCheck&&<div className='tableData'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 670 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{background:"#2980B9"}}>
            <TableCell sx={{color:"white", fontWeight: "bold", fontSize: 12, fontStyle:"italic", textTransform:"uppercase" }}>OrderId</TableCell>
            <TableCell sx={{color:"white", fontWeight: "bold", fontSize: 12, fontStyle:"italic", textTransform:"uppercase" }} align="right">customerID</TableCell>
            <TableCell sx={{color:"white", fontWeight: "bold", fontSize: 12, fontStyle:"italic", textTransform:"uppercase" }} align="right">employeeID</TableCell>
            <TableCell sx={{color:"white", fontWeight: "bold", fontSize: 12, fontStyle:"italic", textTransform:"uppercase" }} align="right">orderedDate</TableCell>
            <TableCell sx={{color:"white", fontWeight: "bold", fontSize: 12, fontStyle:"italic", textTransform:"uppercase" }} align="right">shippedDate</TableCell>
            <TableCell sx={{color:"white", fontWeight: "bold", fontSize: 12, fontStyle:"italic", textTransform:"uppercase" }} align="right">freight</TableCell>
            <TableCell sx={{color:"white", fontWeight: "bold", fontSize: 12, fontStyle:"italic", textTransform:"uppercase" }} align="right">shipName</TableCell>
            <TableCell sx={{color:"white", fontWeight: "bold", fontSize: 12, fontStyle:"italic", textTransform:"uppercase" }} align="right">shipAddress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newData.map((row) => (
            <TableRow
              key={row.orderID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontWeight: 550, fontSize: 12, fontStyle:"italic" }}>
                {row.orderID}
              </TableCell>
              <TableCell sx={{fontWeight: 550, fontSize: 12, fontStyle:"italic" }} align="right">{row.customerID}</TableCell>
              <TableCell sx={{fontWeight: 550, fontSize: 12, fontStyle:"italic" }} align="right">{row.employeeID}</TableCell>
              <TableCell sx={{fontWeight: 550, fontSize: 12, fontStyle:"italic" }} align="right">{row.orderDate}</TableCell>
              <TableCell sx={{fontWeight: 550, fontSize: 12, fontStyle:"italic" }} align="right">{row.shippedDate}</TableCell>
              <TableCell sx={{fontWeight: 550, fontSize: 12, fontStyle:"italic" }} align="right">{row.freight}</TableCell>
              <TableCell sx={{fontWeight: 550, fontSize: 12, fontStyle:"italic" }} align="right">{row.shipName}</TableCell>
              <TableCell sx={{fontWeight: 550, fontSize: 12, fontStyle:"italic" }} align="right">{row.shipAddress}</TableCell>
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