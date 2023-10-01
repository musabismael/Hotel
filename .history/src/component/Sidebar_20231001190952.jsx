import Card from "./Card";
import {
  faPersonShelter,
  faListCheck,
  faCheck,
  faMoneyBill,
  faScrewdriverWrench,
  faHeadphones,
  faComputer,
  faCartFlatbed,
  faPersonMilitaryPointing,
  faChartBar,
  faKey,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const cardData = [
    {
      id: 1,
      title: "Reservation Management",
      description:
        "Online booking, availability calendar, and booking modification.",
      icon: faListCheck,
      link: "/reservation_management",
    },
    {
      id: 2,
      title: "Guest Check-In and Check-Out",
      description: "Guest registration, check-out, and key card issuance.",
      icon: faCheck,
      link: "/GuestCheckInOut",
    },
    {
      id: 3,
      title: "Room Management",
      description: "Room assignment, status updates, and inventory tracking.",
      icon: faPersonShelter,
      link: "/room_Management",
    },
    {
      id: 4,
      title: "Billing and Payment",
      description: "Invoicing, payment processing, and split billing.",
      icon: faMoneyBill,
      link: "/billing_and_payment",
    },
    {
      id: 5,
      title: "Housekeeping / Maintenance",
      description:
        "Housekeeping schedule, maintenance requests, and inventory management.",
      icon: faScrewdriverWrench,
      link: "/housekeeping_maintenance",
    },
    {
      id: 6,
      title: "Guest Services",
      description:
        "Concierge services, room service, wake-up calls, and laundry services.",
      icon: faHeadphones,
      link: "/guest_services",
    },
    {
      id: 7,
      title: "Front Desk Operations",
      description: "Guest inquiries, check-in/out, and guest profile access.",
      icon: faComputer,
      link: "/desk_operations",
    },
    {
      id: 8,
      title: "Inventory Management",
      description: "Managing hotel supplies and amenities.",
      icon: faCartFlatbed,
      link: "/inventory_management",
    },
    {
      id: 9,
      title: "Reporting and Analytics",
      description: "Generate reports on occupancy, revenue, and key metrics.",
      icon: faChartBar,
      link: "/reporting_and_analytics",
    },

    {
      id: 10,
      title: "Security and Access Control",
      description: "Surveillance camera integration and access control.",
      icon: faKey,
      link: "/security_control",
    },
    {
      id: 11,
      title: "Point of Sale (POS)",
      description:
        "Integration with on-site restaurants, bars, and gift shops.",
      icon: faBookmark,
      link: "/pos",
    },

    {
      id: 12,
      title: "Customer Relationship Management (CRM)",
      description: "Guest profiles, preferences, and loyalty programs.",
      icon: faPersonMilitaryPointing,
      link: "/crm",
    },

    // Add more service/feature objects here
  ];

  const handleCardClick = (id) => {
    console.log(`Card with ID ${id} clicked`);
  };
  return (
    <aside className="bg-white-700  w-1/5 min-h-screen p-4 shadow-lg   ">
          <aside className="p-4 w-1/5 h-screen overflow-y-auto bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg">

      <nav>
        {cardData.map((card) => (
          <Card
            key={card.id}
            link={card.link}
            icon={card.icon}
            title={card.title}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
