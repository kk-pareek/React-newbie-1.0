import MeetupList from '../components/meetups/MeetupList';
import {useState} from 'react';
import {useEffect} from 'react';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch('https://my-react-app-one-default-rtdb.firebaseio.com/meetups.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const meetups = [];
          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };
            meetups.push(meetup);
          }
          setLoadedMeetups(meetups);
          setIsLoading(false);
        });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}

export default AllMeetupsPage;
