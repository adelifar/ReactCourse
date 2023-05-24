import MeetingForm from "../../components/meetings/MeetingForm";
const NewMeetingPage=()=>{
    const addMeetingHandler=data=>{
        console.log(data);
    }
    return  <MeetingForm onAddMeeting={addMeetingHandler}/>
}
export default NewMeetingPage;