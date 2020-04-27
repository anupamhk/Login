import React from 'react';
import axios from 'axios';
import './App.css';
function App() {
  return (
    <div className="container">
      <form onSubmit={(e) => login(e)}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
  </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
            
              <button type="submit" class="btn btn-primary">Submit</button>
</form>
          </div>
  );
}

function login(e)
{
  e.preventDefault();
  let request= {
    email:document.getElementById('exampleInputEmail1').value,
    password:document.getElementById('exampleInputPassword1').value
  }

axios.post('http://localhost:3000/login',request)
.then( resp =>{
  alert(resp.data.message);
})
.catch(err=> {
  console.log(err);
}) 
}
export default App;
