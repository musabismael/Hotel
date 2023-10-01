import Card from "./Card";

const Sidebar = () => {
  const cardData = [
    {
      id: 1,
      title: "Reservation Management",
      description:
        "Online booking, availability calendar, and booking modification.",
      imageUrl: "reservation-image-url.jpg",
    },
    {
      id: 2,
      title: "Guest Check-In and Check-Out",
      description: "Guest registration, check-out, and key card issuance.",
      imageUrl: "checkin-image-url.jpghttps://www.bing.com/images/create/a-picture-of-guest-check-in-and-check-out-with-fil/65180365c5de49b49f74e8ae14b1ae4a?id=kQmCvM7eFAcrTJtmf21CHA%3d%3d&view=detailv2&idpp=genimg&idpclose=1&FORM=SYDBIC",
    },
    {
      id: 3,
      title: "Room Management",
      description: "Room assignment, status updates, and inventory tracking.",
      imageUrl: "room-management-image-url.jpg",
    },
    {
      id: 4,
      title: "Billing and Payment",
      description: "Invoicing, payment processing, and split billing.",
      imageUrl: "billing-image-url.jpg",
    },
    {
      id: 5,
      title: "Housekeeping and Maintenance",
      description:
        "Housekeeping schedule, maintenance requests, and inventory management.",
      imageUrl: "housekeeping-image-url.jpg",
    },
    {
      id: 6,
      title: "Guest Services",
      description:
        "Concierge services, room service, wake-up calls, and laundry services.",
      imageUrl: "guest-services-image-url.jpg",
    },
    {
      id: 7,
      title: "Front Desk Operations",
      description: "Guest inquiries, check-in/out, and guest profile access.",
      imageUrl: "front-desk-image-url.jpg",
    },
    {
      id: 8,
      title: "Inventory Management",
      description: "Managing hotel supplies and amenities.",
      imageUrl: "inventory-image-url.jpg",
    },
    {
      id: 9,
      title: "Reporting and Analytics",
      description: "Generate reports on occupancy, revenue, and key metrics.",
      imageUrl: "reporting-image-url.jpg",
    },
    {
      id: 10,
      title: "Security and Access Control",
      description: "Surveillance camera integration and access control.",
      imageUrl: "security-image-url.jpg",
    },
    {
      id: 11,
      title: "Point of Sale (POS)",
      description:
        "Integration with on-site restaurants, bars, and gift shops.",
      imageUrl: "pos-image-url.jpg",
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
    <aside
    className="#3f7b9f  w-1/5 min-h-screen p-2 shadow-xl"
    >
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
