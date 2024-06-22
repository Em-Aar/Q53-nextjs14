import { auth, currentUser } from "@clerk/nextjs/server";

export default async function page() {

    const { userId } = auth();
    const user = await currentUser()

  return (
    <div className="px-8">
      <h1>Dashboard</h1>
      <p>Hello <span className="font-bold text-green-600">{user?.lastName}</span></p>
    </div>
  )
}
