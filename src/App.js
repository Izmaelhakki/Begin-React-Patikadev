import './App.css';

import User from './components/User';

const friends = [{ id: 1, name: "kaan" }, { id: 2, name: "yekta" }, { id: 3, name: "ümit" }];

function App() {
  return (
    <>
      <User name="İha"
        surname={"Asmaz"}
        isLoggedIn={true}
        age={"31"}
        friends={friends} 
        address={{
          title:'Karabük/Safranbolu',
          zip:78600
        }}
        />
    </>
  );
}

export default App;
