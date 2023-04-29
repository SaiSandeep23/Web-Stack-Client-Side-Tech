import { Component } from "react";

class DishDetail extends Component{
    renderDish(dish) {
        return (
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        );
      }
      
    render() {
        const { dish } = this.props;
        
        if (dish == null) {
          return <div></div>;
        }
        
        const dishCard = this.renderDish(dish);
        
        return (
         
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                {dishCard}
              </div>
              <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                  {this.renderComments(dish.comments)}
                </ul>
              </div>
            </div>
          
        );
      }
      
}

export default DishDetail;