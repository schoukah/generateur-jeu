import React, { Component, useEffect, useState } from "react";
import "../index.css";

function ArrayAnim() {
  const [arrItems, setArritems] = useState([
    "nounours extraterrestres",
    "méchant clowns",
    "bananes maléfiques",
    "virus destructeurs",
    "montres en retard",
  ]);
  useEffect(() => {
    const arrItemsLoop = setInterval(() => {
      for (let i = 0; i < 10; i++) {
        console.log(arrItems[Math.floor(Math.random() * arrItems.length)]);
      }
      return arrItems[Math.floor(Math.random() * arrItems.length)];
    }, 400);
    return () => clearInterval(arrItemsLoop);
  }, []);
  return (
    <h2>
      pour vaincre des <br />
      <span className="reponse">{setArritems()}</span>
    </h2>
  );
}

class ObjectList extends Component {
  render() {
    // const arrItems = [
    //   "nounours extraterrestres",
    //   "méchant clowns",
    //   "bananes maléfiques",
    //   "virus destructeurs",
    //   "montres en retard",
    // ];

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
        {/* <h2>{ArrayAnim}</h2> */}
      </div>
    );
  }
}

export default ObjectList;
