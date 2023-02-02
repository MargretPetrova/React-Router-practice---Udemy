import { Link } from "react-router-dom";
const DUMMY_EVENTS = [
    {
        id: 'a1',
        title: 'first Event'
    },
    {
        id: 'a2',
        title: 'second event'
    }
];

const Events = () => {
    return <><h1>Events Page</h1>
    <ul>
        {DUMMY_EVENTS.map(event=> <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
        </li>)}
    </ul>
    </>
};
export default Events;