import React, { Component } from "react";
import "../index.css";

class ObjectList extends Component {
  render() {
    const arrItems = [
      "nounours extraterrestres",
      "méchant clowns",
      "bananes maléfiques",
      "virus destructeurs",
      "montres en retard",
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
        <h2>
          pour vaincre des <br />
          <span className="reponse">
            {arrItems[Math.floor(Math.random() * arrItems.length)]}
          </span>
        </h2>
      </div>
    );
  }
}

export default ObjectList;
