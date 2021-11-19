import {
    HStack, VStack, Text, Icon, Button, useDisclosure, Box, Link,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
} from '@chakra-ui/react'
import { FiMenu, FiChevronDown } from 'react-icons/fi'

import React from 'react'

interface MenuProps {
    showMenu: boolean
}

export default function MenuLGPD({ showMenu = true }: MenuProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            {showMenu ?
                <HStack>
                    <Text as='h5' px='8px'><Link href='/'>Geral</Link></Text>
                    <Text as='h5' px='8px'><Link href='/comite'>Comitê Gestor</Link></Text>
                    <Menu>
                        <MenuButton as={Link}>
                            <Text as='h5' px='8px'><Link href='/'>Dados Pessoais <Icon as={FiChevronDown}></Icon></Link></Text>
                        </MenuButton>
                        <MenuList bg='rgba(40, 40, 40, 0.75)'>
                            <MenuItem as={Link} href='/direitos_dos_titulares'
                                _focus={{ background: 'rgba(40, 40, 40, 0.9)' }}
                                _hover={{ background: 'rgba(40, 40, 40, 0.9)' }}
                            >
                                <Text as='h5' px='8px'>Direitos dos Titulares</Text>
                            </MenuItem>
                            <MenuItem as={Link} href='/encarregado_pelo_tratamento'
                                _hover={{ background: 'rgba(40, 40, 40, 0.9)' }}
                            >
                                <Text as='h5' px='8px'>Encarregado pelo Tratamento</Text>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Text as='h5' px='8px'><Link href='/implementacao'>Implementação</Link></Text>
                    <Text as='h5' px='8px'><Link href='/politicas'>Políticas</Link></Text>
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
                        size='xs'
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