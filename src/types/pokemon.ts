export interface Pokemon {
   id: number;
   name: string;
   sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
  base_experience: number;
}