const Sidebar = () => {
  //create list of vertical  card  with Icon ANd image
  const [verticalCards] = useState([
    {
      icon: <FaHome />,
      title: "Home",
      link: "/",
    },
    {
      icon: <BsFillPersonBoundingBoxFill />,
      title: "About Us",
      link: "/about",
    },
    { icon: <IoMdSettings />, title: "Contact us ", link: "/contact" },
  ]);
  // create a horizontal cards for the social media icons
  //   const [horizontalCard] = useState({
  return (
    <aside className="bg-gray-200 w-1/4 min-h-screen p-4">
      <nav></nav>
    </aside>
  );
};

export default Sidebar;
