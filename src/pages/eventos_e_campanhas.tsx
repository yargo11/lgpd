import {
    Flex, Box, Text, Button, Link,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react'

export default function EventosECampanhas() {
    return (
        <Flex direction='column'>
            <Box bg='#0065F3' py='50px'>
                <Flex direction='column' maxW='1150px' m='auto' px={4}>
                    <Text as='h2' pb='30px' color='#FEC810'>Eventos e Campanhas</Text>
                    <Text as='h3' pb='30px' color='#FEC810'>Quais os eventos e capacitações realizados pelo Poder Judiciário do Rio Grande do Norte?</Text>
                    <Text as='h4' maxW='832px' textAlign='left' color='gray.50'>
                        O TJRN optou em fazer uma Campanha de Sensibilização/Capacitação como ponto de partida para o Programa de Capacitação será uma educação
                        continuada no Poder Judiciário do RN. Dessa forma foi denominado o Mês da Proteção de Dados em formato de webinários.
                    </Text>
                    <Button as={Link} href='' colorScheme='blue' w='182px'>Formulário</Button>
                </Flex>
            </Box>
            <Box bg="#fff" py='50px'>
                <Flex maxW='1150px' m='auto' px={4}>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Dias</Th>
                                <Th>Temáticas</Th>
                                <Th>Palestrantes</Th>
                                <Th>Horários</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td rowSpan={4}><strong>12/07</strong></Td>
                            </Tr>
                            <Tr>
                                <Td>Tema: A LGPD interessa para as instituições brasileiras?</Td>
                                <Td>
                                    Dra. Tatiana Socoloski<br />
                                    Dra. Adriana Carla Oliveira
                                </Td>
                                <Td>
                                    11:00 às 11:15<br />
                                    11:15 às 11:30
                                </Td>
                            </Tr>
                            <Tr>
                                <Td colSpan={2}>Debates e perguntas</Td>
                                <Td>11:30 às 11:40</Td>

                            </Tr>
                            <Tr>
                                <Td colSpan={3}>
                                    <Text as='h6' color='#555' py={1}>
                                        Link de acesso ao Youtube: <Link color='blue.500' href='https://youtu.be/zQJmWPzuAyI'>
                                            https://youtu.be/zQJmWPzuAyI
                                        </Link>
                                    </Text><br />
                                    <Text as='h6' color='#555' py={1}>
                                        Link da matéria: <Link color='blue.500' href='http://intranet.tjrn.jus.br/comunicacao/noticias/1673-mes-da-protecao-de-dados-inicia-com-discussao-sobre-a-importancia-da-lgpd-para-as-instituicoes-brasileiras'>
                                            http://intranet.tjrn.jus.br/comunicacao/noticias/1673-mes-da-protecao-de-dados-inicia-com-discussao-sobre-a-importancia-da-lgpd-para-as-instituicoes-brasileiras
                                        </Link>
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Link da matéria: <Link color='blue.500' href='http://intranet.tjrn.jus.br/comunicacao/noticias/1671-mes-da-protecao-de-dados-tem-inicio-segunda-12-com-foco-nos-impactos-da-lgpd-para-as-organizacoes'>
                                            http://intranet.tjrn.jus.br/comunicacao/noticias/1671-mes-da-protecao-de-dados-tem-inicio-segunda-12-com-foco-nos-impactos-da-lgpd-para-as-organizacoes
                                        </Link>
                                    </Text>
                                </Td>

                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                                <Td rowSpan={4}><strong>19/07</strong></Td>
                            </Tr>
                            <Tr>
                                <Td>Tema: Qual o papel da gestão na implementação da LGPD?</Td>
                                <Td>
                                    Dra. Patrícia Gondim<br />
                                    Dr. Marivaldo Dantas de Araújo
                                </Td>
                                <Td>
                                    11:00 às 11:15<br />
                                    11:15 às 11:30

                                </Td>
                            </Tr>
                            <Tr>
                                <Td colSpan={2}>Debates e perguntas</Td>
                                <Td>11:30 às 11:40</Td>

                            </Tr>
                            <Tr>
                                <Td colSpan={3}>
                                    <Text as='h6' color='#555' py={1}>
                                        Link de acesso ao Youtube: <Link color='blue.500' href='https://youtu.be/PbVecZsxINo'>
                                            https://youtu.be/PbVecZsxINo
                                        </Link>
                                    </Text><br />
                                    <Text as='h6' color='#555' py={1}>
                                        Link da matéria: <Link color='blue.500' href='http://intranet.tjrn.jus.br/comunicacao/noticias/1684-mes-da-protecao-de-dados-gestores-falam-sobre-implementacao-da-lgpd-pela-administracao-do-judiciario'>
                                            http://intranet.tjrn.jus.br/comunicacao/noticias/1684-mes-da-protecao-de-dados-gestores-falam-sobre-implementacao-da-lgpd-pela-administracao-do-judiciario
                                        </Link>
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Link da matéria: <Link color='blue.500' href='http://intranet.tjrn.jus.br/comunicacao/noticias/1680-mes-da-protecao-de-dados-debate-papel-da-gestao-para-a-implantacao-da-lgpd-no-judiciario'>
                                            http://intranet.tjrn.jus.br/comunicacao/noticias/1680-mes-da-protecao-de-dados-debate-papel-da-gestao-para-a-implantacao-da-lgpd-no-judiciario
                                        </Link>
                                    </Text>
                                </Td>

                            </Tr>
                        </Tbody>
                    </Table>
                </Flex>
            </Box>
        </Flex>
    )
}