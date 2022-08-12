import React, { useContext } from 'react';
import { Context } from '../../Context/ConextAPI/action';
import './Dishes.css';
import { List, ListItem, Image, Box, Heading } from '@chakra-ui/react';
const DishesList = ({ item }) => {
  const { pollesDispatch, votes, dishesDispatch } = useContext(Context);

  const selectionHandler = (e) => {
    let rank = e.target.textContent;
    if (rank === 'Rank 1') {
      pollesDispatch({ type: 'RANK_1', payload: [item.id, item.name] });
      dishesDispatch({ type: 'RANK_1', payload: item.id });
    } else if (rank === 'Rank 2') {
      pollesDispatch({ type: 'RANK_2', payload: [item.id, item.name] });
      dishesDispatch({ type: 'RANK_2', payload: item.id });
    } else if (rank === 'Rank 3') {
      pollesDispatch({ type: 'RANK_3', payload: [item.id, item.name] });
      dishesDispatch({ type: 'RANK_3', payload: item.id });
    }
  };

  return (
    <Box
      w="100%"
      boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px"
      padding="20px"
      borderRadius="10px"
    >
      <Box>
        <Image src={item.image} borderRadius="10px" />
        <Heading size="md" textAlign={'center'} padding="15px">
          {item.name}
        </Heading>
        <List spacing={3} onClick={selectionHandler}>
          <ListItem className={item.rank1 ? 'dishList active' : 'dishList'}>
            Rank 1
          </ListItem>
          <ListItem className={item.rank2 ? 'dishList active' : 'dishList'}>
            Rank 2
          </ListItem>
          <ListItem className={item.rank3 ? 'dishList active' : 'dishList'}>
            Rank 3
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default DishesList;
