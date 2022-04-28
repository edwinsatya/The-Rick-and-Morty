import "./card.css";
import { CardProps } from "../../interface";
import { useMemo } from "react";

const Card = (props: CardProps): JSX.Element => {
  const { id, name, status, species, location, gender, image } =
    props.dataCharacter;

  const getColorStatus = useMemo(() => {
    if (status.toLowerCase() === "alive") {
      return "green";
    } else if (status.toLowerCase() === "dead") {
      return "red";
    } else {
      return "black";
    }
  }, [status]);

  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={image} alt={`character-${id}`} />
        <div className="desc-wrapper">
          <div className="section">
            <h2>{name}</h2>
            <div className="with-status">
              <div
                className="mini-circle"
                style={{
                  backgroundColor: getColorStatus,
                }}
              ></div>
              <p>
                {status} - {species}
              </p>
            </div>
          </div>
          <div className="section">
            <p>
              <span>Last known location:</span>
            </p>
            <p>{location.name}</p>
          </div>
          <div className="section">
            <p>
              <span>Gender:</span>
            </p>
            <p>{gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
