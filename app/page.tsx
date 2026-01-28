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
  // This allows Next.js to turn "/home-og.png" into a full URL
  metadataBase: new URL('https://vercel-test1-qladnxdvv-ehsanali18s-projects.vercel.app'),
  title: "My Geo App",
  description: "Check your location and see a cool preview!",
};

export default async function HomePage() {
  const geo = await getUserGeo();

  console.log("User geo:", geo);

  return <HomeClient />;
}
