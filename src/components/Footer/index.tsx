import { Box, Flex, Text, Link, Image, Wrap, WrapItem, useBreakpointValue } from '@chakra-ui/react'

export default function Footer() {

    const isWideScreen = useBreakpointValue({ base: false, sm: false, md: true })

    return (
        <Box py='100px' bg='#08018A' color='gray.50'>
            <Flex maxW='1150px' m='auto' px={4} flexWrap='wrap' fontSize={['0.6rem', '0.75rem', '0.857rem']}>
                <Wrap
                    spacing='30px'
                    sx={{
                        'ul': {
                            justifyContent: 'center'
                        }
                    }}>
                    <WrapItem minW='280x'>
                        <Text><Link href='/politicas' textDecoration='underline' transition='color 0.2s' _hover={{ color: 'cyan' }}>Política e termos de privacidade</Link></Text>
                    </WrapItem>
                    <WrapItem minW='280x'>
                        <Text>Portal do Judiciário do RN</Text>
                    </WrapItem>
                    <WrapItem maxW='585px' w='100%'>
                        <Text textAlign={['center', null, 'right']}>
                            Tribunal de Justiça do Estado do Rio Grande do Norte - Av. Jerônimo Câmara, 2000 - Nossa Sra. de Nazaré, Natal - RN, CEP 59060-300
                        </Text>
                    </WrapItem>
                    <WrapItem minW='280x'>
                        <Image src='/TJRN-icon.png' alt='TJRN' />
                    </WrapItem>
                </Wrap>
            </Flex>
        </Box>
    )
}