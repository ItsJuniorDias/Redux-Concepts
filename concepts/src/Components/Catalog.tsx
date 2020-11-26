import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Components: React.FC = () => {
  const state  = useSelector(state => state);
  
  console.log(state);

  return (
    <h1> 
      Catalog
    </h1>
  );
}

export default Components;