/* eslint-disable no-nested-ternary */
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Box,
  Text,
  DrawerCloseButton,
  Avatar,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BoxAvatar } from "./style";

type Prop = {
  navigationModel: {
    path: string;
    icon: JSX.Element;
    title: string;
  }[];
};
function DrawerExample({ navigationModel }: Prop) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen}>
        <Box display="flex" color="#0E2038">
          <FaBars />
        </Box>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent color="#0E2038">
          <DrawerCloseButton
            marginTop="20"
            color="red"
            fontWeight="900"
            fontSize="13"
            outline="none"
          />
          <BoxAvatar>
            <div className="avatar">
              <Wrap>
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </Wrap>
              <Wrap>
                <p>Akintunde</p>
                <p>Akinsanmi</p>
              </Wrap>
            </div>
          </BoxAvatar>
          <DrawerBody>
            {navigationModel.map(routeLink => {
              return (
                <Box key={routeLink.title}>
                  <Link to={routeLink.path} onClick={onClose}>
                    <Box display="flex" borderBottomWidth="1px" padding="2">
                      <Text paddingRight="3" marginTop="1">
                        {routeLink.icon}
                      </Text>
                      <Text>{routeLink.title}</Text>
                    </Box>
                  </Link>
                </Box>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
