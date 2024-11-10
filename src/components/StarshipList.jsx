import StarshipCard from './StarshipCard';  

const StarshipList = ({ starships }) => {
  return (
    <div>
            {/* to show the defult data we need a map */}
            {starships.length > 1 && starships.map(starship => (
                <>
                <p>Number of results: {starships.length}</p>
                <StarshipCard key={starship.name} starship={starship} />
                </>
            ))}
            {/* to show the data after searching */}
            <StarshipCard key={starships.name} starship={starships} />
        </div>
    );
};

export default StarshipList;

