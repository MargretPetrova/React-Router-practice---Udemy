// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
//DONE
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import EditEvent from "./pages/EditEvent";
import EventDetail, { loader as detailLoader, action as actionDelete } from "./pages/EventDetail";
import Events, { loader as eventLoader } from "./pages/Events";
import Home from "./pages/Home";
import NewEvent, {action as actionAdd} from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRootLayout";
import Error from "./pages/Error";
import {action as methodAction} from "./components/EventForm"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRootLayout />, children: [
          {
            index: true, element: <Events />,
            loader: eventLoader,
          },
          {
            path: ":eventId", id: "event-details", loader: detailLoader, children: [
              { index:true,action:actionDelete , element: <EventDetail />, },
              { path: "edit",action: methodAction, element: <EditEvent /> }
            ]
          },
          { path: "new",action: methodAction, element: <NewEvent /> },

        ]
      }
    ]
  },

])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
