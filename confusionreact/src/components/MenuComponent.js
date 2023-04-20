import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
function RenderMenuItem({ dish, onClick }) {
  const { image, name } = dish;
  return (
    <Card >
      &nbsp;
      <CardImg width="100%" src={image} alt={name} />&nbsp;
      <CardImgOverlay>
        &nbsp;
        <CardTitle>{name}</CardTitle>&nbsp;
      </CardImgOverlay>&nbsp;
    </Card>
  );
}
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        &nbsp;
        <RenderMenuItem dish={dish} onClick={props.onClick} />&nbsp;
      </div>
    );
  });
  return (
    <div className="container">
      &nbsp;
      <div className="row"> {menu} </div>&nbsp;
    </div>
  );
};
export default Menu;
