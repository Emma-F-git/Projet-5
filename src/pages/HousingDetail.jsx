import { useParams } from "react-router-dom";
import SlideShow from "../components/ui/SlideShow";
import data from "../data/HousingData.json";
import Collapse from "../components/ui/Collapse";
import TagList from "../components/housing/TagList";
import HostCard from "../components/housing/HostCard";
import RatingStars from "../components/housing/RatingStars";
import NotFound from "./NotFound";
import "../styles/HousingDetail.scss";

function HousingDetail() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <NotFound />;
  }

  return (
    <div>
      <SlideShow pictures={logement.pictures} />
      <section>
        <div className="title-location">
          <h1 id="title-logement">{logement.title}</h1>
          <p className="location">{logement.location}</p>
        </div>

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
