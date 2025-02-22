const destinationsData = {
    USA: {
      states: {
        California: {
          cities: {
            LosAngeles: {
              description: "The City of Angels...",
              attractions: ["Hollywood Walk of Fame", "Griffith Observatory", "Santa Monica Pier"],
              images: ["losangeles1.jpg", "losangeles2.jpg"] // Example image paths
            },
            SanFrancisco: {
              description: "The Golden Gate City...",
              attractions: ["Golden Gate Bridge", "Alcatraz Island", "Lombard Street"],
              images: ["sanfrancisco1.jpg", "sanfrancisco2.jpg"]
            }
          }
        },
        // ... other states
      }
    },
    // ... other countries
  };
  
  export default destinationsData;
  