import { useState } from "react";

interface UserProfile {
  firstName: string;
  lastName: string;
  role: string;
}

export function StatePlayground() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [user, setUser] = useState<UserProfile>({
    firstName: "Dien",
    lastName: "Reinhardt",
    role: "Web Developer",
  });

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const handleFirstNameChange = (newFirstName: string) => {
    setUser((prev) => ({ ...prev, firstName: newFirstName }));
  };

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <h1 className="text-3xl font-bold mb-6">State Architect's Playground</h1>

      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
      >
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="mt-8 p-6 border rounded-lg max-w-md">
        <h2 className="text-xl mb-4">
          Profile: {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-500 mb-4">Role: {user.role}</p>

        <input
          type="text"
          onChange={(e) => handleFirstNameChange(e.target.value)}
          value={user.firstName}
          placeholder="First Name"
          className={`w-full p-2 border rounded text-gray-900 ${isDarkMode ? "placeholder-gray-400 border-white text-white" : ""}`}
        />
      </div>
    </div>
  );
}
