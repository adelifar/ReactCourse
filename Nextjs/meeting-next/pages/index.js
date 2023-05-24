import MeetingList from "../components/meetings/MeetingList";
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
const HomePage = () => {
  return  <MeetingList meetings={MyMeetings}/>
};
export default HomePage;
