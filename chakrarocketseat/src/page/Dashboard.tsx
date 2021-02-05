import React from 'react';
import { Flex } from '@chakra-ui/react';

import Header from '../components/Header';
import Content from '../components/Content';

function Dashboard() {
    return (
        <Flex
            width="100%"
            height="100%"
            backgroundColor="gray.800"
            paddingTop={{base: "60px", lg: "72px"}}
            align="center"
            justify="center"
        >
            <Header />
            <Content />
        </Flex>
    );
}

export default Dashboard;