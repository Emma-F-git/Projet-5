function HostCard({ host }) {
  return (
    <div className="host">
      <span>{host.name}</span>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
}

export default HostCard;
