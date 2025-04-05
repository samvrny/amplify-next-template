// "use client";

// import { useState, useEffect } from "react";
// import { generateClient } from "aws-amplify/data";
// import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
// import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
// import "@aws-amplify/ui-react/styles.css";

// // import { useAuthenticator } from "@aws-amplify/ui-react";

// Amplify.configure(outputs);

// const client = generateClient<Schema>();

import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/LocationFinderServer";
import LocationFinderClient from "./components/LocationFinderClient";

export default function App() {

  return (
    <main>
      <LocationFinderServer />
      <LocationFinderClient />

      <ToDo />
    </main>
  );
}
