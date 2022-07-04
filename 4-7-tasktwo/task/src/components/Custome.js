import {useState } from 'react';
function Custome(em, pa){
const [email , setEmail] = useState("safa@gmail.com");
const [pass , setpass] = useState("safa1999");
const Handlechange = () =>{
    if(em ==email && pa ==pass)
   {
    return  window.alert('Login is success');
   }else{
    window.alert('Login is danger');
   }
}
return(
   [ email ,pass , Handlechange]
   )
}
export default Custome ;