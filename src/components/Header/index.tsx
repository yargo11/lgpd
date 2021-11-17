import { HStack, Image, Text, Spacer, useBreakpointValue } from '@chakra-ui/react'

import Menu from './Menu'

export default function Header() {

    const isWideScreen = useBreakpointValue({ base: false, lg: true })

    return (
        <HStack
            maxW='1150px'
            px={4}
            h='143px'
            m='auto'
        >
            <Image src='/logo-tjrn.png' alt='logo' maxW='288px'/>
            <Spacer />
            <Menu showMenu={isWideScreen} />
        </HStack>
    )
}