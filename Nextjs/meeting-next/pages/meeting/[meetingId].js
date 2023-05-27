import { useRouter } from "next/router";
import MeetingDetail from "../../components/meetings/MeetingDetail";
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
const MeetingDetailsPage = (props) => {
  return <MeetingDetail {...props.meeting} />;
};
export const getStaticProps = async (context) => {
  console.log(context);
  const meetingId = context.params.meetingId;
  const meeting = MyMeetings.find((m) => m.id == meetingId);
  return {
    props: {
      meeting: meeting,
    },
  };
};
export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [{ params: { meetingId: "1" } }, { params: { meetingId: "2" } }],
  };
};
export default MeetingDetailsPage;
