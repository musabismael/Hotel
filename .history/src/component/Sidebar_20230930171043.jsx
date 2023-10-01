import Card from "./Card";

const Sidebar = () => {
  const cardData = [
    {
      id: 1,
      title: "Reservation Management",
      description:
        "Online booking, availability calendar, and booking modification.",
      imageUrl: "https://img.icons8.com/nolan/96/commercial-development-management.png",
    },
    {
      id: 2,
      title: "Guest Check-In and Check-Out",
      description: "Guest registration, check-out, and key card issuance.",
      imageUrl: "https://img.icons8.com/nolan/128/check-all.png",
    },
    {
      id: 3,
      title: "Room Management",
      description: "Room assignment, status updates, and inventory tracking.",
      imageUrl: "https://img.icons8.com/office/80/meeting-room.png",
    },
    {
      id: 4,
      title: "Billing and Payment",
      description: "Invoicing, payment processing, and split billing.",
      imageUrl: "https://img.icons8.com/nolan/96/billing.png",
    },
    {
      id: 5,
      title: "Housekeeping and Maintenance",
      description:
        "Housekeeping schedule, maintenance requests, and inventory management.",
      imageUrl: "https://img.icons8.com/nolan/96/housekeeping.png",
    },
    {
      id: 6,
      title: "Guest Services",
      description:
        "Concierge services, room service, wake-up calls, and laundry services.",
      imageUrl: "https://img.icons8.com/neon/192/services.png",
    },
    {
      id: 7,
      title: "Front Desk Operations",
      description: "Guest inquiries, check-in/out, and guest profile access.",
      imageUrl: "https://img.icons8.com/nolan/96/front-desk.png",
    },
    {
      id: 8,
      title: "Inventory Management",
      description: "Managing hotel supplies and amenities.",
      imageUrl: "https://img.icons8.com/nolan/96/in-inventory.png",
    },
    {
      id: 9,
      title: "Reporting and Analytics",
      description: "Generate reports on occupancy, revenue, and key metrics.",
      imageUrl: "https://img.icons8.com/nolan/96/web-analystics.png",
    },
    {
      id: 10,
      title: "Security and Access Control",
      description: "Surveillance camera integration and access control.",
      imageUrl: "https://img.icons8.com/nolan/96/key-security.png",
    },
    {
      id: 11,
      title: "Point of Sale (POS)",
      description:
        "Integration with on-site restaurants, bars, and gift shops.",
      imageUrl: "https://img.icons8.com/external-itim2101-blue-itim2101/64/external-point-of-sale-gadget-itim2101-blue-itim2101.png",
    },
    {
      id: 12,
      title: "Customer Relationship Management (CRM)",
      description: "Guest profiles, preferences, and loyalty programs.",
      imageUrl: "crm-image-url.jpg",
    },
    // Add more service/feature objects here
  ];

  const handleCardClick = (id) => {
    console.log(`Card with ID ${id} clicked`);
  };
  return (
    <aside className="bg-sky-900  w-1/5 min-h-screen p-4 mt-auto shadow-xl">
      <nav>
        {cardData.map((card) => (
          <Card
            key={card.id}
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