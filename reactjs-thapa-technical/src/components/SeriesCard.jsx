export const SeriesCard = (props) => {
  const { id, img_url, name, rating, description, cast, genre, watch_url } = props.data;
  return (
    <li key={props}>
      <div>
        <img
          src={img_url}
          alt={name}
          height="50%"
          width="50%"
        />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {description}</p>
      <p>Caste: {cast}</p>
      <p>Genre: {genre}</p>
      {/* <button>{age >= 18 ? "Watch Now!" : "Not available!"}</button> */}
      <a href={watch_url} target="_blank">
        Watch Now!
      </a>
    </li>
  );
};
