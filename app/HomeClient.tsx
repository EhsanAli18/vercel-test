"use client";

import { useEffect } from "react";

export default function HomeClient() {
	console.log('here')
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        console.log({
          city: data.city,
          country: data.country_name,
          lat: data.latitude,
          lng: data.longitude,
        });
      })
      .catch(console.error);
  }, []);

  return <h1>🏠 Home Page - Try sharing this linkss!</h1>;
}
