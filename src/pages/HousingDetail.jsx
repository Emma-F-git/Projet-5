import { useParams } from "react-router-dom";

function HousingDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Détail du logement</h1>
      <p>ID du logement : {id}</p>
    </div>
  );
}

export default HousingDetail;
