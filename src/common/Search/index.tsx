import React from "react";
import { Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormField from "common/FormField";
import { SearchPprop, schema, FormDataProp } from "./type";
import SearchBox, { ButtonStyled, inputStyles } from "./style";

function SearchBar({ people, setData, refetch }: SearchPprop) {
  const { register, handleSubmit, reset } = useForm<FormDataProp>({
    resolver: yupResolver(schema),
  });

  const submit = async (data: FormDataProp) => {
    console.log(data);
    const lowerCaseFirstname = data?.firstName.toLowerCase();
    const lowerCaseLastname = data?.lastName.toLowerCase();

    const fiteredPerson = people?.filter(person =>
      Object.values(person)
        .toString()
        .toLowerCase()
        .includes(lowerCaseFirstname && lowerCaseLastname),
    );

    setData(fiteredPerson);
    reset();
  };

  const clearFilters = () => {
    reset();
    refetch();
  };

  return (
    <SearchBox>
      <form onSubmit={handleSubmit(submit)}>
        <div className="box">
          <div className="boxA">
            <div>
              <FormField label="First Name">
                <Input sx={inputStyles} {...register("firstName")} />
              </FormField>
            </div>
            <div>
              <FormField label="Last Name">
                <Input sx={inputStyles} {...register("lastName")} />
              </FormField>
            </div>
            <div className="btnbox">
              <div className="btn">
                <ButtonStyled>Search</ButtonStyled>
                <ButtonStyled onClick={clearFilters}> Cancel</ButtonStyled>
              </div>
            </div>
          </div>
        </div>
      </form>
    </SearchBox>
  );
}

export default SearchBar;
