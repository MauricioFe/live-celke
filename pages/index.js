import dynamic from 'next/dynamic'

const Menu = dynamic(
  () => import('../components/Menu'),
  { ssr: false }
)
import 'bootstrap/dist/css/bootstrap.min.css';
function HomePage() {
    return (
        <div>
            <Menu />
            Home
        </div>
    );
}

export default HomePage