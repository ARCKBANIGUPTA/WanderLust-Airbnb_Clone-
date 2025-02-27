const sampleListings = [
  {
    title: "Cozy Cottage",
    desc: "A cozy cottage with a beautiful garden.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 120,
    location: "Cottage Lane",
    country: "USA",
  },
  {
    title: "Modern Apartment",
    desc: "A modern apartment in the heart of the city.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0fGVufDB8fDB8fHww",
    price: 200,
    location: "Downtown",
    country: "Canada",
  },
  {
    title: "Beach House",
    desc: "A lovely beach house with stunning sea views.",
    image:
      "https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D",
    price: 300,
    location: "Ocean Drive",
    country: "Australia",
  },
  {
    title: "Mountain Retreat",
    desc: "A serene retreat in the mountains.",
    image: "",
    price: 150,
    location: "Mountain View",
    country: "Switzerland",
  },
  {
    title: "City Loft",
    desc: "A stylish loft in the city center.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 250,
    location: "City Center",
    country: "Germany",
  },
  {
    title: "Rural Farmhouse",
    desc: "A spacious farmhouse in the countryside.",
    image:
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    price: 180,
    location: "Countryside Road",
    country: "France",
  },
  {
    title: "Lakeside Cabin",
    desc: "A cozy cabin by the lake.",
    image: "",
    price: 220,
    location: "Lakeview",
    country: "Canada",
  },
  {
    title: "Penthouse Suite",
    desc: "A luxurious penthouse with city views.",
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 500,
    location: "High Rise Ave",
    country: "USA",
  },
  {
    title: "Suburban House",
    desc: "A family house in the suburbs.",
    image:
      "https://images.unsplash.com/photo-1594479125841-ff7800c6afcc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 170,
    location: "Maple Street",
    country: "UK",
  },
  {
    title: "Historic Villa",
    desc: "A historic villa with classic architecture.",
    image: "",
    price: 350,
    location: "Heritage Lane",
    country: "Italy",
  },
  {
    title: "Eco-friendly Home",
    desc: "A sustainable home with modern amenities.",
    image:
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 200,
    location: "Green Street",
    country: "Denmark",
  },
  {
    title: "Urban Flat",
    desc: "A convenient flat in the urban area.",
    image:
      "https://plus.unsplash.com/premium_photo-1671196048754-03a77d051dcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 140,
    location: "Urban Way",
    country: "Spain",
  },
  {
    title: "Luxury Mansion",
    desc: "An opulent mansion with extensive grounds.",
    image:
      "https://images.unsplash.com/photo-1566908829550-e6551b00979b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1000,
    location: "Richmond Estate",
    country: "UAE",
  },
  {
    title: "Seaside Bungalow",
    desc: "A charming bungalow by the sea.",
    image: "",
    price: 260,
    location: "Seaside Blvd",
    country: "Portugal",
  },
  {
    title: "Downtown Condo",
    desc: "A modern condo in downtown.",
    image:
      "https://images.unsplash.com/photo-1621620844255-4b0d09b12c3c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 300,
    location: "Main Street",
    country: "Japan",
  },
  {
    title: "Country Cottage",
    desc: "A quaint cottage in the countryside.",
    image: "",
    price: 160,
    location: "Country Road",
    country: "Ireland",
  },
  {
    title: "Ski Lodge",
    desc: "A cozy lodge near the ski slopes.",
    image:
      "https://images.unsplash.com/photo-1548873902-8b69fb85030a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 350,
    location: "Ski Avenue",
    country: "Austria",
  },
  {
    title: "Urban Studio",
    desc: "A small studio in the city.",
    image: "",
    price: 100,
    location: "City Lane",
    country: "Netherlands",
  },
  {
    title: "Countryside Villa",
    desc: "A spacious villa in the countryside.",
    image:
      "https://images.unsplash.com/photo-1576493169316-0745093ae312?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 400,
    location: "Villa Road",
    country: "Greece",
  },
  {
    title: "Desert House",
    desc: "A unique house in the desert.",
    image:
      "https://plus.unsplash.com/premium_photo-1699533135101-124e59ed5565?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzZXJ0JTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    price: 280,
    location: "Desert Street",
    country: "Morocco",
  },
];

module.exports = { data: sampleListings };
