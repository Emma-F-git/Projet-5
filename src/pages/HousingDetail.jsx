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

  const locationParts = logement.location.split(" - ");
  const region = locationParts[0];
  let city = locationParts[1];
  city = city.replace(/\s*\d+[a-zA-Z]*$/, "").trim();

  return (
    <div>
      <SlideShow pictures={logement.pictures} />
      <div className="housing-header">
        <div className="info-logement">
          <h1 id="title-logement">{logement.title}</h1>
          <p className="location">
            {city}, {region}
          </p>
          <TagList tags={logement.tags} />
        </div>
        <div className="rating-host">
          <HostCard host={logement.host} />
          <RatingStars rating={logement.rating} />
        </div>
      </div>

      <div id="collapseHousingDetail">
        <Collapse title="Description" variant="housing">
          {logement.description}
        </Collapse>
        <Collapse title="Équipements" variant="housing">
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
