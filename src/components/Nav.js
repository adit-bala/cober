import React from "react";

export default function Nav() {
  return (
    <Box>
      <Flex display="flex" mt="20px" ml="30px" mr="30px" justify="flex-end">
        <Box>
          <Image src="logo.png" boxSize='50px' align></Image>
        </Box>
        <Spacer />
        <ButtonGroup variant="ghost" margin="8px" spacing="5">
          <Button _hover={{background: "gray.200"}}>Home</Button>
          <Button _hover={{background: "gray.200"}}>About</Button>
          <Button variant="solid"
            backgroundColor="#204988"
            textColor="white"
            _hover={{
              background: "gray.300",
              color: "#204988",
            }}
            >
              Sign In
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}