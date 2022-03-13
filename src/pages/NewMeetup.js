import { useNavigate, Navigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  async function addMeetupHandler(meetupData) {
    await fetch('https://react-getting-started-ee719-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    // push 메서드는 새 페이지를 페이지 스택에 쌓는다.
    // push를 사용하면 뒤로가기 버튼을 사용해 돌아갈수 있다.
    // 하지만 양식을 제출한 이후에는 이것이 적합하지 않으므로 replace를 사용
    navigate('/', { replace: true });

    // v6 에서의 앞으로, 뒤로 가기 사용방법 변화 
    // <button onClick={() => navigate(-2)}>Go 2 pages back</button>
    // <button onClick={() => navigate(-1)}>Go back</button>
    // <button onClick={() => navigate(1)}>Go forward</button>
    // <button onClick={() => navigate(2)}>Go 2 pages forward</button>
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;

