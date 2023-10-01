import Card from "./Card";
import { faBars, fa-duotone fa-list-check, faSearch } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const cardData = [
    {
      id: 1,
      title: "Reservation Management",
      description:
        "Online booking, availability calendar, and booking modification.",
      icon: "fa-duotone fa-list-check",
      link: "/reservation_management",
    },
    {
      id: 2,
      title: "Guest Check-In and Check-Out",
      description: "Guest registration, check-out, and key card issuance.",
      icon: "https://img.icons8.com/nolan/96/check-all.png",
      link: "/GuestCheckInOut",
    },
    {
      id: 3,
      title: "Room Management",
      description: "Room assignment, status updates, and inventory tracking.",
      icon: "https://img.icons8.com/office/96/meeting-room.png",
      link: "/room_Management",
    },
    {
      id: 4,
      title: "Billing and Payment",
      description: "Invoicing, payment processing, and split billing.",
      icon: "https://img.icons8.com/nolan/96/billing.png",
      link: "/billing_and_payment",
    },
    {
      id: 5,
      title: "Housekeeping / Maintenance",
      description:
        "Housekeeping schedule, maintenance requests, and inventory management.",
      icon: "https://img.icons8.com/nolan/96/housekeeping.png",
      link: "/housekeeping_maintenance",
    },
    {
      id: 6,
      title: "Guest Services",
      description:
        "Concierge services, room service, wake-up calls, and laundry services.",
      icon: "https://img.icons8.com/neon/96/services.png",
      link: "/guest_services",
    },
    {
      id: 7,
      title: "Front Desk Operations",
      description: "Guest inquiries, check-in/out, and guest profile access.",
      icon: "https://img.icons8.com/nolan/96/front-desk.png",
      link: "/desk_operations",
    },
    {
      id: 8,
      title: "Inventory Management",
      description: "Managing hotel supplies and amenities.",
      icon: "https://img.icons8.com/nolan/96/in-inventory.png",
      link: "/inventory_management",
    },
    {
      id: 9,
      title: "Reporting and Analytics",
      description: "Generate reports on occupancy, revenue, and key metrics.",
      icon: "https://img.icons8.com/nolan/96/web-analystics.png",
      link: "/reporting_and_analytics",
    },
    {
      id: 10,
      title: "Security and Access Control",
      description: "Surveillance camera integration and access control.",
      icon: "https://img.icons8.com/nolan/96/key-security.png",
      link: "/security_control",
    },
    {
      id: 11,
      title: "Point of Sale (POS)",
      description:
        "Integration with on-site restaurants, bars, and gift shops.",
      icon: "https://img.icons8.com/external-itim2101-blue-itim2101/96/external-point-of-sale-gadget-itim2101-blue-itim2101.png",
      link: "/pos",
    },
    {
      id: 12,
      title: "Customer Relationship Management (CRM)",
      description: "Guest profiles, preferences, and loyalty programs.",
      icon: "https://img.icons8.com/nolan/96/customer-support.png",
      link: "/crm",
    },
    // Add more service/feature objects here
  ];

  const handleCardClick = (id) => {
    console.log(`Card with ID ${id} clicked`);
  };
  return (
    <aside className="bg-white-700  w-1/5 min-h-screen p-4 mt-auto shadow-lg">
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
