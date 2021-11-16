import { Flex, HStack, Image, Text, Spacer, useBreakpointValue } from '@chakra-ui/react'

import Menu from './Menu'

export default function Header() {

    const isWideScreen = useBreakpointValue({ base: false, lg: true })

    return (
        <Flex
            // w={['sm', 'md', 'lg', '1150px']}
            maxW='1150px'
            px={4}
            justify='center'
            m='auto'
            h='233px'
            align='center'
        >
            <HStack>
                <Image src='/logo-tjrn.png' alt='logo' />
                <Spacer />
                <Menu showMenu={isWideScreen} />
            </HStack>

        </Flex>
    )
}