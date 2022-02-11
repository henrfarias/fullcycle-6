import { GetServerSideProps, NextPage } from 'next'

type Pagina1PageProps = {
  name: string
}

const Pagina1Page: NextPage<Pagina1PageProps> = (props) => {
  return <h1>Hello world {props.name}</h1>
}

export default Pagina1Page

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      name: 'Full Cycle',
    },
  }
}
