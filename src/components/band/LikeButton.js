import React, { Component } from "react";

class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    // console.log(this.props.test)
  }

  increment() {
    this.setState({ count: this.state.count + parseInt(this.props.count) });
  }

  decrement() {
    if (this.state.count <= 0) {
        this.setState.count = 0
    } else {
    this.setState({ count: this.state.count - parseInt(this.props.count) });
    }
  }

  render() {
    return (
      <div className='LikeButtonSection'>
        <button
          className='likeButton'
          onClick={(e) => {
            this.decrement();
          }}
        >
          DisLike
        </button>

        <p className='LikeButtonLabel'>{this.state.count}</p>

        <button
          className='likeButton'
          onClick={(e) => {
            this.increment();
          }}
        >
          Like
        </button>
      </div>
    );
  }
}

export default LikeButton;
