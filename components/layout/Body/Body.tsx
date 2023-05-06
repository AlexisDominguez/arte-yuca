import React, { FC, ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'

interface IBodyProps {
  children: ReactNode
}

const Body: FC<IBodyProps> = ({ children }) => {
  return (
    <body>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </body>
  )
}
export default Body
