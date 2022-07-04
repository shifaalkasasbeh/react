import React from 'react';
import {useState } from 'react';
function Custome(em, pa){
const [email , setEmail] = useState("shifa@gmail.com");
const [pass , setpass] = useState("shifa");
const [Flag , setflag] = useState(false);
const Handlechange = () =>{
    if(em ==email && pa ==pass)
   {
    return  window.alert(' success login ');
    Flag = true ;
   }else{
    window.alert('fail');
   }
}
return(
   [email ,pass , Flag , Handlechange]
   )
}
export default Custome ;