import Head from 'next/head';
import Menu from '../components/Menu';

import {Jumbotron, Container} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
    return (
        <div>
            <Head>
                <title>Home - Celke</title>
                <meta name="description" content="Site de... Sobre ..."/>
                <meta name="author" content="Maurício Lacerda"/>
            </Head>
            <Menu />
            <Jumbotron fluid className="servicos">
                <Container>
                    <h1 className=''>Serviços da Empresa</h1>
                    <p>Temos a solução que a sua empresa precisa!</p>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Home;