// 1. styled 쓰는 예시

import styled from "@emotion/styled"
import './global.css'


const Heading = styled.h1`
    color : var(--color-background-warning-default)
`

const styleExample = () => {
    return <Heading>예시!</Heading>
}

export default styleExample


// 2. ThemeProvider 써서 적용시켜보기

// import { ThemeProvider } from "@emotion/react"
// import styled from "@emotion/styled"
// import theme from './theme.js'
// import './global.css'

// const Container = styled.div`
//     color: ${({ theme }) => theme.colors.text};
// `

// const styleExample = () => {
//     return (
//         <ThemeProvider theme={theme}>
//             <Container>적용시켜보기</Container>
//         </ThemeProvider>
//     )
// }

// export default styleExample