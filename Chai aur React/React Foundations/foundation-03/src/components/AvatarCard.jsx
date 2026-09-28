function AvatarCard({ avatar, level = "Rookie" }) {
  return (
    <article>
      <h4>{avatar.id}</h4>
      <h3>{avatar.name}</h3>
      <p>{avatar.role}</p>
      <p>Level: {level}</p>
      <div>{avatar.initials}</div>
      <hr />
    </article>
  );
}

export default AvatarCard;
