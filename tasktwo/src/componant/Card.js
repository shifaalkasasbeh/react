import React from 'react';

class Card extends React.Component {



  render() {
    return (
          <div class="col-sm-3">
        <img src="https://lumiere-a.akamaihd.net/v1/images/pp_frozen_herobanner_mobile_20501_ae840c59.jpeg?region=0,0,1024,768"/>
        <h2>{this.props.name} </h2>
        <p>frozen</p>
        <p>Speaking to Digital Spy in 2019 about Frozen 2, writer Jennifer Lee also spoke about the future of Frozen 3, saying that although there are no current plans for another movie set in Arendelle, we could always be heading back to that kingdom in the future.</p>
    
      </div>
  

       );

  }
}
export default Card;