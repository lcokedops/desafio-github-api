import './styles.css';
import * as profileService from "../../../services/profile-service";
import ProfileCard from "../../../components/ProfileCard";
import { useNavigate, useParams } from 'react-router-dom';
import { ProfileDTO } from '../../../models/profile';
import { useEffect, useState } from 'react';

export default function Profile() {

    const params = useParams();

    const navigate = useNavigate();

    const [profile, setProfile] = useState<ProfileDTO>();

    useEffect(() => {
        profileService.findByName(String(params.profileName))
        .then(response => {
            setProfile(response.data);
        })
        .catch(() => {
            navigate("/search/*");
        });
    }, [profile]);

    return (
        <section id="profile-section">
            {
                profile &&
                <ProfileCard profile={profile}/>
            }
        </section>
    );
}