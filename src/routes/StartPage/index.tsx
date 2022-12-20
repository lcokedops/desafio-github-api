import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './styles.css';

export default function StartPage() {
    return (
        <main>
            <section id="start-section">
                <h2 className="page-title">Start Page</h2>
                <h3 className="page-subtitle">DevSuperior - Escola de programação</h3>
                <div>
                    <Link to="/search">
                        <Button text="Começar"></Button>
                    </Link>
                </div>
            </section>
        </main>

    );
}