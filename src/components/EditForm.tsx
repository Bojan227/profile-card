import { Avatar, Button, Flex, Input } from "@chakra-ui/react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import getFromLocalStorage from "../utils/getFromLocalStorage";
import saveToLocalStorage from "../utils/saveToLocalStorage";
import { useNavigate } from "react-router-dom";

export default function EditForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [office, setOffice] = useState("");

  const navigate = useNavigate();

  function editUserInfo() {
    const editInfo = {
      firstName,
      lastName,
      office,
    };
    saveToLocalStorage("user", editInfo);
    navigate("/");
  }

  useEffect(() => {
    const user = getFromLocalStorage("user");

    if (user != null) {
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
      width="45%"
      borderRadius="8px"
      padding="18px"
      paddingBottom="45px"
      border="2px solid skyblue"
    >
      <Avatar size="xl" src="https://bit.ly/broken-link" />
      <Input
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        placeholder="Enter your first name"
      />
      <Input
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        placeholder="Enter your last name"
      />
      <Flex align="center" gap="10px" width="100%">
        <FontAwesomeIcon icon={faLocationDot} width={12} height={12} />
        <Input
          onChange={(e) => setOffice(e.target.value)}
          value={office}
          placeholder="Enter your office"
        />
      </Flex>

      <Flex textAlign="center" width="100%" justify="space-between">
        <Button colorScheme="red" px={6} onClick={() => navigate("/")}>
          Cancel
        </Button>
        <Button
          px={6}
          variant="outline"
          onClick={editUserInfo}
          colorScheme="teal"
          size="md"
        >
          Save
        </Button>
      </Flex>
    </Flex>
  );
}
