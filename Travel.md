# 🌍 Travel Bucket List App — Plan & Track Dream Destinations

**Description:**
An application where users can add dream travel destinations to their bucket list, view places, and track visited locations.

---

## 1⃣️ Backend

- Create a new project and cluster on the [MongoDB website](https://cloud.mongodb.com/).
- Set up the **MVC** folder structure within the backend.
- Store the MongoDB connection string and port number in a `.env` file.
- Create a `Destination` model with the following fields:
  `name`, `country`, `img`, `description`, `estimatedCost` (EUR), `bestSeason`, `visited`, `createdAt`(Date), `updatedAt`(Date).
- Connect the backend to MongoDB.

---

## 2⃣️ CRUD & Postman

- Following the **MVC structure**, create routes and corresponding logic for **Create, Read, Update, Delete** operations.
- Test the CRUD operations using **Postman**. If tests are successful, delete all documents.
- Add the following 8 new documents:

```json
[
  {
    "name": "Santorini",
    "country": "Greece",
    "img": "https://images.unsplash.com/photo-1678266561093-324802646fb2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Famous for its white-washed houses and breathtaking sunsets over the Aegean Sea.",
    "estimatedCost": 1500,
    "bestSeason": "Summer",
    "visited": false
  },
  {
    "name": "Kyoto",
    "country": "Japan",
    "img": "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Historic city known for ancient temples, cherry blossoms, and traditional culture.",
    "estimatedCost": 2000,
    "bestSeason": "Spring",
    "visited": false
  },
  {
    "name": "Machu Picchu",
    "country": "Peru",
    "img": "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "The Lost City of the Incas, nestled high in the Andes Mountains.",
    "estimatedCost": 2500,
    "bestSeason": "Autumn",
    "visited": false
  },
  {
    "name": "Reykjavik",
    "country": "Iceland",
    "img": "https://images.unsplash.com/photo-1596102224844-3b185315abc8?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Explore geysers, glaciers, and the magical Northern Lights.",
    "estimatedCost": 1800,
    "bestSeason": "Winter",
    "visited": false
  },
  {
    "name": "Paris",
    "country": "France",
    "img": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "The romantic city of lights, iconic for the Eiffel Tower and world-class cuisine.",
    "estimatedCost": 1600,
    "bestSeason": "Spring",
    "visited": true
  },
  {
    "name": "New York City",
    "country": "USA",
    "img": "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "The city that never sleeps, filled with landmarks, culture, and skyscrapers.",
    "estimatedCost": 2200,
    "bestSeason": "Autumn",
    "visited": true
  },
  {
    "name": "Bali",
    "country": "Indonesia",
    "img": "https://plus.unsplash.com/premium_photo-1661878915254-f3163e91d870?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Tropical paradise with beaches, temples, and lush rice terraces.",
    "estimatedCost": 1700,
    "bestSeason": "Summer",
    "visited": false
  },
  {
    "name": "Rome",
    "country": "Italy",
    "img": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "The Eternal City, home to ancient ruins, art, and vibrant Italian culture.",
    "estimatedCost": 1400,
    "bestSeason": "Spring",
    "visited": true
  }
]
```

---

## 3⃣️ Frontend

- Create your React app using **Vite**, remove unnecessary starter code.
- Install **TailwindCSS**, or use minimal plain CSS (for card layout and form structure).
- Create **3 routes**: `HomePage`, `CreatePage`, `DestinationPage`.
- Create a `DestinationCard` component to display destination details.
- Create a **Navbar** with buttons to navigate between `HomePage` and `CreatePage`.

---

## 4⃣️ HomePage

- Display a centered **My Travel Bucket List** title at the top.
- Show all destinations in cards, sorted by `estimatedCost`.
- In a separate section show only `visited` destinations.
- Find the cheapest unvisited destination and display it.

---

## 5⃣️ CreatePage

- Create a form that adds a new destination to the database on submit.
- After a successful creation the app navigates the user to the `HomePage`

---

## 6⃣️ DestinationPage & Card Updates

- Add a button to each `DestinationCard` to navigate to the `DestinationPage` showing detailed information.
- Add a button to each `DestinationCard` to **delete** the destination from the database and update the `HomePage`.

---

## 7⃣️ Test the Application

✔️ There are **3 pages**:

- Two accessible via Navbar buttons (`HomePage`, `CreatePage`).
- One via destination button (`DestinationPage`).

✔️ `HomePage` fetches and displays all destinations.
✔️ `CreatePage` form adds a new destination, which appears on `HomePage`.
✔️ Clicking a `DestinationCard` button navigates to `DestinationPage` with details.
✔️ Delete button removes destination and rerenders `HomePage`.
✔️ Navbar is visible on every page.

---

## 8⃣️ Optional Features

- Add an **Edit** button to `DestinationCard` that opens a modal with an update form.
- Add a search section on `HomePage` to filter destinations by country:

  - Use a button or live filtering with input change listener.

- Enhance your project with CSS to improve its design and make it more visually appealing.

---

## 9⃣️ GitHub

- **Do not upload** `node_modules` or `.env` to your repository.
- Please make the repo public or add me as contributor and send the link on Discord.

**Thank you!** ✈️🏖️
