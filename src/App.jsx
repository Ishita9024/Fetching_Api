import React,{useState} from 'react';
import './App.css';
 
function App() {
  let [users, setUsers] = useState([])
  let fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let result = await response.json()
    // console.log(result)
    setUsers(result)
 
  }
  fetchData()
  return (
    <div className="App">
      <table>
        <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
              <th>Zip Code</th>
              <th>Phone</th>
              <th>Company Name</th>
      </tr>
   
        {users.map((item,index) => {
          return (          
                <tr>
                  <td >{item.name}</td>
               
                  <td >{item.username}</td>
               
                  <td>{item.email}</td>
               
                  <td >{item.address.city}</td>
               
                  <td >{item.address.zipcode}</td>
               
                  <td >{item.phone}</td>
               
                  <td >{item.company.name}</td>
                </tr>
          )
        })
        }
  </table>
    </div>
  );
}
 
export default App;
 


