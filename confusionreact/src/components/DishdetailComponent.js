import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function renderDish({ dish }) {
  const { name, image, description } = dish;
  if (dish != null)
    return (
      <Card>
        <CardImg width="100%" top src={image} alt={name} />{" "}
        <CardBody>
          <CardTitle>{name}</CardTitle> <CardText>{description}</CardText>{" "}
        </CardBody>
      </Card>
    );
  else return <div></div>;
}
function renderComments({ comments }) {
  if (!comments) {
    return <div></div>;
  }

  const commentItems = comments.map((comment) => (
    <li key={comment.id}>
      <p>{comment.comment}</p>
      <p>
        -- {comment.author},{" "}
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(Date.parse(comment.date)))}
      </p>
    </li>
  ));

  return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">{commentItems}</ul>
    </div>
  );
}

const DishDetail = (props) => {
  const { dish } = props;
  if (dish == null) {
    return <div></div>;
  }

  const dishCard = renderDish(dish);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">{dishCard}</div>
        <div className="col-12 col-md-5 m-1">
          {renderComments(dish.comments)}
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
