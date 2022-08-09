import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Car from './component/Car';

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "ford",
//       model: "mustang",
//       color: "red",
//       year: "1964"
//     };
//   }
//   changeColor = () => {
//     this.setState({color: "blue"})
//   }
//   render() {
//     return (
//       <div>
//         <h1>my {this.state.brand}</h1>
//         <p>
//           it is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button
//         type="button" 
//         onClick={this.changeColor}
//         >Change color</button>
//       </div>
//     );
//   }
  
// }

// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { favoritecolor: "red"}
//   }
  // static getDerivedStateFromProps(props, state) {
  //   return {favoritecolor: props.favcol };
  // }

  // shouldComponentUpdate() {
  //   return true;
  // }

  // changeColor = () => {
  //   this.setState({favoritecolor: "blue"});
  // }
  // componentDidMount() {
  //   setTimeout(()=> {
  //     this.setState({favoritecolor: "yellow"})
  //   }, 1000)
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   document.getElementById("DIV1").innerHTML = 
  //   "Before the update, the favorite was" + prevState.favoritecolor;
  // }

  // componentDidUpdate() {
  //   document.getElementById("mydiv").innerHTML =
  //   "The updated favorite is " + this.state.favoritecolor;
  // }
  // render() {
  //   return(
  //     <div>
  //       <h1>my favorite color is {this.state.favoritecolor}</h1>
  //       <div id="mydiv"></div>
        // {/* <div id="DIV2"></div> */}
        // {/* <button type="button" onClick={this.changeColor}>change color</button> */}
//       </div>
//     )
//   }
// }

// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {show: true};
//   }
//   delHeader = () => {
//     this.setState({show: false});
//   }

//   render() {
//     let myheader;
//     if(this.state.show) {
//       myheader = <Child />
//     };
//     return(
//       <div>
//         {myheader}
//         <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("The component named header is abbout to be unmounted.");
//   }
//   render() {
//     return(
//       <div>
//         <h1>the component has been unmounted</h1>
//       </div>
//     );
//   }
// }

function Greeting(name) {
  const date = new Date()
  const hours = date.getHours()

  let timeofDay
  if(hours >= 4 && hours < 12) {
      timeofDay = "morning"
  } else if(hours >= 12 && hours < 17) {
      timeofDay = "afternoon"
  } else if(hours >= 17 && hours < 20) {
      timeofDay = "evening"
  } else {
      timeofDay = "night"
  }

  return `Good ${timeofDay}, ${name}!`
}
console.log(Greeting("monday"))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);


