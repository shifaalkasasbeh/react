
import React from 'react';
const st=['Z', 'A', 'Q' ,'B' ,'C','Y' ,'S', 'W' ];
const newst=st.sort();
class Arr extends React.Component{

 render(){
    return( 
<div>
<p>array sorting</p>{newst}
</div>

);
}
}
export default Arr;