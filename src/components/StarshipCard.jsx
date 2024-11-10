const StarshipCard = ({ starship }) => {
  return (
    <div className="starship-card">
      <h3>{starship.name}</h3>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Class:</strong> {starship.starship_class}</p>
    </div>
  );
};

export default StarshipCard;
