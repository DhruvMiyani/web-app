// List of stations and their ZIP codes (mock data from your dataset)
const stationData = [
    { name: "Railroad Lot and Minuteman Bikeway", zip: "02474" },
    { name: "Linwood St at Minuteman Bikeway", zip: "02476" },
    { name: "Thorndike Field at Minuteman Bikeway", zip: "02472" },
    { name: "Mass Ave at Grafton St", zip: "02140" },
    { name: "Broadway at Grafton St", zip: "02139" },
    { name: "Kenmore Square", zip: "02215" },
    { name: "Union Square - Brighton Ave at Cambridge St", zip: "02134" },
    // Add the remaining stations with their corresponding ZIP codes
  ];
  
  // Populate dropdown initially with all stations
  const stationDropdown = document.getElementById('station-dropdown');
  function populateDropdown(stations) {
    stationDropdown.innerHTML = ""; // Clear previous options
    stations.forEach((station) => {
      const option = document.createElement('option');
      option.value = station.name;
      option.textContent = station.name;
      stationDropdown.appendChild(option);
    });
  }
  
  // Initial population with all stations
  populateDropdown(stationData);
  
  // Filter stations by ZIP code
  document.getElementById('zip-input').addEventListener('input', () => {
    const zipCode = document.getElementById('zip-input').value.trim();
    const filteredStations = stationData.filter((station) => station.zip.startsWith(zipCode));
    populateDropdown(filteredStations);
  });
  
  // Handle the search button click
  document.getElementById('search-button').addEventListener('click', () => {
    const selectedStation = stationDropdown.value;
    const nextHourResult = document.getElementById('next-hour-result');
    const specifiedTimeResult = document.getElementById('specified-time-result');
  
    if (selectedStation) {
      // Simulate bike availability data
      const nextHourBikes = Math.floor(Math.random() * 20) + 1;
      const specifiedTimeBikes = Math.floor(Math.random() * 20) + 1;
  
      nextHourResult.value = nextHourBikes;
      specifiedTimeResult.value = specifiedTimeBikes;
    } else {
      alert('Please select a station.');
    }
  });
  
  // Update the specified time result when the day or time changes
  document.getElementById('day-select').addEventListener('change', updateSpecifiedTime);
  document.getElementById('time-select').addEventListener('change', updateSpecifiedTime);
  
  function updateSpecifiedTime() {
    const day = document.getElementById('day-select').value;
    const time = document.getElementById('time-select').value;
    const specifiedTimeResult = document.getElementById('specified-time-result');
  
    if (day && time) {
      // Simulate bike availability data
      specifiedTimeResult.value = Math.floor(Math.random() * 20) + 1;
    }
  }
  