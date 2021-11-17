import { Box, Flex, Text, Spacer, HStack, Image } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box py='100px'>
            <Flex maxW='1150px' m='auto' px={4} flexWrap='wrap' fontSize={['0.6rem', '0.75rem', '0.857rem']}>
                <HStack align='center' display='flex' >
                    <Text>Política e termos de privacidade</Text>
                    <Spacer />
                    <Text>Portal do Judiciário do RN</Text>
                    <Spacer />
                    <Text textAlign='right' maxW='585px'>
                        Tribunal de Justiça do Estado do Rio Grande do Norte - Praça Sete de Setembro, nº 34, Cidade Alta,
                        Natal/RN, CEP 59025-300 - (84) 3673-8000
                    </Text>
                    <Spacer />
                    <Image src='/TJRN-icon.png' alt='TJRN' />
                </HStack>
            </Flex>
        </Box>
    )
}