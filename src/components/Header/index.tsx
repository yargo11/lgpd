import { Flex, HStack, Image, Text, Spacer } from '@chakra-ui/react'

export default function Header() {
    return (
        <Flex
            w={['sm', 'md', 'lg', '1150px']}
            justify='center'
            m='auto'
            h='233px'
            align='center'
        >
            <HStack w='100%'>
                <Image src='/logo-tjrn.png' />
                <Spacer />
                <HStack>
                    <Text as='h5' px='8px'>Geral</Text>
                    <Text as='h5' px='8px'>Comitê Gestor</Text>
                    <Text as='h5' px='8px'>Dados Pessoais</Text>
                    <Text as='h5' px='8px'>Implementação</Text>
                    <Text as='h5' px='8px'>Políticas</Text>
                </HStack>
            </HStack>

        </Flex>
    )
}