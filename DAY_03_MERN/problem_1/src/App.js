import { useState } from "react";
import { EditProfile, UserProfile } from "./Components/UserProfile";

function App() {
  const [editMode, setEditMode] = useState(false);

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  const toggleMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="App">
      <h1>User Profile App</h1>
      {editMode ? (
        <EditProfile {...user} />
      ) : (
        <UserProfile {...user} />
      )}
      <button onClick={toggleMode}>
        {editMode ? 'View Mode' : 'Edit Mode'}
      </button>
    </div>
  );
}

export default App;
