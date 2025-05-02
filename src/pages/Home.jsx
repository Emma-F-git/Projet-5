import Banner from "../components/ui/Banner";
import Card from "../components/ui/Card";
import data from "../data/HousingData.json";

function Home() {
  return (
    <div>
      <Banner
        image="/src/assets/homeBanner.svg"
        text="Chez vous, partout et ailleurs"
      />
      <div className="card-list">
        {data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
