import React from 'react';
import ReactDOM from 'react-dom';
import  "./index.css";
import App from './App';


// const elOne = React.createElement('span', {children: 'GOIT'})
// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [  elOne],
// });


// console.log(element);
// ReactDOM.render(element,  document.querySelector('#root'));
// ReactDOM.render(elOne, document.querySelector('#root'));

// const jsxElement = <div>Hello world</div>
// console.log(jsxElement);






// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
 


// const data = {
//   id: "id-1",
//   url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art abstract",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   quantity: 10,
// };

// const painting = (
//   <div>
//       <img src={data.url} alt={data.title} width="480"/>
//       <h2>{data.title}</h2>
//       <p>
//         Author: <a href={data.author.url}>{data.author.tag}</a>
//       </p>
//       <p>Price:{data.price} creds </p>
//       <p>Accessibility: </p>
//       <button type="button" > Add to cart</button>
//     </div>
// )
// const painting = paintings[1]
//

ReactDOM.render(
<React.StrictMode>
       <App />
     </React.StrictMode>,
      document.querySelector('#root'));

