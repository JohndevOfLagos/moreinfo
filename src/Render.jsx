import React from "react";
import "./Card.scss";

import Card  from "./Card"
import { Data } from "./Data";

export const Render = () => {
  const card = Data.map((item) => {
   console.log(item);
    return <Card 
     key={item.id} 
     item={item} 
     />;
  });



  return <section className="card--container">{card}</section>;
};
