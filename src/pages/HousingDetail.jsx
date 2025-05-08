import { useParams } from "react-router-dom";
import SlideShow from "../components/layout/SlideShow";
import data from "../data/HousingData.json";
import Collapse from "../components/ui/Collapse";

function HousingDetail() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) return <p>Logement introuvable.</p>;

  return (
    <div>
      <SlideShow pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <Collapse title="Description">{logement.description}</Collapse>

      <Collapse title="Équipements">
        <ul>
          {logement.equipments.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
      </Collapse>
      {/*A ajouter ville, host, rating... */}
    </div>
  );
}

export default HousingDetail;
