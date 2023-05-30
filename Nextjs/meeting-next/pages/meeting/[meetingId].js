import MeetingDetail from "../../components/meetings/MeetingDetail";
import fsPromise from 'fs/promises';
import Head from "next/head";

const MeetingDetailsPage = (props) => {
  return <>
  <Head>
    <title>{props.meeting.title}</title>
    <meta name="description" content={props.meeting.description}/>
  </Head>
  <MeetingDetail {...props.meeting} />
  </>
};




export const getStaticProps = async (context) => {
  console.log(context);
  const meetingId = context.params.meetingId;
  const filePath='data.json';
  const jsonData=await fsPromise.readFile(filePath);
  const savedData=JSON.parse(jsonData);
  const meeting = savedData.find((m) => m.id == meetingId);
  return {
    props: {
      meeting: meeting,
    },revalidate:10
  };
};
export const getStaticPaths = async () => {
  const filePath='data.json';
  const jsonData=await fsPromise.readFile(filePath);
  const savedData=JSON.parse(jsonData);
  
  return {
    fallback: 'blocking',
    paths: savedData.map(meeting=>({params:{meetingId:meeting.id.toString()}}))
    // [{ params: { meetingId: "1" } }, { params: { meetingId: "2" } }],
  };
};
export default MeetingDetailsPage;
