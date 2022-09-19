import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/react-query";
import * as yup from "yup";

export type FormDataProp = {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  personSt: string;
  personLga: string;
};

type DataProp = {
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
  remarks: string;
  reward: string;
  details: string;
};

export type SearchPprop = {
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<any, unknown>>;
  people: DataProp[];
  setData: React.Dispatch<React.SetStateAction<DataProp[]>>;
};

export const schema = yup
  .object({
    firstName: yup.string(),
    lastName: yup.string(),
  })
  .required();

export const DataPropValue = {
  id: "",
  firstName: "",
  lastName: "",
  maidenName: "",
  bloodGroup: "",
  age: "",
  gender: "",
  email: "",
  image: "",
  address: {
    address: "",
    city: "",
    postalcode: "",
  },
  birthDate: "",
  height: "",
  weight: "",
  hair: {
    color: "",
    type: "",
  },
  eyeColor: "",
};
