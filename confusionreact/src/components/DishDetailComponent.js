import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";


const renderComments = (comments) => {
  if (!comments) {
    return <div></div>;
  }

  const commentItems = comments.map((comment) => (
    <li key={comment.id}>
      <p>{comment.comment}</p>
      <p>-- {comment.author}, {new Date(comment.date).toLocaleDateString()}</p>
    </li>
  ));
  return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">
        {commentItems}
      </ul>
    </div>
  );
}
const renderDish = (dish) => {
  if (dish != null)
    return (
      <Card>

        <CardImg width="100%" top src={dish.image} alt={dish.name} />{" "}
        <CardBody>

          <CardTitle>{dish.name}</CardTitle>{" "}
          <CardText>{dish.description}</CardText>{" "}
        </CardBody>
      </Card>
    );
  else return <div></div>;
}

function DishDetail(props) {

  const { dish } = props;

  if (dish == null) {
    return <></>;
  }
  const dishCard = renderDish(dish);

  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        {dishCard}
      </div>
      <div className="col-12 col-md-5 m-1">
        {renderComments(dish.comments)}
      </div>
    </div>
  );
}

export default DishDetail;