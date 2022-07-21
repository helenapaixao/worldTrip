 import {Flex } from '@chakra-ui/react' 
import Image from "next/image";
import BannerImage from "../../assets/images/Banner.svg";

export function Banner() {
  return (
    <Flex
      align="center"
      direction="column" 
    >
      <Image

        src={BannerImage} alt="banner" />
    </Flex>
  );
}
