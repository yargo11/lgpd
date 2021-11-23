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
                    <Button as={Link} href='https://docs.google.com/forms/d/1q0YSZMdBtdgm6dIxzOUAywnxhxFY_i923kDLnrtirnE/viewform?pli=1&pli=1&pli=1&edit_requested=true'
                        target='_blank' colorScheme='blue' w='182px'>Formulário</Button>
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
                        <Tbody borderBottomWidth='3px' borderColor='blue.300'>
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
                        <Tbody borderBottomWidth='3px' borderColor='blue.300'>
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
                        <Tbody borderBottomWidth='3px' borderColor='blue.300'>
                            <Tr>
                                <Td rowSpan={4}><strong>26/07</strong></Td>
                            </Tr>
                            <Tr>
                                <Td>Tema: Qual a importância da TI na implementação da LGPD?</Td>
                                <Td>
                                    Dr. Adriano Araújo<br />
                                    Aarão Lyra<br />
                                    Gerânio Gomes
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
                                        Link de acesso ao Youtube: <Link color='blue.500' href='https://youtu.be/t8vibeaE5YY'>
                                            https://youtu.be/t8vibeaE5YY
                                        </Link>
                                    </Text><br />
                                    <Text as='h6' color='#555' py={1}>
                                        Link da matéria: <Link color='blue.500' href='http://intranet.tjrn.jus.br/comunicacao/noticias/1721-mes-da-protecao-de-dados-webinario-discute-importancia-da-ti-na-implementacao-da-lgpd'>
                                            http://intranet.tjrn.jus.br/comunicacao/noticias/1721-mes-da-protecao-de-dados-webinario-discute-importancia-da-ti-na-implementacao-da-lgpd
                                        </Link>
                                    </Text>
                                </Td>
                            </Tr>
                        </Tbody>
                        <Tbody borderBottomWidth='3px' borderColor='blue.300'>
                            <Tr>
                                <Td rowSpan={4}><strong>02/08</strong></Td>
                            </Tr>
                            <Tr>
                                <Td>Tema: LGPD, o que eu magistrado tenho a ver com isso?</Td>
                                <Td>
                                    Dra. Tatiana Socoloski<br />
                                    Dr. Rosivaldo Toscano<br />
                                    Dr. José Undário Andrade
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
                                        Link de acesso ao Youtube: <Link color='blue.500' href='https://youtu.be/qsPJcOBq0Xc'>
                                            https://youtu.be/qsPJcOBq0Xc
                                        </Link>
                                    </Text><br />
                                    <Text as='h6' color='#555' py={1}>
                                        Link da matéria: <Link color='blue.500' href='http://intranet.tjrn.jus.br/comunicacao/noticias/1758-mes-da-protecao-de-dados-webinario-discute-os-impactos-da-lgpd-para-atividade-da-magistratura'>
                                            http://intranet.tjrn.jus.br/comunicacao/noticias/1758-mes-da-protecao-de-dados-webinario-discute-os-impactos-da-lgpd-para-atividade-da-magistratura
                                        </Link>
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Link da matéria: <Link color='blue.500' href='http://intranet.tjrn.jus.br/comunicacao/noticias/1743-mes-da-protecao-de-dados-impactos-da-lgpd-para-atividade-da-magistratura-e-tema-de-webinario'>
                                            http://intranet.tjrn.jus.br/comunicacao/noticias/1743-mes-da-protecao-de-dados-impactos-da-lgpd-para-atividade-da-magistratura-e-tema-de-webinario
                                        </Link>
                                    </Text>
                                </Td>
                            </Tr>
                        </Tbody>
                        <Tbody borderBottomWidth='3px' borderColor='blue.300'>
                            <Tr>
                                <Td rowSpan={4}><strong>16/08</strong></Td>
                            </Tr>
                            <Tr>
                                <Td>Tema: Relação entre a LGPD e a Lei de Acesso à informação.</Td>
                                <Td>
                                    Leonardo Medeiros Júnior<br />
                                    Francisco Nascimento Sousa
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
                                        Link de acesso ao Youtube: <Link color='blue.500' href='https://youtu.be/hdgX68dNGH8'>
                                            https://youtu.be/hdgX68dNGH8
                                        </Link>
                                    </Text><br />
                                    <Text as='h6' color='#555' py={1}>
                                        Link da matéria: <Link color='blue.500' href='http://intranet.tjrn.jus.br/comunicacao/noticias/1783-mes-da-protecao-de-dados-especialistas-consideram-que-a-lgpd-e-a-lei-de-acesso-a-informacao-sao-complementares'>
                                            http://intranet.tjrn.jus.br/comunicacao/noticias/1783-mes-da-protecao-de-dados-especialistas-consideram-que-a-lgpd-e-a-lei-de-acesso-a-informacao-sao-complementares
                                        </Link>
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Link da matéria: <Link color='blue.500' href='http://intranet.tjrn.jus.br/comunicacao/noticias/1770-relacoes-entre-lgpd-e-lei-de-acesso-a-informacao-sao-tema-do-mes-da-protecao-de-dados-nesta-segunda-16'>
                                            http://intranet.tjrn.jus.br/comunicacao/noticias/1770-relacoes-entre-lgpd-e-lei-de-acesso-a-informacao-sao-tema-do-mes-da-protecao-de-dados-nesta-segunda-16
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