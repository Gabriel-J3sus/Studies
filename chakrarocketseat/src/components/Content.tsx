import React from 'react';
import { Grid } from '@chakra-ui/react';

import Card from './Card';

function Content() {
    return (
        <Grid
            maxW="1426px"
            width="100%"
            padding={{base: "20px", lg: "30px"}}
            align="center"
            justify="center"
            gridTemplateColumns={{base: "1fr", xl: "repeat(3, 1fr)"}}
            gridTemplateRows={{base: "repeat(3, 1fr)", xl: "1fr"}}
            gridGap="24px"
        >
            <Card borderColor="#8257e5" title="Discover" description="Comunidade e conteúdo gratuito que te levarão para o próximo nível em programação" soon={false} />
            <Card title="Ignite" soon={true}/>
            <Card borderColor="#d6ac4e" title="ExpertsClub" description="Aulas práticas e direto ao ponto com profissionais que respiram tecnologia diariamente" soon={false} />

        </Grid>
    );
}

export default Content;