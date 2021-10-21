import React, { useState, useEffect } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { increaseCount } from './redux/action/file';

const App = (props) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    props.increaseCount(count + 1);
    setCount(count + 1);
  };
  useEffect(() => {
    console.log('porps courn data : ', props);
  }, [count]);
  return (
    <div>
      <p>hello</p>
      <button onClick={handleClick}>increase</button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  count: state.count,
});
export default connect(mapStateToProps, { increaseCount })(App);
