import {useNavigate} from 'react-router-dom';
import AddNewMeetupForm from '../components/meetups/AddNewMeetupForm';

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    return fetch(
        'https://my-react-app-one-default-rtdb.firebaseio.com/meetups.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(meetupData),
        },
    ).then(() => {
      navigate('/');
    });
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <AddNewMeetupForm addNewMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;
