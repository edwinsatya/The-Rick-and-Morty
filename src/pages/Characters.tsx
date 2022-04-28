import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import useQueryCharacters from "../hooks/useQueryCharacters";
import "./characters.css";
import Pagination from "../components/Pagination/Pagination";
import { Character } from "../interface";

const Characters: React.FC = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const { data, isError, isLoading } = useQueryCharacters(page);

  const handleSetPage = (e: number) => {
    setPage(() => e);
  };

  useEffect(() => {
    if (data) {
      setTotalPage(() => data.info.pages);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="loading">
        <h1>Error from server</h1>
      </div>
    );
  }

  return (
    <section>
      <div className="content-wrapper">
        {data.results.map((character: Character) => (
          <Card key={character.id} dataCharacter={character} />
        ))}
      </div>
      <Pagination
        totalPage={totalPage}
        currentPage={page}
        onClick={handleSetPage}
      />
    </section>
  );
};

export default Characters;
