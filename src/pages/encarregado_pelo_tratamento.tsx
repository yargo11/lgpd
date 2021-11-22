import { Flex, Box, Text, List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'

export default function EncarregadoPeloTratamento() {
    return (
        <Flex direction='column'>
            <Box bg='#0065F3' py='50px'>
                <Flex direction='column' maxW='1150px' m='auto' px={4}>
                    <Text as='h2' pb='30px' color='#FEC810'>Encarregado pelo tratamento de dados pessoais</Text>
                    <Text as='h4' maxW='832px' textAlign='left' color='gray.50'>
                        O Encarregado pelo tratamento de dados pessoais é designado pelo Controlador. É a pessoa física ou
                        jurídica responsável por, dentre outras atribuições, realizar a comunicação entre os titulares de
                        dados pessoais, o controlador, a Autoridade Nacional de Proteção de Dados, bem como conhecer
                        detalhadamente todo o tratamento de dados pessoais efetivado na instituição.
                    </Text>
                </Flex>
            </Box>
            <Box bg="#fff" py='50px'>
                <Flex maxW='1150px' m='auto' px={4}>
                    <Flex mr='auto' direction='column' maxW='832px' w='100%'>
                        <Text as='h3' color='#FF9600' py={4}>{`<`}Encarregado{`>`}</Text>
                        <Text as='h6' color='#555' py={1}>
                            No Poder Judiciário do Rio Grande do Norte o Encarregado pelo Tratamento de Dados Pessoais
                            do é o Desembargador <strong>Ibanez Monteiro</strong>.
                        </Text>
                        <Text as='h3' color='#555' py={4}>Contato</Text>
                        <Text as='h6' color='#555' py={1}>
                            <strong>E-mail</strong>: protecaodedados@tjrn.jus.br
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            <strong>Telefone</strong>: +55 (84) 3673-8000
                        </Text>

                        <Text as='h3' color='#FF9600' py={4}>{`<`}Previsão Legal{`>`}</Text>
                        <Text as='h4' color='#555' py={4} fontWeight='bold'>Artigo 41, §1º, da LGPD:</Text>
                        <Text as='h6' color='#555' py={1}>
                            A identidade e as informações de contato do encarregado deverão ser divulgadas publicamente,
                            de forma clara e objetiva, preferencialmente no sítio eletrônico do controlador.
                        </Text>

                        <Text as='h3' color='#FF9600' py={4}>{`<`}Atribuições{`>`}</Text>
                        <Text as='h4' color='#555' py={4} fontWeight='bold'>Artigo 41, §2º, da LGPD:</Text>
                        <Text as='h6' color='#555' py={1}>
                            <UnorderedList>
                                <ListItem>Aceitar reclamações e comunicações dos titulares, prestar esclarecimentos e adotar providências;</ListItem>
                                <ListItem>Receber comunicações da autoridade nacional e adotar providências;</ListItem>
                                <ListItem>Orientar os funcionários e os contratados da entidade a respeito das práticas a serem tomadas em relação à proteção de dados pessoais;</ListItem>
                                <ListItem>Executar as demais atribuições determinadas pelo controlador ou estabelecidas em normas complementares.</ListItem>
                            </UnorderedList>
                        </Text>

                        <Text as='h3' color='#FF9600' py={4}>{`<`}Competências do Encarregado{`>`}</Text>
                        <Text as='h6' color='#555' py={1}>
                            I – ser o canal de comunicação entre a instituição, o titular de dados pessoais, a Autoridade Nacional de Proteção de Dados Pessoais (ANPD) e o Conselho Nacional de Justiça (CNJ);
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            II – prestar esclarecimentos, realizar comunicações, orientar operadores e contratados sobre as práticas tomadas ou a serem tomadas para garantir a proteção dos dados pessoais;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            III – executar as atribuições a si determinadas pelo Controlador;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            IV - receber as reclamações dos titulares quanto ao tratamento de seus dados, respondê-las e tomar providências para que sejam sanados os desvios e as medidas cabíveis;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            V – determinar a publicidade da dispensa de consentimento para o tratamento de dados pessoais no Tribunal, em conformidade com o previsto na LGPD;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            VI – apoiar a implementação e a manutenção de práticas de conformidade do Tribunal à legislação sobre o tratamento de dados pessoais; e
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            VII – manter a comunicação sobre o tratamento de dados pessoais com as autoridades internas e externas à instituição;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            VIII – deter amplo e sólido conhecimento sobre a legislação de proteção de dados pessoas e normas correlatas;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            IX – apoiar a implementação e a manutenção de práticas de conformidade do Tribunal à legislação sobre o tratamento de dados pessoais;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            X – responder incidentes no tratamento de dados pessoais e comunicar à Autoridade Nacional e ao (à) titular dos dados, em prazo razoável, a ocorrência de incidentes de segurança e violação com os dados pessoais, que possam causar danos ou riscos relevantes à privacidade do indivíduo;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            XI – executar as demais atribuições determinadas pelo Controlador, pela ANPD ou estabelecidas em normas complementares.
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}