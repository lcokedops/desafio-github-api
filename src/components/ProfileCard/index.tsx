import './styles.css';
import { ProfileDTO } from '../../models/profile';

type Props = {
    profile: ProfileDTO;
}

export default function ProfileCard({ profile }: Props) {
    return (
        <div className="profile-card-content">
            <img src={profile.avatar_url} alt={profile.name} />
            <div className="profile-card-content-right">
                <h3>Informações</h3>
                <p className="profile-card-info">Perfil: {profile.html_url}</p>
                <p className="profile-card-info">Seguidores: {profile.followers}</p>
                <p className="profile-card-info">Localidade: {profile.location}</p>
                <p className="profile-card-info">Nome: {profile.name}</p>
            </div>
        </div>
    );
}