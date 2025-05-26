import "./App.css";
import MyButton from "./MyButton";
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const user = {
    name: "Avatar",
    imageUrl: "https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg",
    imageSize: 150,
  };
  let image;
  const showUserImage = true;
  if(showUserImage){
    image =  <img
        className="avatar"
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
  } else {
    image = <img />
  }

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

      {image}
    </div>
  );
}
