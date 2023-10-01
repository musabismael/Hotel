
const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-1/4 min-h-screen p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">Dashboard</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">Profile</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
