export type TableProp = {
  people: {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    bloodGroup: string;
    age: string;
    gender: string;
    email: string;
    image: string;
    address: {
      address: string;
      city: string;
      postalcode: string;
    };
    birthDate: string;
    height: number;
    weight: number;
    hair: {
      color: string;
      type: string;
    };
    eyeColor: string;
  }[];
};
