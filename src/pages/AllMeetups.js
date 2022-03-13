import { useEffect, useState } from 'react';
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-ee719-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const meetups = Object.keys(data).map(key => {
        return { id: key, ...data[key] };
      })
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);



  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    )
  } else {
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
      </section>
    )
  }
}
export default AllMeetupsPage;

