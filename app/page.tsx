import { auth, currentUser } from "@clerk/nextjs/server"; // Fix: auth and currentUser must be imported from server
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
    await redirect("/sign-in");

  const user = await currentUser();

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-6 shadow-md">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <nav className="mt-6 space-y-4">
          <a href="#" className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Home</a>
          <a href="#" className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Settings</a>
          <a href="#" className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Profile</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome, {user?.firstName}!</h1>
          <UserButton />
        </header>
        <p className="mt-2">You are logged in and can access your personalized content.</p>

        {/* Profile Info */}
        <div className="mt-6 flex items-center gap-4">
          {user?.imageUrl && (
            <Image src={user.imageUrl} alt="Profile" width={64} height={64} className="w-16 h-16 rounded-full" />
          )}
          <div>
            <p className="text-lg font-medium">{user?.fullName}</p>
            <p className="text-sm text-gray-500">{user?.primaryEmailAddress}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
