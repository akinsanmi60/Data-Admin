import { useQuery } from "@tanstack/react-query";
import DataTable from "common/DataTable";
import SearchBar from "common/Search";
import React, { useState } from "react";
import { getRequest } from "utils/apiCall";
import { queryKeys } from "utils/queryKey";
import FoundWrapper from "./style";

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

function FoundPersonPage() {
  const [dataDead, setData] = useState<DataProp[]>([]);

  const { isLoading, isError, isLoadingError, refetch, isRefetching } =
    useQuery(
      [queryKeys.getPeople],
      () => getRequest({ url: `https://dummyjson.com/users` }),
      {
        onSuccess(data) {
          setData(data?.users);
        },
        refetchOnWindowFocus: false,
      },
    );
  console.log(dataDead);
  return (
    <FoundWrapper>
      <div className="search">
        <SearchBar people={dataDead} setData={setData} refetch={refetch} />
      </div>
      {isLoading ? (
        <p>Loading</p>
      ) : isError ? (
        <p>Error occured</p>
      ) : isLoadingError ? (
        <p>Error occured while loading</p>
      ) : isRefetching ? (
        <p>Fetching..........</p>
      ) : (
        <DataTable people={dataDead} />
      )}
    </FoundWrapper>
  );
}

export default FoundPersonPage;
