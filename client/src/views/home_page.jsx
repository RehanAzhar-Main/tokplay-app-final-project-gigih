import {
  Box,
  InputGroup,
  Input,
  Grid,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React, { useState, useEffect, useCallback } from 'react';

import Video from "../components/Video";

const HomePage = () => {
  const [video,setVideo] = useState([])

  const fetchVideo = useCallback(async() => {
    const response = await fetch('http://localhost:3000/video/')
    const video = await response.json()
    setVideo(video)
  })

  useEffect(() => {
    fetchVideo()
  },[fetchVideo]);

  return (
    <Box mx={"80px"}>
      <Flex alignItems={"center"} py={"16px"} gap={4}>
        <img
          width={"150px"}
          src="https://assets.tokopedia.net/assets-tokopedia-lite/v3/play/kratos/c1ff6020.jpg"
          alt=""
        />
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Cari" />
        </InputGroup>
      </Flex>

      <Grid
        mb={"32px"}
        justifyContent={"space-between"}
        // width={1000}
        gap={"16px"}
        templateColumns="repeat(auto-fit, 240px)"
        templateRows="repeat(auto-fit,400px)"
      >
        {video.map((vid) => {
          return (
            <Video
              key={vid._id}
              id={vid._id}
              title={vid.title}
              desc={vid.account_name}
              thumbnail_url={
                `${vid.img_url}`
              }
            />
          )
        })}
      </Grid>
    </Box>
  );
};

export default HomePage;
