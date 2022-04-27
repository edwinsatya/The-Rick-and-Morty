import React from "react";
import Card from "../components/Card/Card";
import useQueryCharacters from "../hooks/useQueryCharacters";
import "./characters.css";
import { Character } from "../interface";

const Characters: React.FC = (): JSX.Element => {
  const { data, isError, isLoading } = useQueryCharacters(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  console.log(data);

  return (
    <section className="section-wrapper">
      {data.results.map((character: Character) => (
        <Card key={character.id} dataCharacter={character} />
      ))}
    </section>
  );
};

export default Characters;
