import {
    HStack, VStack, Text, Icon, Button, useDisclosure, Box,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import React from 'react'

interface MenuProps {
    showMenu: boolean
}

export default function Menu({ showMenu = true }: MenuProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            {showMenu ?
                <HStack>
                    <Text as='h5' px='8px'>Geral</Text>
                    <Text as='h5' px='8px'>Comitê Gestor</Text>
                    <Text as='h5' px='8px'>Dados Pessoais</Text>
                    <Text as='h5' px='8px'>Implementação</Text>
                    <Text as='h5' px='8px'>Políticas</Text>
                </HStack>
                :
                <>
                    <Button ref={btnRef} variant="ghost" colorScheme='cyan' onClick={onOpen}>
                        <Icon as={FiMenu} w={26} h={26} />
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement="left"
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <Box bg='gray.800'>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader>LGPD</DrawerHeader>

                                <DrawerBody>
                                    <VStack color='tj_dark_blue'>
                                        <Text as='h5' px='8px'>Geral</Text>
                                        <Text as='h5' px='8px'>Comitê Gestor</Text>
                                        <Text as='h5' px='8px'>Dados Pessoais</Text>
                                        <Text as='h5' px='8px'>Implementação</Text>
                                        <Text as='h5' px='8px'>Políticas</Text>
                                    </VStack>
                                </DrawerBody>

                                <DrawerFooter>
                                    <Button variant="outline" mr={3} onClick={onClose}>
                                        Cancel
                                    </Button>
                                </DrawerFooter>
                            </DrawerContent>
                        </Box>
                    </Drawer>
                </>
            }
        </>
    )
}