import React from 'react';
import { Box, Heading, Text, Flex, Container } from '@chakra-ui/react';

interface CardProps {
    title: string;
    description?: string;
    soon: boolean;
    borderColor?: string;
}

function Card({ title, description, soon, borderColor }: CardProps) {
    return (
        <Box
            position="relative"
            width="100%"
            padding={{base: "30px", md: "48px", lg: "64px 48px", xl: "64px"}}
            display="block" 
            justify="center"
            align="center"
            backgroundColor="gray.700"
            borderTopRadius="sm"
            borderBottom={title !== "Ignite" ? `2px solid ${borderColor}` : "none"}
            transition="all 0.2s ease 0s"
            cursor="pointer"
            _hover={title !== "Ignite" ? { transform: "translateY(-7px)" } : { display: 'block' }}
        >
            <Flex
                width={{sm: "312px", md: "432px", lg: "656px", xl: "200px"}}
                height={{sm: "auto", xl: "470px"}}
                align="center"
                direction="column"
            >
                <Heading 
                    color="gray.300" 
                    marginTop={{sm: "10px", xl: "105px"}}
                    marginBottom={{sm: "20px", xl: "55px"}}
                >
                    {title}
                </Heading>

                <Text 
                    fontSize={{sm: "md", lg: "lg"}}
                    color="gray.600" 
                    maxW={{lg: "270px"}}
                    lineHeight={{sm: "md", lg: "lg"}}
                >
                    {description}
                </Text>

            </Flex>
            {soon ? (
                <Container
                    position="absolute"
                    zIndex="0"
                    maxW="100%"
                    height="42px"
                    right="0"
                    left="0"
                    bottom="0"
                    padding="0"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="sm"
                    fontWeight="bold"
                    letterSpacing="0.5px"
                    color="#fd951f"
                    backgroundColor="#332616"
                >
                    EM BREVE
                </Container>
            ) : null}
        </Box>
    );
}

export default Card;