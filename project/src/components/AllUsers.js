import { Table, TableBody, TableCell, TableHead, TableRow,styled, Button } from '@mui/material'
import { useEffect,useState } from 'react';
import { getUsers } from '../backend/api';
import { Link } from 'react-router-dom';
import { deleteUser } from '../backend/api';

const styledTable =styled(Table)`
width: 90%;
margin: 50px auto 0 auto ;
`
const Thead=styled(TableRow)`
background: #000000;
& > th{
  color:#fff;
  font-size:20px;
}
`
const Tbody=styled(TableRow)`
& > td{
  font-size: 20px;
}
`

const AllUsers=() =>{

  const [users,setUsers]=useState([]);

  useEffect(()=>{
    getAllUsers();
  },[]);
  const getAllUsers=async()=>{
    let response= await getUsers();
    console.log(response.data.teams);
    setUsers(response.data.teams);
  
   
  }
  const deleteUserDetails=async(id)=>{
    await deleteUser(id);
    getAllUsers();
  }
  return (
    <div>
     
      <br/>
      <h1 >MY BOOKINGS</h1>
      <h2>Your Order Request Is Placed</h2>
       <styledTable>
        <TableHead>
          <Thead>
            <TableCell>Brand</TableCell>
            <TableCell>Car Name</TableCell>
            <TableCell>Model Number</TableCell>
            <TableCell>Petrol/diesel</TableCell>
            <TableCell>Booking Date</TableCell>
            <TableCell>Expected Date Of Delivery</TableCell>
            <TableCell>Rental/Buy</TableCell>          
          </Thead>
        </TableHead>
        <TableBody>      
          {
            users.map(user=>(
              <Tbody key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.TeamNumber}</TableCell>
                <TableCell>{user.subj}</TableCell>
                <TableCell>{user.pname}</TableCell>
                <TableCell>{user.startdate}</TableCell>
                <TableCell>{user.status1}</TableCell>
                <TableCell>
                  {/* <Button variant='contained'style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> */}
                  <Button variant='contained' color="secondary"onClick={()=>deleteUserDetails(user._id)} >Cancel Order</Button> 
                </TableCell>
              </Tbody>
            ))
          }
          
        </TableBody>
       </styledTable>
    </div>
  )
}

export default AllUsers