import { Avatar, Flex, Text } from "@chakra-ui/react";
import {
  faArrowRotateRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getFromLocalStorage from "../utils/getFromLocalStorage";
import saveToLocalStorage from "../utils/saveToLocalStorage";
import { userData } from "../constants";

export default function ProfileCard() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [office, setOffice] = useState("");

  useEffect(() => {
    const user = getFromLocalStorage("user");

    if (user == null) {
      saveToLocalStorage("user", userData);
    } else {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setOffice(user.office);
    }
  }, []);

  return (
    <Flex
      direction="column"
      gap="25px"
      align="center"
      width="40%"
      borderRadius="8px"
      padding="18px"
      paddingBottom="45px"
      border="2px solid skyblue"
    >
      <Flex alignSelf="flex-end">
        <Link to="/edit-my-profile">
          <FontAwesomeIcon icon={faArrowRotateRight} />
        </Link>
      </Flex>
      <Avatar size="xl" src="https://bit.ly/broken-link" />
      <Flex direction="column" align="center">
        <Text color="skyblue" fontSize="1.4rem">
          {firstName}
        </Text>
        <Text color="skyblue" fontSize="1.4rem">
          {lastName}
        </Text>
      </Flex>
      <Flex align="center" gap="10px">
        <FontAwesomeIcon icon={faLocationDot} width={12} height={12} />
        <Text>{office}</Text>
      </Flex>
    </Flex>
  );
}
