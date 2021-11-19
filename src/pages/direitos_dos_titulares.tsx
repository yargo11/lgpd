import { Flex, Box, Text } from '@chakra-ui/react'

export default function DireitosDosTitulares() {
    return (
        <Flex direction='column'>
            <Box bg='#0065F3' py='50px'>
                <Flex direction='column' maxW='1150px' m='auto' px={4}>
                    <Text as='h2' pb='30px' color='#FEC810'>Direitos dos titulares</Text>
                    <Text as='h4' maxW='832px' textAlign='left'>
                        Titular é a pessoa natural (pessoa viva) a quem se referem os dados pessoais que são objetos de
                        tratamento, ou seja, é a pessoa física a qual os dados pertencem.
                    </Text>
                </Flex>
            </Box>
            <Box bg="#fff" py='50px'>
                <Flex maxW='1150px' m='auto' px={4}>
                    <Flex mr='auto' direction='column' maxW='832px' w='100%'>
                        <Text as='h3' color='#FF9600' py={4}>{`<`}Como o Titular dos dados pode exercer seus direitos?{`>`}</Text>
                        <Text as='h6' color='#555' py={1}>
                            A demanda do titular dos dados pode ser realizada por meio de formulário específico e por
                            meio do e-mail (protecaodedados@tjrn.jus.br).
                        </Text>
                        <Text as='h3' color='#FF9600' py={4}>{`<`}Como é realizado o tratamento desses dados pessoais
                            pelo Poder Judiciário do Rio Grande do Norte?{`>`}</Text>
                        <Text as='h6' color='#555' py={1}>
                            O <strong>tratamento</strong> é qualquer ação que se faça com os dados pessoais ou dados
                            pessoais sensíveis. A LGPD aponta como tratamento toda operação realizada com dados pessoais,
                            como as que se referem à coleta, produção, recepção, classificação, utilização, acesso,
                            reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação,
                            avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou
                            extração conforme previsto pelo inciso X do artigo 5º.
                        </Text>
                        <Text as='h3' color='#FF9600' py={4}>{`<`}Quem são os agentes de tratamento?{`>`}</Text>
                        <Text as='h6' color='#555' py={1}>
                            Os agentes de tratamento de dados pessoais são o controlador e o operador.
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            <strong>Controlador</strong>: é a pessoa natural ou jurídica, de direito público ou privado a quem compete
                            definir a finalidade específica do tratamento dos dados pessoais, as ações e as principais
                            decisões referentes às operações durante o ciclo de vida. Entre essas decisões, incluem-se
                            as instruções fornecidas aos Operadores para a realização de um determinado tratamento de
                            dados pessoais;
                        </Text>
                        <Text as='h6' color='#555' py={1}>
                            <strong>Operador</strong>: é a pessoa natural ou jurídica, de direito público ou privado que realiza o
                            tratamento em nome do Controlador, em todas as instâncias da instituição ou no âmbito de
                            contratos ou instrumentos congêneres firmados com ele;
                        </Text>
                        <Text as='h3' color='#FF9600' py={4}>{`<`}O que é a Autoridade Nacional de Proteção de Dados
                            (ANPD)?{`>`}</Text>
                        <Text as='h6' color='#555' py={1}>
                            A Autoridade Nacional de Proteção de Dados Pessoais é o órgão da administração pública, ao
                            qual caberá zelar pelos dados pessoais, regulamentar, fiscalizar o cumprimento da Lei nas
                            entidades de direito público e privado e aplicar sanções em caso de descumprimento de suas
                            determinações.
                            Confira o texto completo da Lei Geral de Proteção de Dados Pessoais - LGPD e a Política de
                            Privacidade e Proteção de Dados Pessoais para navegação no site do PJRN.
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}