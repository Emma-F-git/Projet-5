import "../../styles/HostCard.scss";

function HostCard({ host }) {
  const [firstName, lastName] = host.name.split(" ");
  return (
    <div className="host">
      <div className="host-name">
        <span className="first-name">{firstName}</span>
        <span className="last-name">{lastName}</span>
      </div>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
}

export default HostCard;
