import React from "react";

// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentComponent";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        {" "}
        <Card>
          {" "}
          <CardImg top src={baseUrl + dish.image} alt={dish.name} />{" "}
          <CardBody>
            {" "}
            <CardTitle>{dish.name}</CardTitle>{" "}
            <CardText>{dish.description}</CardText>{" "}
          </CardBody>{" "}
        </Card>{" "}
      </FadeTransform>
      // <Card>
      //   {/* <CardImg width="100%" top src={dish.image} alt={dish.name} />{" "} */}
      //   <CardImg top src={baseUrl + dish.image} alt={dish.name} />
      //   <CardBody>
      //     <CardTitle>{dish.name}</CardTitle>{" "}
      //     <CardText>{dish.description}</CardText>{" "}
      //   </CardBody>
      // </Card>
    );
  else return <div></div>;
}
function addComment(values) {
  this.props.addComment(
    this.props.dish.id,
    values.rating,
    values.author,
    values.comment
  );
  this.props.postComment(
    this.props.dishId,
    values.rating,
    values.author,
    values.comment
  );
}
// function RenderComments({ comments, addComment, dishId }) {
function RenderComments({ comments, postComment, dishId }) {
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

      {/* <CommentForm dishId={dishId} addComment={addComment} /> */}
      <CommentForm dishId={dishId} postComment={postComment} />
    </div>
  );
}

const DishDetail = (props) => {
  const dish = props.dish;
  if (dish == null) {
    return <div></div>;
  }
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          {" "}
          <Loading />{" "}
        </div>{" "}
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        {" "}
        <div className="row">
          {" "}
          <h4>{props.errMess}</h4>{" "}
        </div>{" "}
      </div>
    );
  } else if (props.dish != null) {
    const dishCard = RenderDish(dish);

    return (
      <div className="container">
        {" "}
        <div className="row">
          {" "}
          <Breadcrumb>
            {" "}
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>{" "}
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>{" "}
          </Breadcrumb>{" "}
          <div className="col-12">
            {" "}
            <h3>{props.dish.name}</h3> <hr />{" "}
          </div>{" "}
        </div>{" "}
        <div className="row">
          {" "}
          <div className="col-12 col-md-5 m-1">
            {" "}
            <RenderDish dish={props.dish} />{" "}
          </div>{" "}
          <div className="col-12 col-md-5 m-1">
            {" "}
            <RenderComments
              comments={props.comments}
              // addComment={props.addComment}
              dishId={props.dish.id}
              postComment={props.postComment}
            />{" "}
          </div>
        </div>{" "}
      </div>
    );
  }
};

export default DishDetail;
