import React from "react";

const CardItem = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.list.map((product) => {
        return (
          <div className="card_products-item d-flex flex-column">
            <img src={product.img} alt={product.title} className="" />
            <span>{product.title}</span>
          </div>
        );
      })}
    </>
  );
};

export default CardItem;
