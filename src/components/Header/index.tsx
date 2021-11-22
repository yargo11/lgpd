import { HStack, Box, Image, Spacer, Flex, useBreakpointValue, Link } from '@chakra-ui/react'

import Menu from './Menu'

export default function Header() {

    const isWideScreen = useBreakpointValue({ base: false, lg: true })

    return (
        <Box bg='#08018A' color='gray.50'>
            <HStack
                maxW='1150px'
                px={4}
                h='143px'
                m='auto'
                w='100%'
            >
                <Flex>
                    <Link href='/'><Image src='/logo-tjrn.png' alt='logo' maxW='288px' w='100%' /></Link>
                </Flex>
                <Spacer />
                <Menu showMenu={isWideScreen} />
            </HStack>
        </Box>
    )
}