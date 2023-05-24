import styles from "./MeetingDetail.module.css";
const MeetingDetail = (props) => {
  return (
    <>
      <section className={styles.detail}>
        <img src={props.image} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </>
  );
};
export default MeetingDetail;
