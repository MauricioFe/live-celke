import dynamic from 'next/dynamic'

const Menu = dynamic(
  () => import('../components/Menu'),
  { ssr: false }
)
import 'bootstrap/dist/css/bootstrap.min.css';
function Sobre() {
    return (
        <div>
            <Menu />
            Sobre a Celke
        </div>
    );
}

export default Sobre