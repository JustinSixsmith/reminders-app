import "./App.css";
import ReminderList from "./components/ReminderList";

const reminders = [
  {
    id: 1,
    title: "Reminder 1",
  },
];

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
