import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value }); 
  }

  render() {
      return (
      <>
      <ul>
        {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <input 
        type="text" 
        onChange={this.handleInputChange}
        value={this.state.newTech}
        />
      </>
    )
  }
}

export default TechList;