import {
    Text, Link, Button, HStack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react'

import React, { useEffect } from "react";
import * as ReactGA from 'react-ga';



export function CookiesButton() {
    const [cookieEnabled, setCookieEnabled] = React.useState('false');

    const { isOpen, onOpen, onClose } = useDisclosure()

    const btnRef = React.useRef()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCookieEnabled(localStorage.getItem('GA-tjrn'));
        };
        onOpen();
    }, [])

    function fecharDrawer() {

        if (typeof window !== 'undefined') {
            localStorage.setItem('GA-tjrn', 'true');
        }
console.log('tomtom')
        onClose();
    }

    if (typeof window !== 'undefined' && localStorage.getItem('GA-tjrn')) {
        ReactGA.initialize('UA-38668588-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    return cookieEnabled ? (
        <></>
    ) : (
        <>
            <Drawer
                isOpen={isOpen}
                placement="bottom"
                onClose={onClose}
                finalFocusRef={btnRef}
                
            >
                <DrawerOverlay />
                <DrawerContent bg='#fff'>
                    <DrawerCloseButton color='blue.400' />
                    <DrawerHeader
                        display='flex'
                        justifyContent='center'
                        color='#555'
                    >
                        Política de Privacidade
                    </DrawerHeader>

                    <DrawerBody>

                        <Text
                            fontSize={['0.6rem', '0.75rem', '0.9rem']}
                            fontWeight='700'
                            color='#555'
                        >
                            Nós usamos cookies para melhorar sua experiência de navegação. Ao utilizar o nosso site, você
                            concorda com a política de monitoramento de cookies. Para ter mais informações sobre como isso é
                            feito, acesse nossa <Link href='/politicas' color='blue.400'>
                                Política de Privacidade
                            </Link>
                            . Se você concorda, clique em ACEITO. Se você não concorda, clique
                            em NÃO ACEITO e seus dados de navegção não serão armazenados.
                        </Text>
                    </DrawerBody>

                    <DrawerFooter display='flex' justifyContent='center'>
                        <HStack>
                            <Button type="button" onClick={fecharDrawer}
                                maxW='220px'
                                w='50%'
                                border='none'
                                borderRadius='10px'
                                p='1rem'
                                colorScheme='green'
                                fontSize={['0.75rem', '1rem']}
                                fontWeight='700'
                                color='#2e2e2e'
                                mx='0.5rem'
                            > Aceito </Button>
                            <Button type="button" onClick={onClose}
                                maxW='220px'
                                w='50%'
                                border='none'
                                borderRadius='10px'
                                p='1rem'
                                colorScheme='red'
                                fontSize={['0.75rem', '1rem']}
                                fontWeight='700'
                                color='#2e2e2e'
                                mx='0.5rem'
                            > Não aceito </Button>
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

