import React, { Component, useEffect, useState } from "react";
import "../index.css";

// ** 13:46 2020 - March 22, finally got it!!!

// I HAVE THE GREAT PLEASURE TO CONFIDE THAT AFTER SEVERAL HOURS I DID GET TO LOOP THROUGH THE GAME ROULETTE AS I WANTED. WELL NOT EXACTLY AS I WANTED BUT GOT AT LEAST PART OF IT FIGURED OUT.
// Thanks to this page:
// https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30

// and specifically:
// this
// #+begin_src html
// const output = document.querySelector("#output");
// const display = s => output.innerText = s;
// #+end_src

// and this
// #+begin_src html
// names.forEach((name, i) => {
//   setTimeout(() => {
//     display(name);
//   }, i * 1000);
// });
// #+end_src

// which I just adapted for use with useState and useEffect!

function LoopThroughItems() {
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    const arrItems = [
      "nounours extraterrestres",
      "méchant clowns",
      "bananes maléfiques",
      "virus destructeurs en peine d'amour",
      "montres en retard",
      "escargots mutant géants",
      "mouches en manque d'affection",
      "ananas très en colère",
      "bonbons empoisonnés",
      "fantômes inacceptablement malpolis",
      "propos haineux non-identifiés",
    ];
    arrItems.forEach((item, i) => {
      setTimeout(() => {
        setCurrentItem(item);
      }, i * 1000);
    });
  }, []);
  return <h2>{currentItem}</h2>;
}

// function Do_timeout(
//   items = [
//     "nounours extraterrestres",
//     "méchant clowns",
//     "bananes maléfiques",
//     "virus destructeurs en peine d'amour",
//     "montres en retard",
//     "escargots mutant géants",
//     "mouches en manque d'affection",
//     "ananas très en colère",
//     "bonbons empoisonnés",
//     "fantômes inacceptablement malpolis",
//     "propos haineux non-identifiés",
//   ],
//   callback = () => {},
//   delay = 50,
//   index = 0
// ) {
//   if (index < items.length) {
//     window.setTimeout(function () {
//       callback(items[index]);

//       Do_timeout(items, callback, delay, ++index);
//     }, delay);
//   }
// }
// before morning was over on march 22
// const arrItems = [
//   "nounours extraterrestres",
//   "méchant clowns",
//   "bananes maléfiques",
//   "virus destructeurs en peine d'amour",
//   "montres en retard",
//   "escargots mutant géants",
//   "mouches en manque d'affection",
//   "ananas très en colère",
//   "bonbons empoisonnés",
//   "fantômes inacceptablement malpolis",
//   "propos haineux non-identifiés",
// ];
//// really got fed up of not getting anything
// logic behind this is:
// a counter loops through the array below a certain number of times,
// with a varrying speed (Math.sin).
// function ArrayAnim() {
//   const [arrayItem, setArrayItem] = useState(0);
//   useEffect(() => {
//     console.log("here again");
//     arrItems.forEach((item) => setArrayItem(item));
//     // again nothing great coming out of this
//     // let i = 1;
//     // while (i < 10) {
//     //   setArrayItem(arrayItem + i);
//     //   task(i);
//     //   i++;
//     // }
//     // function task(i) {
//     //   setTimeout(function () {
//     //     console.log(i);
//     //   }, 2000 * i);
//     // }
//     // found the loop in this SO answer
//     // https://stackoverflow.com/a/36018502
//     //  but gave severe memory leak issues
//     // for (let i = 0; i < 10; i++) {
//     //   setTimeout(function timer() {
//     //     setArrayItem(arrayItem + i);
//     //     console.log(i);
//     //   }, i * 3000);
//     // }
//     return () => {
//       console.log("hello world");
//     };
//     // return () => {

//     //   // this didn't work
//     //   // setArrayItem(arrItems[Math.floor(Math.random() * arrItems.length)]);
//     // };
//     // return () => {
//     //   <h2>
//     //     à des{" "}
//     //     <span className>
//     //       {arrItems[Math.floor(Math.random() * arrItems.length)]}
//     //     </span>
//     //   </h2>;
//     // };
//   }, [arrayItem]);
//   return (
//     <h2>
//       à des <span className="reponse">{arrItems[arrayItem]}</span>
//     </h2>
//   );
//   ///// Things I've tried before that didn't work
//   // const [arrItem, setArritem] = useState(0);
//   // useEffect(() => {
//   //   const arrItemsLoop = setInterval(() => {
//   //     for (let i = 0; i < 10; i++) {
//   //       console.log(arrItems[Math.floor(Math.random() * arrItems.length)]);
//   //       setTimeout()
//   //     }
//   //     return arrItems[Math.floor(Math.random() * arrItems.length)];
//   //   }, 400);
//   //   return () => clearInterval(arrItemsLoop);
//   // }, []);
//   // return (
//   //   <h2>
//   //     pour vaincre des <br />
//   //     <span className="reponse">{setArritems()}</span>
//   //   </h2>
//   // );
// }

class ObjectList extends Component {
  render() {
    const arrItems = [
      "nounours extraterrestres",
      "méchant clowns",
      "bananes maléfiques",
      "virus destructeurs en peine d'amour",
      "montres en retard",
      "escargots mutant géants",
      "mouches en manque d'affection",
      "ananas très en colère",
      "bonbons empoisonnés",
      "fantômes inacceptablement malpolis",
      "propos haineux non-identifiés",
    ];

    const mediators = [
      "pelures d'artichauts",
      "lampes incandescentes",
      "jeunes canards en plastique",
      "petits gâteaux roses et parfaits",
    ];
    const protagonistes = [
      "anges ou démons (au choix)",
      "cuisiniers•ères d'établissement prestigieux",
      "pompier•ères",
      "gardien•nes de secrets perdus",
      "personnes encouragées et vives",
      "extraterrestres nourissants",
      "pantalons indignés",
    ];
    // const arrItemsLoop = setInterval(() => {
    //   for (let i = 0; i < 10; i++) {
    //     console.log(arrItems[Math.floor(Math.random() * arrItems.length)]);
    //   }
    //   return arrItems[Math.floor(Math.random() * arrItems.length)];
    // }, 400);

    // function Example() {
    //   return (
    //     <div>
    //       <p>hallo</p>
    //     </div>
    //   );
    // }
    // idea for how to go about this:
    // create an animation by mapping or looping through all the above options
    // between each map iteration put a setTimeout function to slow down
    // how they'll be displayed.
    // set the time delay in setTimeout also as a function
    // this function starts with a counter with the total time remainging,
    // and uses some trig to define sine wave type of easing curve
    // each point of that easing curve is applied as time delay
    return (
      <div>
        <h2>
          Vous allez piloter des <br />
          <span className="reponse">
            {protagonistes[Math.floor(Math.random() * protagonistes.length)]}
          </span>
        </h2>
        <h2>
          qui vont lancer des <br />
          <span className="reponse">
            {mediators[Math.floor(Math.random() * mediators.length)]}
          </span>
        </h2>
        {/* <ArrayAnim /> */}
        {/* <h2>{ArrayAnim}</h2> */}
        <h2>
          pour vraincre des <br />
          <span className="reponse">
            {arrItems[Math.floor(Math.random() * arrItems.length)]}
          </span>
        </h2>
        {/* <Do_timeout /> */}
        <LoopThroughItems />
      </div>
    );
  }
}

export default ObjectList;
