/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Spinner,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { postRequest } from "utils/apiCall";
import { USER_LOGIN } from "utils/Api-Routes";
import AuthContext, { pushToLocalStorage } from "contexts/AuthProvider";
import toastOptions from "hooks/toast";
import FormField from "common/FormField";
import LoginWrapper, { ButtonStyled } from "./style";
// import AppHeader, { AppFooter } from "common/AppWrapper";
import ResetPasswordModal from "pages/forgotPassword";

interface LoginFormInputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(5).max(20).required(),
  })
  .required();

function OverlayTwo() {
  return (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
}

function LoginPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);
  const { setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [pshow, setPshow] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  // to view password
  const handleClickP = () => setPshow(!pshow);

  // handle login function
  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      const token = res?.token;
      const user = res?.user;
      setAuthUser({ token, user });
      pushToLocalStorage(token, user);
      const { accountType } = user;
      if (accountType === "admin") {
        navigate("/auth_profile/admin");
      } else {
        navigate("/verify_account");
      }
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });

  const onSubmit = (valueInput: any) => {
    toast.success(valueInput, toastOptions);
    mutate({ data: valueInput, url: USER_LOGIN });
  };

  return (
    <>
      {/* <AppHeader /> */}
      <LoginWrapper>
        <div className="layer">
          <div className="boxform">
            <div className="formContainer">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="hero">Sign in to People</h1>
                <div className="form">
                  <FormField label="Email">
                    <Input {...register("email")} type="email" required />
                  </FormField>
                </div>
                <div className="form">
                  <FormField label="Password">
                    <InputGroup>
                      <Input
                        {...register("password")}
                        type={pshow ? "text" : "password"}
                      />
                      <InputRightElement>
                        <p className="btn-icon" onClick={handleClickP}>
                          {pshow ? (
                            <ViewIcon color="#0E2038" />
                          ) : (
                            <ViewOffIcon color="#0E2038" />
                          )}
                        </p>
                      </InputRightElement>
                    </InputGroup>
                  </FormField>
                </div>
                <div className="forgot">
                  <p>
                    Forget password?{" "}
                    <span
                      onClick={() => {
                        setOverlay(<OverlayTwo />);
                        onOpen();
                      }}
                    >
                      Click to reset password
                    </span>
                  </p>
                </div>
                <div className="btn">
                  <ButtonStyled>
                    {isLoading ? "Loading..." : "Login"}
                  </ButtonStyled>
                  <span>{isLoading ? <Spinner size="sm" /> : null}</span>
                </div>
              </form>
            </div>
            <ResetPasswordModal
              onClose={onClose}
              isOpen={isOpen}
              overlay={overlay}
            />
          </div>
        </div>
      </LoginWrapper>
      {/* <AppFooter /> */}
    </>
  );
}

export default LoginPage;
