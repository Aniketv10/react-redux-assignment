import React from 'react'
import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { FILTER } from '../constants';
import { newFilter } from '../redux/actions';
import './TodoApp';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Container centerContent className="test4">
      <Tabs>
        <TabList>
          {Object.keys(FILTER).map(filterkey => {
            const currentFilter = FILTER[filterkey];
            return (
              <Tab
                key={`filter-${currentFilter}`}
                onClick={() => dispatch(newFilter(currentFilter))}
              >
                {currentFilter}
              </Tab>
            )
          })}
        </TabList>
      </Tabs>
    </Container>
  )
}