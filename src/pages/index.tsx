import { Wrap, WrapItem, Center, Text, VStack, Image, Box, Flex, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import ContainerBox from '../components/ContainerBox'

export default function Home() {
  return (
    <Flex direction='column'>
      {/* Intro-Home */}
      <ContainerBox>
        <Wrap display='flex' justify='center' m='auto'>
          <WrapItem maxW='570px'>
            <Center mb='170px'>
              <VStack >
                <Text as='h1' textAlign='left'>
                  A Lei Geral de Proteção de Dados
                  é fundamental para fortalecer os
                  nossos direitos
                </Text>
                <Text fontSize='1.5rem' fontWeight='400' lineHeight='32px' color='#FEC810'>
                  Aqui você conhecerá como o Poder Judiciário do RN trabalha para proteger os dados de todos os usuários
                  de seus serviços e colaboradores
                </Text>
              </VStack>
            </Center>
          </WrapItem>
          <WrapItem maxW='570px'>
            <Center>
              <Image src='/logo-campanha.png' alt='LGPD' w='100%' maxW='685px' mt='-170px' />
            </Center>
          </WrapItem>
        </Wrap>
      </ContainerBox>

      {/* O que é a LGPD */}

      <Box bg='#fff' py='100px' >
        <ContainerBox>
          <Text color='#FF80ED' fontSize='2.6rem' fontWeight='800' px={4}>
            {`<`}O que é a LGPD?{`>`}
          </Text>
          <Text
            color='#08018A'
            fontSize='20px'
            textAlign='left'
            px={4}
          >
            A Lei nº 13.709 de 14 de agosto de 2018, nominada como Lei Geral de Proteção de Dados Pessoais (LGPD) é a
            legislação que disciplina sobre o tratamento de dados pessoais por pessoa física ou jurídica de direito
            público ou privado, seja em meio digital ou físico, objetivando a proteção dos direitos fundamentais de
            liberdade e privacidade e o livre desenvolvimento da personalidade da pessoa natural. Consequentemente, por
            meio da proteção dos dados pessoais de cada indivíduo se busca preserva sua vida privada, a intimidade, a
            honra e a sua imagem conforme preconiza o artigo 5º, inciso X da Constituição Federal brasileira.
          </Text>
        </ContainerBox>
      </Box>

      {/*  Fundamentos */}
      <Box py='100px'>
        <ContainerBox>
          <Wrap display='flex' justify='center' m='auto' spacing='30px'>
            <WrapItem maxW='570px'>
              <Center>
                <Image src='/imagem_ilustracao.png' alt='Fundamentos da LGPD' mt='-100px' />
              </Center>
            </WrapItem>
            <WrapItem maxW='570px'>
              <Center>
                <VStack >
                  <Box>
                    <Text as='h1' textAlign='left' color='#FF80ED' fontSize='1.75rem'>
                      Fundamentos Contitucionais da LGPD
                    </Text>
                    <List>
                      <ListItem>Estão expressamente estabelecidos na LGPD os seguintes fundamentos:</ListItem>
                      <ListItem>I - o respeito à privacidade;</ListItem>
                      <ListItem>II - a autodeterminação informativa;</ListItem>
                      <ListItem>III - a liberdade de expressão, de informação, de comunicação e de opinião política</ListItem>
                      <ListItem>IV - a inviolabilidade da intimidade, da honra e da imagem;</ListItem>
                      <ListItem>VI - a livre iniciativa, a livre concorrência e a defesa do consumidor; e</ListItem>
                      <ListItem>VII - os direitos humanos, o livre desenvolvimento da personalidade, a dignidade e o
                        exercício da cidadania pelas pessoas naturais.</ListItem>
                      <ListItem>A LGPD está dividida em 10 capítulos e 65 artigos.</ListItem>

                    </List>
                  </Box>
                  <Box>
                    <Text as='h1' textAlign='left' color='#FF80ED' fontSize='1.75rem'>
                      O que são dados pessoais?
                    </Text>
                    <Text>
                      Dados pessoais são definidos como todos os dados relacionados a uma pessoa natural (pessoa viva)
                      identificada ou identificável, ou seja, são todos os tipos de dados capazes de identificar de
                      forma direta ou indireta uma pessoa física. Assim, a LGPD protege não só a informação que
                      identifica uma pessoa natural, como também aquela que, cruzada com outras, permite a identificação
                      da pessoa natural.
                    </Text>
                  </Box>
                  <Box>
                    <Text as='h1' textAlign='left' color='#FF80ED' fontSize='1.75rem'>
                      O que são dados pessoais sensíveis?
                    </Text>
                    <Text>
                      Dados pessoais sensíveis, que são dados pessoais sobre origem racial ou étnica, convicção
                      religiosa, opinião política, filiação a sindicato ou a organização de Dados pessoais sensíveis são
                      classificados como aqueles que podem trazer um risco ou grave dano a uma pessoa. São definidos pela
                      lei, como aqueles que revelam à origem racial ou étnica, a convicção religiosa, a opinião política,
                      a filiação a um sindicato ou a uma organização de caráter religioso, filosófico ou político, dado
                      referente à saúde ou à vida sexual e os de origem genética ou biométrica.
                    </Text>
                  </Box>
                </VStack>
              </Center>
            </WrapItem>

          </Wrap>
        </ContainerBox>
      </Box>

      {/* LGPD na midia */}

      <Box bg='#fff' py='100px'>
        <ContainerBox>

            <Text color='#FF80ED' fontSize='2.6rem' fontWeight='800'>
              {`<`}LGPD na mídia{`>`}
            </Text>

            {/* <Center display='flex' justifyContent='center' w='full'>
              <SimpleGrid columns={[1, null, null, 3]} spacing='16'>
                <Center w="270px" h="80px" borderColor="#00ffff" borderWidth='2px'>
                  Box 1
                </Center>
                <Center w="270px" h="80px" borderColor="#FFB52C" borderWidth='2px'>
                  Box 2
                </Center>
                <Center w="270px" h="80px" borderColor="#FD04FE" borderWidth='2px'>
                  Box 3
                </Center>
              </SimpleGrid>
            </Center> */}


            <Wrap justify='space-between' w='full'>
              <WrapItem>
                <Center w="270px" h="80px" borderColor="#00ffff" borderWidth='2px'>
                  Box 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="270px" h="80px" borderColor="#FFB52C" borderWidth='2px'>
                  Box 2
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="270px" h="80px" borderColor="#FD04FE" borderWidth='2px'>
                  Box 3
                </Center>
              </WrapItem>
            </Wrap>
        </ContainerBox>
      </Box>

    </Flex>
  )
}
