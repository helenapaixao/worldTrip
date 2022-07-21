import { Flex } from "@chakra-ui/react";
import Logo from "../../assets/logo/Logo.svg";
import { Banner } from "./banner";
import Image from "next/image";

export function Header() {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"  
        padding={27}
      >
        <Image height={45.92} width={184.06}
          
          src={Logo} alt="logo" />
      </Flex>
      <Banner />
    </>
  );
}
