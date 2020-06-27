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
                <style>
                    {`.servicos{
                        padding:80px 0;
                        background-color:#474e54;
                        color:#fff;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className='text-center'>
                    <h1 className='display-4'>Serviços da Empresa</h1>
                    <p className='lead'>Temos a solução que a sua empresa precisa!</p>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Home;