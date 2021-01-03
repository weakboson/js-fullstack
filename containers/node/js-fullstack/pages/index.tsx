import { signIn, signOut, useSession } from "next-auth/client"
import ToDoList from "../components/ToDoList"
import NewToDoForm from "../components/NewToDoForm"

export default function Home() {
  const [session, loading] = useSession()
  return (
    <>
      {!session && (
        <>
          サインインしてください。 <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          サインイン完了。 email: {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
          <NewToDoForm />
          <ToDoList />
        </>
      )}
    </>
  );
}
