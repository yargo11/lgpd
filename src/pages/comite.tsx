import { Flex, Box, Text, HStack, Button } from '@chakra-ui/react'

export default function Comite() {
    return (
        <Flex direction='column'>
            <Box bg='#0065F3' py='50px'>
                <Flex direction='column' maxW='1150px' m='auto' px={4}>
                    <Text as='h2' pb='30px' color='#FEC810'>Comitê Gestor de Proteção de Dados (CGPD)</Text>
                    <Text as='h4' maxW='832px' textAlign='left' color='gray.50'>
                        É formado por Magistrados e Servidores designados como membros titulares e suplentes. A composição
                        do comitê teve como premissa a formação de equipe multidisciplinar com competências técnicas e a
                        representação de unidades judiciais e administrativas com a finalidade de prestarem assessoramento
                        ao Encarregado de Dados e realizar o acompanhamento do projeto de adequação à LGPD no Poder
                        Judiciário do Rio Grande do Norte.
                    </Text>
                </Flex>
            </Box>

            <Box bg="#fff" py='50px'>
                <Flex maxW='1150px' m='auto' px={4}>
                    <Flex mr='auto' direction='column' maxW='832px' w='100%'>
                        <Text as='h3' color='#FF9600' py={4}>{`<`}Atribuições{`>`}</Text>
                        <Text as='h6' color='#555' py={1}>
                            I - avaliar os mecanismos de tratamento e proteção dos dados existentes e propor políticas,
                            estratégias e metas para a conformidade do Poder Judiciário do Estado do Rio Grande do Norte com
                            as disposições da Lei nº 13.709, de 14 de agosto de 2018;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            II – formular, aprovar e monitorar o cumprimento dos princípios, diretrizes e ações para a
                            implementação do Programa de Privacidade e Proteção de Dados Pessoais, e propor sua
                            regulamentação;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            III - fornecer as instruções para a política de tratamento dos dados pessoais e respectivos
                            programas, bem como a forma em que serão tratados os dados pessoais, a aplicação da metodologia
                            de gestão de riscos no tratamento de dados e da segurança da informação;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            IV - supervisionar a execução dos planos, dos projetos e das ações realizadas pelos Grupos de
                            Trabalhos Técnicos (GTTs) para viabilizar a implantação das diretrizes previstas na Lei nº
                            13.709, de 14 de agosto de 2018;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            V - prestar orientações sobre o tratamento e a proteção de dados pessoais de acordo com as
                            diretrizes estabelecidas na Lei nº 13.709, de 14 de agosto de 2018, nas normativas do Conselho
                            Nacional de Justiça (CNJ), nas legislações específicas e nas normas internas;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            VI - apoiar as atividades do Controlador e do Encarregado, oferecendo pareceres técnicos
                            referentes às solicitações e demandas relacionadas à proteção e ao tratamento de dados pessoais,
                            bem como as demais normas correlatas;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            VII - definir o fluxo para atendimento aos direitos dos titulares dos dados pessoais e tratamento
                            de requisições e/ou reclamações recebidas pelo TJRN;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            VIII - apoiar as campanhas educativas no órgão sobre Programa de conscientização sobre a LGPD,
                            destinado a magistrados, a servidores, a trabalhadores terceirizados, a estagiários e residentes
                            judiciais, das áreas administrativas e judiciais de primeira e segunda instâncias, e
                            extrajudiciais;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            IX - promover o intercâmbio de informações sobre a proteção de dados pessoais com outros órgãos
                            públicos.
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            X - promover e coordenar a realização do relatório de impacto de tratamento de dados pessoais,
                            quando requerido pela Autoridade Nacional de Proteção de Dados, a ser disponibilizado ao
                            Encarregado;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            XI - supervisionar a implantação ou adequação das soluções tecnológicas aos requisitos da LGPD,
                            inclusive de projetos de automação e inteligência artificial voltados para a proteção de dados
                            pessoais.
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            O CGPD deverá observar sempre que necessário às diretrizes da Política de Segurança da Informação
                            do Poder Judiciário do Estado do Rio Grande do Norte, definidas na Resolução nº 23/2019-TJ, de 21
                            de agosto de 2019 e atuar de forma coordenada com as diretrizes do Comitê Gestor de Segurança da
                            Informação.
                        </Text>
                        <Text as='h3' color='#FF9600' py={4}>{`<`}Composição{`>`}</Text>
                        <Text as='h6' color='#555' py={1}>
                            Art. 1º Ficam designados os(as) Magistrados(as) e Servidores(as) abaixo nominados(as) para
                            comporem o Comitê Gestor de Proteção de Dados Pessoais (CGPD):
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            I — A Juíza Auxiliar da Presidência do Tribunal de Justiça, PATRÍCIA GONDIM MOREIRA PEREIRA,
                            como membro titular e o Juiz JOÃO AFONSO MORAIS PORDEUS como suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            II — O Juiz Presidente do Comitê Gestor do PJE, DIEGO DE ALMEIDA CABRAL, como membro titular
                            e a Juíza TATIANA SOCOLOSKI PERAZZO PAZ DE MELO como membro suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            III — O Juiz Auxiliar da Corregedoria-Geral de Justiça, MARIVALDO DANTAS DE ARAÚJO, como
                            membro titular e o Juiz PAULO LUCIANO MAIA MARQUES como membro suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            IV — O servidor LINDOLFO NETO DE OLIVEIRA SALES, representante da Secretaria Geral, como
                            membro titular e o servidor RENATO DE MELO FURTADO como membro suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            V — A servidora MARIA CECÍLIA BUSSONI, representante da Secretaria de Administração, como
                            membro titular e a servidora ORLIGEANE OLIVEIRA MOURA MEDEIROS como membro suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            VI — A servidora ANDRE IA RAMOS DA SILVA HOLANDA LEITE, representante da Secretaria de
                            Comunicação Social, como membro titular e o servidor JULIANO FREIRE ALVES DE SOUZA como
                            membro suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            VII — A servidora MARISTELA RODRIGUES DE QUEIROZ FREIRE, representante da Secretaria de
                            Gestão Estratégica, como membro titular e a servidora PATRYCIA KARINA DE MELO ONOFRE ARAÚJO
                            como membro suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            VIII — O servidor GERÂNIO GOMES DA SILVA, representante da Secretaria de Tecnologia Da
                            Informação e Comunicação, como membro titular e o servidor GILVAN DE SOUSA GALVÃO JÚNIOR
                            como membro suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            IX — A servidora WALTEÍZE GOMES BARBOSA, representante da Secretaria Judiciária, como membro
                            titular e o servidor MICHELLSON COSTA DE LIMA CORDEIRO como membro suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            X — O servidor LEONARDO MEDEIROS JÚNIOR, representante do Núcleo de Assessoramento Especial
                            à Presidência, como membro titular e o servidor LUIZ MARIZ DE ARAÚJO FILHO como membro
                            suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            XI — O servidor ELVÉCIO DE ASSIS PEREIRA JÚNIOR, representante da Assessoria Jurídica, como
                            membro titular e o servidor KLEBER SOARES DE OLIVEIRA SANTOS como membro suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            XII — A servidora TERESA RAQUEL SOUSA PAIVA DE OLIVEIRA, representante da Ouvidoria, como
                            membro titular e a servidora ROBERTA VERÍSSIMO DE OLIVEIRA CARLOS como membro suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            XIII — A servidora KLÍCIA DE HOLANDA MAIA MONTEIRO CAVALCANTI, representante do Departamento
                            de Recursos Humanos, como membro titular e a servidora ROXANA AGLAÊ FERREIRA LIMA MARTINS
                            como membro suplente;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            XIV — A servidora ADRIANA CARLA SILVA DE OLIVEIRA, representante da Biblioteca Desembargador
                            Mattos Serejo, como membro titular;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            XV — A servidora KESSIANY CARDOSO DO VALE, representante da Escola da Magistratura do Rio
                            Grande do Norte (ESMARN), como membro titular e o servidor FRANCISCO SEVERINO NETO como
                            membro suplente.
                        </Text>
                        <Text as='h6' color='#555' py={4}>
                            A Juíza PATRÍCIA GONDIM MOREIRA PEREIRA atuará como coordenadora, o Juiz DIEGO DE ALMEIDA
                            CABRAL atuará como sub- coordenador e a servidora ADRIANA CARLA SILVA DE OLIVEIRA exercerá
                            as funções de assessoramento aos trabalhos realizados pelo CGPD.
                        </Text>
                        <HStack >
                            <Button fontSize={['xs','sm','md']} w='50%' colorScheme='teal' color='#fff' as='a' target='_blank' href='/pdfs/PORTARIA Nº 1065, DE 15 DE OUTUBRO DE 2021 - republicado.pdf'>Portaria N° 1065</Button>
                            <Button fontSize={['xs','sm','md']} w='50%' colorScheme='teal' color='#fff' as='a' target='_blank' href='/pdfs/PORTARIA Nº 1066, DE 15 DE OUTUBRO DE 2021.pdf'>Portaria N° 1066</Button>
                        </HStack>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}