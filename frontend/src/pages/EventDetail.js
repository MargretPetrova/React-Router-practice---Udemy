import { useParams } from "react-router-dom";

const EventDetail=(params)=>{
  
    return <><h1>Event Detail Page</h1>
    <p> id:{useParams().eventId}</p>
    </>
};
export default EventDetail;