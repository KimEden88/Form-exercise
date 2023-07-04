import Form from './components/form';
import './App.css';

function App() {
  const questions = [
    {
      id: 1,
      text: 'What is your name?',
    },
    {
      id: 2,
      text: 'How old are you?',
    },
    {
      id: 3,
      text: 'Where are you from?',
    },
  ];

  return (
    <>
      <Form questions={questions} />
    </>
  );
}

export default App;
