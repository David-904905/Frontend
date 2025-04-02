// Define an interface for the service structure
interface TravelServiceCategory {
    category: string;
    services: string[];
    image: string; // URL or path to the image
}

// Create the array with images
export const islandTravelServices: TravelServiceCategory[] = [
    {
        category: "Vacation Packages",
        services: [
            "All-Inclusive Vacation Packages",
            "Luxury Getaways",
            "Adventure Packages",
            "Romantic Getaways",
            "Family-Friendly Packages"
        ],
        image: "../../../../public/islandimages/image6.jpg"
    },
    {
        category: "Custom Itineraries",
        services: [
            "Personalized Travel Planning",
            "Island Hopping Tours",
            "Cultural Experiences"
        ],
        image: "../../../../public/islandimages/itinerary.jpg"
    },
    {
        category: "Accommodation Booking",
        services: [
            "Beachfront Hotels & Resorts",
            "Private Island Rentals",
            "Eco-Friendly Stays",
            "Overwater Bungalows"
        ],
        image: "../../../../public/islandimages/accomodation2.jpg"
    },
    {
        category: "Transport & Transfers",
        services: [
            "Flights (Commercial or Private Charters)",
            "Private Yacht or Boat Transfers",
            "Seaplane or Helicopter Transfers",
            "Car Rentals or Guided Transport"
        ],
        image: "../../../../public/islandimages/transportation.jpg"
    },
    {
        category: "Exclusive Island Experiences",
        services: [
            "Private Beach Dinners",
            "Luxury Yacht Charters",
            "Scuba Diving & Snorkeling Excursions",
            "Deep-Sea Fishing Trips",
            "Private Guided Island Tours"
        ],
        image: "../../../../public/islandimages/scuba.jpg"
    },
    {
        category: "Adventure & Water Sports",
        services: [
            "Jet Skiing, Kayaking & Paddleboarding",
            "Surfing and Kitesurfing Lessons",
            "Scuba Diving with Certified Instructors",
            "Wildlife Encounters (Dolphins, Turtle Conservation)"
        ],
        image: "../../../../public/islandimages/watersports.jpg"
    },
    {
        category: "Wellness & Relaxation",
        services: [
            "Spa and Wellness Retreats",
            "Yoga and Meditation Sessions",
            "Hot Springs or Volcanic Mud Baths",
            "Private Wellness Coaching"
        ],
        image: "../../../../public/islandimages/relaxation.jpg"
    },
    {
        category: "Destination Weddings & Events",
        services: [
            "Beachfront Wedding Planning",
            "Vow Renewals and Anniversary Celebrations",
            "Bachelor/Bachelorette Island Getaways"
        ],
        image: "../../../../public/islandimages/beachwedding.jpg"
    },
    {
        category: "Local Cultural & Culinary Tours",
        services: [
            "Cooking Classes with Local Chefs",
            "Traditional Dance and Music Performances",
            "Visits to Historical Landmarks or Native Villages"
        ],
        image: "../../../../public/islandimages/beachfood.jpg"
    },
    {
        category: "VIP & Concierge Services",
        services: [
            "24/7 Concierge for Special Requests",
            "Personal Butlers or Private Chefs",
            "Exclusive Access to Private Beaches or Events"
        ],
        image: "../../../../public/islandimages/concierge.jpg"
    }
];


