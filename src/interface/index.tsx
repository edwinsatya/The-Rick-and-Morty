export interface LocationCharacter {
  name: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  location: LocationCharacter;
  gender: string;
}

export interface CardProps {
  dataCharacter: Character;
}
