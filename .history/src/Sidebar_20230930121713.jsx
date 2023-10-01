
const Sidebar = () => {
  //create list of vertical  card  with Icon ANd image
  const [verticalCards] = useState([
    {
      image: "https://images.unsplash.com/photo-1534062987522-e8fb3a4c8cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: <FaHome/>,
      title:"Home",
      link:'/home',
      link : '/'
  return (
    <aside className="bg-gray-200 w-1/4 min-h-screen p-4">
      <nav>
      
      </nav>
    </aside>
  );
};

export default Sidebar;
