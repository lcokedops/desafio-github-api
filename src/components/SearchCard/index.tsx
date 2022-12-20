import './styles.css';
import Button from '../Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchCard() {

    const [profileName, setProfileName] = useState<string>();

    function handleInputChange(event: any) {
        setProfileName(event.target.value);
    }

    return (
        <div className="search-card-content">
            <h2>Encontre um perfil Github</h2>
            <form>
                <input
                    name="searchName"
                    type="text"
                    placeholder="Usuário Github"
                    onChange={handleInputChange}
                />
                <div>
                    <Link to={`profile/${profileName}`} >
                        <Button text="Econtrar" />
                    </Link>
                </div>
            </form>
        </div>
    );
}