import { useState } from 'react';
import User from './components/User';

const friends1 = [{ id: 1, name: "kaan" }, { id: 2, name: "yekta" }, { id: 3, name: "ümit" }];

function App() {

  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(31);
  const [friends, setFriends] = useState(["ahmet", "murat"]);
  const [address, setAdress] = useState({ title: 'safranbolu', zip: 78600 });

  return (
    <div className='App'>

      <h1>Merhaba {name}! </h1>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge("25")}>Change age</button>
      <h2>{age}</h2>
      <hr />
      <br></br>

      <h2>Set Friends</h2>
      {friends.map((friend, index) => (
        <div className={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "ayşe"])}>Add New Friend</button>

      <hr />
      <br></br>

      <h2>Address</h2>
      <div>{address.title} {address.zip} </div>

      <button onClick={() => setAdress({ ...address, title: 'ankara' })}>Change Address</button>

      <br></br>
      <hr />
      <User name="İha"
        surname={"Asmaz"}
        isLoggedIn={true}
        age={"31"}
        friends1={friends}
        address={{
          title: 'Karabük/Safranbolu',
          zip: 78600
        }}
      />

      <br></br>
      <hr />

    </div>
  );
}

export default App;
