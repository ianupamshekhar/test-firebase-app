import { getDatabse, ref, set } from "firebase/database";
import { app } from "firebase";
import Sammy from "../img/sammy.jpeg"
import "../css/main.css"

const db = getDatabse(app);

function App() {
  const putData = () => {
    set(ref(db, "users/anupamshekhar"), {
      id: 1,
      name: "Anupam Shekhar",
      email: "ianupamshekhar@gmail.com",
    });
  };

  return (
    <>
      <div className="wrapper">
        <h1>test-firebase-app</h1>
        <p>google doodle!</p>
        <button onClick={putData}>Put data</button>
        <img src={Sammy} alt="Sammy Image" width={200} height={200} />
      </div>
    </>
  );
}

export default App;
