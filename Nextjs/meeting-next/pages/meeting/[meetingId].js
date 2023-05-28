import { useRouter } from "next/router";
import MeetingDetail from "../../components/meetings/MeetingDetail";
import fsPromise from 'fs/promises';

const MeetingDetailsPage = (props) => {
  return <MeetingDetail {...props.meeting} />;
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
    },
  };
};
export const getStaticPaths = async () => {
  const filePath='data.json';
  const jsonData=await fsPromise.readFile(filePath);
  const savedData=JSON.parse(jsonData);
  
  return {
    fallback: false,
    paths: savedData.map(meeting=>({params:{meetingId:meeting.id.toString()}}))
    // [{ params: { meetingId: "1" } }, { params: { meetingId: "2" } }],
  };
};
export default MeetingDetailsPage;
