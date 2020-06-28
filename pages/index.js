import Head from 'next/head';
import Menu from '../components/Menu';

import { Jumbotron, Container } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Home() {
    return (
        <div>
            <Head>
                <title>Home - Celke</title>
                <meta name="description" content="Site de... Sobre ..." />
                <meta name="author" content="Maurício Lacerda" />
            </Head>
            <Menu />
            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                        padding:80px 0;
                        background-color:#474e54;
                        color:#fff;
                        margin-bottom: 0rem;
                    }
                        .circulo{
                            width:140px;
                            height:140px;
                            background-color:#fed136;
                            font-size:52px;
                            padding-top:30px;
                        }                    

                        .centralizar{
                            margin:0 auto !important;
                            float: none !important;
                        }
                    `}
                </style>
                <Container className='text-center'>
                    <div>
                        <h1 className='display-4'>Serviços da Empresa</h1>
                        <p className='lead pb-4'>Temos a solução que a sua empresa precisa!</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="dolly" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço 1</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        </div>
                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="project-diagram" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço 2</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        </div>
                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="dolly-flatbed" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço 3</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Container className='text-center teste'>


            </Container>
        </div>
    );
}

export default Home;