import {
  Box,
  Grid,
  GridItem,
  AspectRatio,
  Text,
  Flex,
  Img,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import ProductItem from "../components/product_item";
import CommentBox from "../components/CommentBox";
import AddComment from "../components/AddComment";
import React, { useState, useEffect, useCallback } from 'react';

const DetailPage = () => {
  const param = useParams();
  const id = param.video_id;

  const [product,setProduct] = useState([])

  const fetchProduct = useCallback(async() => {
    const response = await fetch(`http://localhost:3000/video/${id}/product`)
    const product = await response.json()
    setProduct(product)
  })
  
  useEffect(() => {
    fetchProduct()
  },[fetchProduct]);


  const [comment,setComment] = useState([])

  const fetchComment = useCallback(async() => {
    const response = await fetch(`http://localhost:3000/video/${id}/comment`)
    const comment = await response.json()
    setComment(comment)
  })
  
  useEffect(() => {
    fetchComment()
  },[fetchComment]);

  const [video,setVideo] = useState({})

  const fetchVideo = useCallback(async() => {
    try {
      const response = await fetch(`http://localhost:3000/video/${id}`)
      const video = await response.json()
      setVideo(video)
      console.log(video[0].video_url);
    } catch (e) {
      console.error(e)
    }

    
  })

  useEffect(() => {
    fetchVideo()
  },[fetchVideo]);

  return (
    <Grid
      templateAreas={`"header header header"
                    "prod main comment "`}
      gridTemplateRows={"64px 1fr"}
      gridTemplateColumns={"250px 1fr 350px"}
      gapx="1"
      color="blackAlpha.700"
      fontWeight="bold"
      height={"100vh"}
    >
      <GridItem
        p={"16px"}
        alignItems={"center"}
        display={"flex"}
        borderBottom={"1px"}
        borderColor={"gray.100"}
        area={"header"}
      >
        <Link to="/">
          <Img
            width={"150px"}
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v3/play/kratos/c1ff6020.jpg"
            alt=""
          />
        </Link>
      </GridItem>
      <GridItem
        overflowY={"auto"}
        borderRight={"1px"}
        borderColor={"gray.100"}
        area={"prod"} 
      >
        {product.map((p) => {
          return (
            <ProductItem
            name= {p.title}
            price={p.price} 
            imgUrl={p.img_url}
            />
          )
        })}
      </GridItem>
      <GridItem p={"16px"} height={"100%"} area={"main"}>
        <AspectRatio my={"auto"} ratio={16 / 9}>
          <iframe
            height={"100%"}
            width={"100%"}
            src= {
              "https://www.youtube.com/embed/qBtNMRJ4Itg"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <Text fontWeight={"black"} mt={"24px"} as="h2" className="">
          Deskripsi
        </Text>
        <Text mt={"8px"} fontWeight={"normal"} className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut provident
          error, cumque ab blanditiis possimus enim corporis sint aspernatur.
          Beatae?
        </Text>
      </GridItem>
      <GridItem
        borderLeft={"1px"}
        borderColor={"gray.100"}
        bg=""
        display="flex"
        flexDirection={"column"}
        area={"comment"}
        overflowY={"hidden"}
      >
        <Text boxShadow={"sm"} p="16px" fontSize={"18px"}>
          Comments
        </Text>
        <Box overflow={"auto"} flexGrow={1}>
          <Flex direction={"column"} px={"16px"}>
            {comment.map((c) => {
              return (
                <CommentBox 
                username={c.username}
                comment={c.comment}
                />
              );
            })}
          </Flex>
        </Box>
        <Flex
          position={"relative"}
          borderTop={"1px"}
          p={"16px"}
          borderColor={"gray.100"}
          flexDirection="column"
          gap={"8px"}
          className=""
        >
          <AddComment id={id}/>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default DetailPage;
