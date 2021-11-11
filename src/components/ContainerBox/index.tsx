import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'toasted-notes/node_modules/@types/react'

interface ContainerProps {
    children: ReactNode
}

export default function ContainerBox({ children, ...rest }: ContainerProps) {
    return (
        <Flex w={['sm', 'md', 'lg', 'xl', '1320px']} m='auto' direction='column'>
            {children}
        </Flex>
    )
}