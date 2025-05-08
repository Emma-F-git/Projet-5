import { useParams } from "react-router-dom";
import SlideShow from "../components/ui/SlideShow";
import data from "../data/HousingData.json";
import Collapse from "../components/ui/Collapse";
import TagList from "../components/housing/TagList";
import HostCard from "../components/housing/HostCard";
import RatingStars from "../components/housing/RatingStars";

function HousingDetail() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) return <p>Logement introuvable.</p>;

  return (
    <div>
      <SlideShow pictures={logement.pictures} />
      <section>
        <h1>{logement.title}</h1>

        <TagList tags={logement.tags} />

        <div className="hostRating">
          <HostCard host={logement.host} />
          <RatingStars rating={logement.rating} />
        </div>
      </section>
      <div id="collapseHousingDetail">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipement, index) => (
              <li key={`${equipement}-${index}`}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default HousingDetail;
