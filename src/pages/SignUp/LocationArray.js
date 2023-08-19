// locationData.js

const locationData = [
  {
    country: "Nigeria",
    states: [
      {
        state: "Lagos",
        cities: [
          "Lagos Mainland",
          "Victoria Island",
          "Ikeja" /* Add more cities */,
        ],
      },
      {
        state: "Oyo",
        cities: ["Ibadan", "Ogbomosho", "Iseyin" /* Add more cities */],
      },
      // Add more states and their cities within Nigeria
    ],
  },
  {
    country: "Kenya",
    states: [
      {
        state: "Nairobi",
        cities: [
          "Nairobi Central",
          "Kilimani",
          "Westlands" /* Add more cities */,
        ],
      },
      {
        state: "Mombasa",
        cities: ["Mombasa Island", "Nyali", "Bamburi" /* Add more cities */],
      },
      // Add more states and their cities within Kenya
    ],
  },
  // Add more countries and their states and cities
];

export default locationData;
