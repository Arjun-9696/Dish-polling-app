import React, { useContext } from 'react';
import { Context } from '../../Context/ConextAPI/action';
import DishesList from './DishList';
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';
import './Dishes.css';

const Dishes = () => {
  const { dishes } = useContext(Context);
  console.log('dishes:', dishes);
  return (
    <Box marginLeft="5%" className="dishesBox">
      <DishListWrapper>
        {dishes &&
          dishes.map((item, index) => {
            return <DishesList item={item} key={index} />;
          })}
      </DishListWrapper>
    </Box>
  );
};
export default Dishes;

const DishListWrapper = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, max-content));
  grid-gap: 50px;
  justify-content: center;
  padding: initial;
  margin: 50px;
`;
