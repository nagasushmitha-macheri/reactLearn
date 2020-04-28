// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react'
import  {render} from 'react-dom'
import Library from './Library'


// var style={
//   backgroundColor: 'orange',
//   color: 'white',
//   fontFamily: 'Arial'
// }

// let appData={
//   total: 50,
//   powder:20,
//   backCountry: 10,
//   goal:100
// }

// const getPercent= decimal =>{
//   return  decimal * 100 +'%'
// }

//  const calcTotal = (total, goal) => {
//   return getPercent (total/goal)
// }

// const SkiDayCounter=({total, powder, backCountry, goal}) =>{
//   return(
//     <section>
//     <div>
//       <p>Total Days : {total}</p>
//     </div>
//     <div>
//       <p>Powder Days : {powder}</p>
//     </div>
//     <div>
//       <p>BackCountry Days : {backCountry}</p>
//     </div>
//     <div>
//       <p>Goal Progress: {calcTotal(total, goal)}</p>
//     </div>
//   </section>
//   )
// }

// class SkiDayCounter extends Component{
//   getPercent= decimal =>{
//     return  decimal * 100 +'%'
//   }

//   calcTotal = (total, goal) => {
//     return this.getPercent (total/goal)
//   }
//   render(){
//     const {total, powder, backCountry, goal} = this.props
//     return(
//       <section>
//         <div>
//           <p>Total Days : {total}</p>
//         </div>
//         <div>
//           <p>Powder Days : {powder}</p>
//         </div>
//         <div>
//           <p>BackCountry Days : {backCountry}</p>
//         </div>
//         <div>
//           <p>Goal Progress: {this.calcTotal(total, goal)}</p>
//         </div>
//       </section>
//     )
//   }
// }
// class Message extends Component{
//   render(){
//     console.log(this.props)
//     return(
//       <div>
//         <h1 style={{color: this.props.color}}>{this.props.age}</h1>
//         <p>I'll be back in {this.props.minutes} minutes.</p>
//       </div>
//     )
//   }
// }

// const title=React.createElement(
//   'ul',
//   {
//     id: 'title', className: 'header', style
//   },
//   React.createElement(
//     'li',
//     {},
//     'item on our list'
//   )
// )

// ReactDOM.render(
//     <div style={style}>
//       <h1 id="heading-element">hello world</h1>
//       <p>i am not glad</p>
//     </div>,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <Message age ={24} color="blue" msg="How are you?" minutes={10}/>, 
//   document.getElementById('root')
// )

// render(
//   <SkiDayCounter 
//   total={appData.total}
//   powder={appData.powder}
//   backCountry={appData.backCountry}
//   goal={appData.goal}/>,
//   document.getElementById('root')
// )

let BookList=[
  {"title": "The Hunger Games", "author": "Suzanne Collins", "pages": 340},
  {"title": "The Book Thief", "author": "Markus Zusak", "pages": 260},
  {"title": "The Da Vinci Code", "author": "Dan Brown", "pages": 715},
  {"title": "American Gods", "author": "Nel Gaiman", "pages": 465}
]


// const Library=({objects}) =>{
//   return(
//     <div>
//      {objects.map(
//        (book, id)=>
//        <Book 
//        key={id}
//        title={book.title} 
//        author={book.author} 
//        pages={book.pages}/>
//      )}
//     </div>
//   )
// }









// class FavoriteColorComponent extends Component{
//   state={
//     value:''
//   }
//   newState = e =>{
//     this.setState({value: e.target.value})
//   }

//   submit = e =>{
//     console.log(`new color: ${this.state.value}`)
//     e.preventDefault()
//   }
//   render(){
//     return(
//       <form onSubmit={this.submit}>
//         <label>Pick colour:</label>
//         <input type="color" onChange={this.newState}/>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }

render(
    <Library books={BookList} />,
  document.getElementById('root')
)