import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail=(params)=>{
    const data = useRouteLoaderData("event-details");
    
  
    return <><EventItem event={data.event}/>
    </>
};
export default EventDetail;

export async function loader({request, params}){
    
    const id = params.eventId;
    const response = await fetch(`http://localhost:8080/events/${id}`);

    if (!response.ok) {
        return json({message:'Could not fetch details for that event'}, {status:500})
    }else{
        return response;
    }
}