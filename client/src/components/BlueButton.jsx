import { Button } from "@chakra-ui/react";

const BlueButton = ({ children, onClick }) => {
  return (
    <Button
      colorScheme='twitter'
      fontSize={16}
      fontWeight={"bold"}
      width={"full"}
      onClick={onClick}
      type="submit"
    >
      { children }
    </Button>
  );
};

export default BlueButton;
