import React from 'react';
import Row from './Row';
import ThemeContext from '../context/theme';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      object: 'React Hooks',
      description: 'YYDS!',
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    document.title = `${this.state.object} ${this.state.description}`;
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    document.title = `${this.state.object} ${this.state.description}`;
  }

  handleObjectChange = (e) => {
    this.setState({
      object: e.target.value,
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <section className={theme}>
            <Row label="对象">
              <input
                value={this.state.object}
                onChange={this.handleObjectChange}
              />
            </Row>
            <Row label="描述">
              <input
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </Row>
            <Row label="宽度">{this.state.width}</Row>
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}
