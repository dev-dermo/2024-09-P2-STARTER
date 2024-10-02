import auth from "../utils/auth.tsx";

function Home() {
  const user = auth.getUser();
  console.log(user);

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome {user ? user.username : "guest"}!</p>
    </div>
  );
}

export default Home;
