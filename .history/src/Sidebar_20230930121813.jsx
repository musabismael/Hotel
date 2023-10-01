const Sidebar = () => {
  //create list of vertical  card  with Icon ANd image
  const [verticalCards] = useState([
    {
        icon: <FaHome />,
      title: "Home",
      link: "/home",
      link: "/",
    },
    {
      icon: <BsFillPersonBoundingBoxFill />,
      title: "About Us",
      link: "/about",
    },
    { icon: <IoMdSettings />, title: "Contact us ", link: "/contact" },
  ]);
  return (
    <aside className="bg-gray-200 w-1/4 min-h-screen p-4">
      <nav></nav>
    </aside>
  );
};

export default Sidebar;
