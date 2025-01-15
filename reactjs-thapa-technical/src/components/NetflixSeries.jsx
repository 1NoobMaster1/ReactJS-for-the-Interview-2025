// Named Export.
import seriesData from "../apis/seriesData.json";
import { SeriesCard } from "./SeriesCard";
const NetflixSeries = () => {
  // let age = 18;
  // const name = "Stranger Things";
  // const rating = "9.0";
  // const summary =
  //   "Stranger Things is a TV series about a group of friends in the 1980s who witness supernatural events and government secrets in their small Indiana town.";
  //   const generateGenre = () => {
  //     // return "Thriller!"
  //     const genre = "Thriller!";
  //     return genre;
  //   }

  return (
    <>
      <ul>
        {seriesData.map((currentElement) => (
          <SeriesCard key={currentElement.id} data={currentElement} />
        ))}
      </ul>
    </>
  );
};

// Default Export.
export default NetflixSeries; // In default export it can be import by any name.

export const Header = () => {
  return <p>copyright @ayankhan</p>;
};

export const Footer = () => {
  return <p>copyright @ayankhan</p>;
};
