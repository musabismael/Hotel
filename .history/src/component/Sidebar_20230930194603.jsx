import Card from "./Card";

const Sidebar = () => {
  const cardData = [
    {
      id: 1,
      title: "Reservation Management",
      description:
        "Online booking, availability calendar, and booking modification.",
      imageUrl:
        "https://img.icons8.com/nolan/96/commercial-development-management.png",
      link: "/reservation-management",
    },
    {
      id: 2,
      title: "Guest Check-In and Check-Out",
      description: "Guest registration, check-out, and key card issuance.",
      imageUrl: "https://img.icons8.com/nolan/96/check-all.png",
      link: "/GuestCheckInOut",
    },
    {
      id: 3,
      title: "Room Management",
      description: "Room assignment, status updates, and inventory tracking.",
      imageUrl: "https://img.icons8.com/office/96/meeting-room.png",
      link: "/room-Management",

    },
    {
      id: 4,
      title: "Billing and Payment",
      description: "Invoicing, payment processing, and split billing.",
      imageUrl: "https://img.icons8.com/nolan/96/billing.png",
      link: "/billing-and-payment",

    },
    {
      id: 5,
      title: "Housekeeping / Maintenance",
      description:
        "Housekeeping schedule, maintenance requests, and inventory management.",
      imageUrl: "https://img.icons8.com/nolan/96/housekeeping.png",
      link: "/housekeeping-maintenance",

    },
    {
      id: 6,
      title: "Guest Services",
      description:
        "Concierge services, room service, wake-up calls, and laundry services.",
      imageUrl: "https://img.icons8.com/neon/96/services.png",
      link: "/Guestervices",

    },
    {
      id: 7,
      title: "Front Desk Operations",
      description: "Guest inquiries, check-in/out, and guest profile access.",
      imageUrl: "https://img.icons8.com/nolan/96/front-desk.png",
      link: "/reservation-management",

    },
    {
      id: 8,
      title: "Inventory Management",
      description: "Managing hotel supplies and amenities.",
      imageUrl: "https://img.icons8.com/nolan/96/in-inventory.png",
      link: "/reservation-management",

    },
    {
      id: 9,
      title: "Reporting and Analytics",
      description: "Generate reports on occupancy, revenue, and key metrics.",
      imageUrl: "https://img.icons8.com/nolan/96/web-analystics.png",
      link: "/reservation-management",

    },
    {
      id: 10,
      title: "Security and Access Control",
      description: "Surveillance camera integration and access control.",
      imageUrl: "https://img.icons8.com/nolan/96/key-security.png",
      link: "/reservation-management",

    },
    {
      id: 11,
      title: "Point of Sale (POS)",
      description:
        "Integration with on-site restaurants, bars, and gift shops.",
      imageUrl:
        "https://img.icons8.com/external-itim2101-blue-itim2101/96/external-point-of-sale-gadget-itim2101-blue-itim2101.png",
        link: "/reservation-management",

    },
    {
      id: 12,
      title: "Customer Relationship Management (CRM)",
      description: "Guest profiles, preferences, and loyalty programs.",
      imageUrl: "https://img.icons8.com/nolan/96/customer-support.png",
      link: "/reservation-management",

    },
    // Add more service/feature objects here
  ];

  const handleCardClick = (id) => {
    console.log(`Card with ID ${id} clicked`);
  };
  return (
    <aside className="bg-white-700  w-1/5 min-h-screen p-4 mt-auto shadow-xl">
      <nav>
        {cardData.map((card) => (
          <Card
            key={card.id}
            link={card.link}
            imageUrl={card.imageUrl}
            title={card.title}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
