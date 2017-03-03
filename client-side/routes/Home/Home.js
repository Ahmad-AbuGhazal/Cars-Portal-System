import React, { PropTypes } from 'react';
import CarApp from '../../components/CarApp';
import Link from '../../components/Link';
import s from './Home.css';

const title = 'Web Task';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <CarApp></CarApp>
    );
  }

}

export default HomePage;
