import './styles.css';
import SearchCard from "../../components/SearchCard";
import { Outlet } from 'react-router-dom';

export default function Search() {
    return (
        <main>
            <section id="search-section">
                <SearchCard />
            </section>
            <Outlet />
        </main>
    );
}