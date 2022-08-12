
import React, { useContext } from "react";
import Dishes from '../Components/Dishes/Dishes'
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/ConextAPI/action";
import "./Home.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Result from "../Components/Result/Result";
import PolledList from "../Components/PolledList/PolledList";

const Home = () => {
    const navigate = useNavigate();

  const { votes } = useContext(Context);
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Dishes</Tab>
          <Tab>Result</Tab>
          <Tab>Selected Dishes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Dishes />
          </TabPanel>
          <TabPanel>
            <Result />
          </TabPanel>
          <TabPanel>
            <PolledList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export default Home

