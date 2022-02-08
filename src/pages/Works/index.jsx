import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Works = () => {
  const { year } = useParams();

  return (
    <>
      <Link to='/works/case-studies/'>Case Studies {year}</Link> <br/>
    </>
  )
};

export default Works;