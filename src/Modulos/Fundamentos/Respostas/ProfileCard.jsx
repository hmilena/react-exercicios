const ProfileCard = ({ name, age, job }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{job}</p>
        </div>
    );
}

export default ProfileCard;

//uso
<ProfileCard name="Milena" age={38} job="Frontend Eng" />