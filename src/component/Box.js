import React from 'react'

function Box(props) {
  return (
    <div className={`box ${props.winner ? 'winner' : 'loser'}`}>
      <h1>{props.name}</h1>
      <img src={props.imgURL} alt={props.title} />
      <h3>{props.winner ? 'Won' : 'Loss'}</h3>
    </div>
  )
}

// import React, { Component } from 'react'

// class Box extends Component {
//         render() {
//                 return (
//                         <div className={this.props.color}>
//                             <h1>{this.props.name}</h1>
//                 <div>{this.props.color}</div>
//                 <div>{this.props.win?"Won":"Loss"} </div>
//             </div>
//         )
//     }
// }

export default Box;
