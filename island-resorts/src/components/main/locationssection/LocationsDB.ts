// Define an interface for island locations
interface IslandLocation {
    name: string;
    description: string;
    image: string;
}

// Create an array of island locations
export const ourlocations: IslandLocation[] = [
    {
        name: "Bora Bora, French Polynesia",
        description: "A luxury paradise known for its overwater bungalows, turquoise waters, and stunning coral reefs.",
        image: "../../../../public/islandimages/frenchpolynesia.jpg"
    },
    {
        name: "Santorini, Greece",
        description: "Famous for its white-washed buildings, breathtaking sunsets, and crystal-clear Aegean Sea views.",
        image: "../../../../public/islandimages/Santorini-Greece.jpg"
    },
    {
        name: "Maldives",
        description: "A dream destination with private islands, clear lagoons, and some of the best scuba diving spots in the world.",
        image: "../../../../public/islandimages/maldives.jpg"
    },
    {
        name: "Maui, Hawaii, USA",
        description: "Known for its lush rainforests, volcanic landscapes, and world-famous beaches like Kaanapali and Wailea.",
        image: "../../../../public/islandimages/Maui-sunset.jpg"
    },
    {
        name: "Seychelles",
        description: "An Indian Ocean gem with pristine white beaches, lush greenery, and unique granite rock formations.",
        image: "../../../../public/islandimages/seychelles.jpg"
    },
    {
        name: "Fiji",
        description: "A tropical paradise with soft coral diving, stunning waterfalls, and welcoming island culture.",
        image: "../../../../public/islandimages/fiji.jpg"
    }
];


