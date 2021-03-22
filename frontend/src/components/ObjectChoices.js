import React, { Component, useEffect, useState } from "react";
import "../index.css";

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
