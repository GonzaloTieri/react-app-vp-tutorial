import React, { Component } from 'react';
import Bullet from './Bullet';

class NewBullet extends Component {
  constructor(props) {
    super(props);
    this.state = {Bullets: []}
  }
  text = '';
  onChangeHandler = (e) => {
    this.text = e.target.value;
  }
  addBulletHandler = (e) => {
    console.log(this.state);
    const bullets = this.state.Bullets;
    bullets.push(this.text);
    this.setState({Bullets: bullets});
    console.log(this.state);
  }
  render() {
    return (
      <div>
      <textarea onChange={this.onChangeHandler}/>
      <button onClick={this.addBulletHandler} > Add </button>
      {this.state.Bullets.map((bullet) => {
        return <Bullet text={bullet} key={bullet} />
      })}
</div>
    );
  }
}

export default NewBullet;
