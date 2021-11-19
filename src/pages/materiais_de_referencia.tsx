import { Flex, Box, Text, Link } from '@chakra-ui/react'

export default function MateriaisDeReferencia() {
    return (
        <Flex direction='column'>
            <Box bg='#0065F3' py='50px'>
                <Flex direction='column' maxW='1150px' m='auto' px={4}>
                    <Text as='h2' pb='30px' color='#FEC810'>MATERIAIS DE REFERÊNCIA</Text>
                </Flex>
            </Box>

            <Box bg="#fff" py='50px'>
                <Flex maxW='1150px' m='auto' px={4}>
                    <Flex mr='auto' direction='column' maxW='832px' w='100%'>
                        <Text as='h3' color='#FF9600' py={4}>{`<`}Lei Geral de Proteção de Dados Pessoais{`>`}</Text>
                        <Text py={1}>
                            <Link color='blue.400' href='http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm'>
                                • Lei nº 13.709, de 14 de agosto de 2018
                            </Link>
                            (LGPD)
                        </Text>
                        <Text py={1}>
                            <Link color='blue.400' href='http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm'>
                                • Lei nº 12.965, de 23 de abril de 2014
                            </Link>
                            (Marco Civil da Internet)
                        </Text>
                        <Text py={1}>
                            <Link color='blue.400' href='http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm'>
                                • Lei nº 12.527, de 18 de novembro de 2011
                            </Link>
                            (Lei de Acesso à Informação);
                        </Text>
                        <Text py={1}>
                            <Link color='blue.400' href='https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=celex%3A32016R0679'>
                                •  General Data Protection Regulation
                            </Link>
                            - Lei Européia de Proteção de Dados (GDPR);
                        </Text>
                        <Link color='blue.400' href=''>
                            Lei nº 9.507, de 12 de novembro de 1997 (Habeas Data);
                        </Link>
                        <Text py={1}>
                            <Link color='blue.400' href='https://atos.cnj.jus.br/atos/detalhar/69'>
                                • Resolução CNJ nº 102, de 15 de dezembro de 2009,
                            </Link>
                            do Conselho Nacional de Justiça, dispõe sobre a regulamentação da publicação de informações
                            alusivas à gestão orçamentária e financeira, aos quadros de pessoal e respectivas estruturas
                            remuneratórias dos tribunais e conselhos;
                        </Text>
                        <Text py={1}>
                            <Link color='blue.400' href='https://atos.cnj.jus.br/atos/detalhar/3428'>
                                • Resolução CNJ nº 331, de 20 de agosto de 2020
                            </Link>
                            , do Conselho Nacional de Justiça, que instituiu a Base Nacional de Dados do Poder Judiciário -
                            DataJud como fonte primária de dados do Sistema de Estatística do Poder Judiciário - SIESPJ
                            para os tribunais indicados nos incisos II a VII do art. 92 da Constituição Federal;
                        </Text>
                        <Text py={1}>
                            <Link color='blue.400' href='https://atos.cnj.jus.br/atos/detalhar/3489'>
                                • Resolução nº 334, de 9 de julho de 2020
                            </Link>
                            , do Conselho Nacional de Justiça que institui diretrizes e normas de Gestão de Memória e de
                            Gestão Documental e dispõe sobre o Programa Nacional de Gestão Documental e Memória do Poder
                            Judiciário – Proname;
                        </Text>
                        <Text py={1}>
                            <Link color='blue.400' href='https://atos.cnj.jus.br/atos/detalhar/3668'>
                                • Resolução CNJ nº 363/2021, de 12 de janeiro de 2021
                            </Link>
                            ( estabelece medidas para o processo de adequação à Lei Geral de Proteção de Dados Pessoais
                            a serem adotadas pelos Tribunais);
                        </Text>
                        <Text py={1}>
                            <Link color='blue.400' href='https://atos.cnj.jus.br/atos/detalhar/2236'>
                                • Resolução nº 215/2015 do Conselho Nacional de Justiça - CNJ, de 16 de dezembro de 2015
                            </Link>
                            , que estabeleceu as regras sobre o acesso à informação, no âmbito do Poder Judiciário;
                        </Text>
                        <Text py={1}>
                            <Link color='blue.400' href='https://atos.cnj.jus.br/atos/detalhar/3432'>
                                • Recomendação nº 73 de 20 de agosto de 2020,
                            </Link>
                            , do Conselho Nacional de Justiça, sobre a criação de grupo de trabalho para implementação
                            das ações relacionadas a Lei Federal n.º 13.709, de 14 de agosto de 2018 (LGPD);
                        </Text>
                        <Text py={1}>
                            <Link color='blue.400' href='https://www.tjro.jus.br/images/6_MINUTA_RESOLU%C3%87%C3%83O_______2017-PR-Acesso_a_Informa%C3%A7%C3%A3o_-_vers%C3%A3o_PUBLICA%C3%87%C3%83O_Site.pdf'>
                                • Resolução nº 017/2017-PR, de 2 de junho de 2017
                            </Link>
                            , do Poder Judiciário do Estado de Rondônia, que dispõe a Política de Acesso à Informação em
                            obediência à Lei n. 12.527, de 18 novembro de 2011, no âmbito do Poder Judiciário do Estado
                            de Rondônia;
                        </Text>
                        <Text py={1}>
                            <Link color='blue.400' href='https://www.tjro.jus.br/corregedoria/index.php/atos-normativos/provimentos-conjuntos/77-provimentos-conjuntos/provimentos-conjuntos-2016/1755-002-2016-pr-cg'>
                                • Provimento Conjunto nº 002/2016-PR-CG, de 29 de março de 2016
                            </Link>
                            , que dispõe sobre a instauração de sindicância e processo administrativo disciplinar relativo
                            a fatos ocorridos no âmbito do Poder Judiciário;
                        </Text>

                        <Text as='h3' color='#FF9600' py={4}>{`<`}Legislações relacionadas{`>`}</Text>

                        <Text py={1}>
                            <Link color='blue.400' href='https://www.tjrs.jus.br/novo/lgpd/normatividade-e-capacitacao/normas/'>
                                • https://www.tjrs.jus.br/novo/lgpd/normatividade-e-capacitacao/normas/
                            </Link>
                        </Text>

                        <Text as='h3' color='#FF9600' py={4}>{`<`}Atos normativos internos{`>`}</Text>

                        <Text as='h6' color='#555' py={1}>
                            • Portaria nº 65/2021, 07 de janeiro de 2021 - Grupo de Trabalho com a finalidade de proceder
                            às adequações advindas da implementação da Lei nº 13.709, de 14 de agosto de 2018 (Lei Geral
                            de Proteção de Dados), no Poder Judiciário do Estado do Rio Grande do Norte.
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            • Institui o Comitê Gestor de Proteção de Dados e designação de competência e atribuições.
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            • Designa magistrados e servidores para comporem o Comitê Gestor de Proteção de Dados (CGPD)
                            no âmbito do Poder Judiciário do Estado do Rio Grande do Norte.
                        </Text>


                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}