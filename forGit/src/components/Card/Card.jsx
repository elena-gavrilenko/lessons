import React from "react";


export class Card extends React.Component{
    render(){
        console.log('Card render');
        // console.log(this.props);
        // const {userName, userlastName,avatar}=this.props;
        // return(
        // <div>
        //   <div>
        //     <img src={avatar} alt='avatar'></img>
        //   </div>
        //   <div>
        //   {`${userName} ${userlastName}`}
        //   </div>
        // </div> 
        // )
        const {userName, phoneNumber,email}=this.props;
        return(
        <div>
          <div>
          {`${userName}`}
          </div>
          <div>
          {`${phoneNumber}`}
          </div>
          <div>
          {`${email}`}
          </div>
          <br></br>
        </div> 
        )
    }
}