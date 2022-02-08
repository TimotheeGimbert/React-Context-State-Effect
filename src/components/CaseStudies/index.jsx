import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const CaseStudies = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <p>This is a list of case-studies </p>
      <p>The theme is still : {theme.themeIsDark} </p>
    </>
  )
};

export default CaseStudies;