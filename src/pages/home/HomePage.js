import React from "react";
import { connect } from "react-redux";

import { Card } from "semantic-ui-react";
import { CardContainer } from "../../components";
import { userActions } from "../../actions";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(userActions.getUsers());
  }

  createCards() {
    const { items } = this.props;
    console.log(items);
    var collection = [];
    if (items) {
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        collection.push(<CardContainer key={i} item={item} />);
      }
    }
    return collection;
  }

  render() {
    return (
      <div>
        <Card.Group>{this.createCards()}</Card.Group>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { items } = state.users;
  return {
    items
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
