import HomeClient from "./HomeClient";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

async function getUserGeo() {
  const h = await headers();

  return {
    country: h.get("x-vercel-ip-country"),
    city: h.get("x-vercel-ip-city"),
    region: h.get("x-vercel-ip-country-region"),
  };
}

export const metadata = {
  title: "Home",
  openGraph: {
    title: "Welcome to our Home Page",
    description: "This is the main dashboard of our app.",
    images: ["/home-og.png"],
  },
};

export default async function HomePage() {
  const geo = await getUserGeo();

  console.log("User geo:", geo);

  return <HomeClient />;
}
