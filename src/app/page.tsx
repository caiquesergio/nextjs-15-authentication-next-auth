import { auth } from "@/auth";
import { SignInButton } from "./components/sign-in-button";


export default async function Home() {
  const session = await auth();

  console.log("session", session)
  if (session?.user) {
    return (
      <div>
      </div>
    );
  }

  return (
    <div>
        <SignInButton />
    </div>
  );
}
