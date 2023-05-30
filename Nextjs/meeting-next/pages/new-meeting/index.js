import { useRouter } from "next/router";
import MeetingForm from "../../components/meetings/MeetingForm";
import Head from "next/head";
const NewMeetingPage = () => {
  const router = useRouter();
  const addMeetingHandler = async (data) => {
    console.log(data);
    const response = await fetch("/api/new-meeting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const myResponse = await response.json();
    console.log(myResponse);
    alert(myResponse.message);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Add new Meeting</title>
        <meta
          name="description"
          content="Add new Meeting to your meeting list"
        />
      </Head>
      <MeetingForm onAddMeeting={addMeetingHandler} />
    </>
  );
};
export default NewMeetingPage;
