import React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBellFill } from 'react-icons/bs';
import { MdPersonAdd } from 'react-icons/md';

import logo from '../images/rocketseat.svg';

function Header() {
    return (
        <Flex
            top="0"
            position="fixed"
            width="100vw"
            height="72px"
            paddingX="38px"
            zIndex="999"
            justify="center"
            align="center"
            backgroundColor="gray.700"
            boxShadow="rgb(18 18 20) 0px 1rem 2rem"
            transition="all 0.5s ease-in-out 0s"
        >
            <Flex
                width="100%"
                maxW="1366px"
                justify="space-between"
                align="center"
            >
                <Image 
                    src={logo} 
                    alt="logo"
                    width="192px"
                    height="37px"
                    cursor="pointer"
                />

                <Flex
                    justify="center"
                    align="center"
                >
                    <Box
                        width="46px"
                        height="46px"
                        marginRight="14px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        color="#a8a8b3"
                        transition="all 0.2s ease 0s"
                        _hover={{ backgroundColor: 'gray.900', color: '#FFF' }}
                    >
                        <AiOutlineSearch  size={24} />
                    </Box>
                    <Box
                        width="46px"
                        height="46px"
                        marginRight="14px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        color="#a8a8b3"
                        transition="all 0.2s ease 0s"
                        _hover={{ backgroundColor: 'gray.900', color: '#FFF' }}
                    >
                        <MdPersonAdd color="#a8a8b3" size={24}/>
                    </Box>
                    <Box
                        width="46px"
                        height="46px"
                        marginRight="14px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        color="#a8a8b3"
                        transition="all 0.2s ease 0s"
                        _hover={{ backgroundColor: 'gray.900', color: '#FFF' }}
                    >
                        <BsFillBellFill color="#a8a8b3" size={24}/>
                    </Box>
                    
                    <Flex
                        align="center"
                        cursor="pointer"
                    >
                        <Heading fontSize="md" fontWeight="bold" marginRight="12px" color="gray.300">Gabriel Araújo de Jesus</Heading>
                        
                        <Flex 
                            width="52px"
                            height="52px"
                            padding="2px"
                            align="center"
                            justify="center"
                            borderRadius="md"
                            border="2px solid" 
                            borderColor="gray.300"
                        >
                            <Image borderRadius="md" src="https://avatars.githubusercontent.com/u/60709667?s=460&u=158d24cfd2d489eb1872b09d2381afc2d88d24e1&v=4" alt="Gabriel"/>
                        </Flex>
                    </Flex>

                </Flex>
            </Flex>
        </Flex>
    );
}

export default Header;