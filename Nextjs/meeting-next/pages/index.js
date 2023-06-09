// import { useEffect, useLayoutEffect, useState } from "react";
import Head from "next/head";
import MeetingList from "../components/meetings/MeetingList";
import fsPromise from "fs/promises";
const MyMeetings = [
  {
    id: 1,
    image: "https://baamarc.com/fa/wp-content/uploads/2022/07/%D8%AE.jpg",
    title: "First meeting",
    address: "address of first meeting",
    description: "First meeting description",
  },
  {
    id: 2,
    image: "https://baamarc.com/fa/wp-content/uploads/2022/07/%D8%AE.jpg",
    title: "Second meeting",
    address: "address of Second meeting",
    description: "Second meeting description",
  },
];
const HomePage = (props) => {
  // const [loadedMeetings,setLoadedMeetings]=useState([]);
  // useEffect(()=>{
  //   //send request to server
  //   setLoadedMeetings(MyMeetings);
  // },[])
  return (
    <>
      {" "}
      <Head>
        <title>Meeting list</title>
        <meta name="description" content="view all list of your meetings"/>
      </Head>
      <MeetingList meetings={props.meeting} />
    </>
  );
};

//pre render
//SSG static site generation
// export const getStaticProps=async ()=>{
//   //fetch data from server
//   return{
//     props:{
//       meeting:MyMeetings
//     },revalidate:3600   //seconds
//   }
// } //build

//SSR server side rendering
export const getServerSideProps = async (context) => {
  //runs on server
  //fetch data from server
  const req = context.req;
  const res = context.res;
  const filePath = "data.json";
  const jsonData = await fsPromise.readFile(filePath);
  const savedData = JSON.parse(jsonData);

  return {
    props: {
      meeting: savedData,
    },
  };
};
export default HomePage;
