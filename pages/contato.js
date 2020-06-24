
import dynamic from 'next/dynamic'

const Menu = dynamic(
  () => import('../components/Menu'),
  { ssr: false }
)
import 'bootstrap/dist/css/bootstrap.min.css';


function Contato() {
    return (
        <div>
            <Menu />
            Contato
        </div>
    );
}

export default Contato