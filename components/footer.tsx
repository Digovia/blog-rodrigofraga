import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-c_cinza border-t-4 border-accent-7">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-white">
           Desenvolvido por Rodrigo Fraga, usando Next.JS
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/Digovia"
              className="mx-3 bg-c_preto text-c_amarelo font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Meu GitHub
            </a>
            <a
              href="https://github.com/Digovia"
              className="mx-3 bg-c_preto text-c_amarelo font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Meu Linkedin
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
