import React, { useState } from 'react';
import Custome from './Custome';
function Login() {
const [em ,setem]=useState('');
const [pa ,setpa]=useState('');
const [email ,pass , flag , Handlechange] = Custome(em , pa);

  return (
<div class="container">
  <h2>Login</h2>
  <form>
    <h1></h1>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={e =>setem(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={ps =>setpa(ps.target.value)}/>
    </div>
    <button type="submit" class="btn btn-default" onClick={Handlechange}>Submit</button>
  {<h1>Success</h1>}
  </form>
</div>
  );
}
export default Login; 