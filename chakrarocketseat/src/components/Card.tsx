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
            padding="64px 48px"
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
                height="470px"
                align="center"
                direction="column"
            >
                <Heading color="gray.300" marginY="30px">{title}</Heading>

                <Text color="gray.600" max-width="270px" lineHeight="26px">{description}</Text>

            </Flex>
            {soon ? (
                <Container
                    position="absolute"
                    zIndex="0"
                    width="100%"
                    height="42px"
                    bottom="0"
                    left="0"
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