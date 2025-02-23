export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-black text-gray-100 ">
      <img src="/head.png" alt="CellStrat Logo" className="h-16 mb-4" />
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
        Welcome to the Fullstack Development Interview
      </h1>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
        This page serves as the starting point for the 90-minute Fullstack Development Interview session.
      </p>
    </div>
  );
}