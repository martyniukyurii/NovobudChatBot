import { NextResponse } from "next/server";
import { loadEnvConfig } from "@next/env";

// Use top-level .env file (one level above ./frontend/)
const projectDir = process.cwd().replace("frontend\\novobud-frontend", "");
loadEnvConfig(projectDir);

const api_link = process.env.api_link! + "/" + process.env.api_version!;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    // Extract query parameters
    const tp = searchParams.get("type");
    const location = searchParams.get("location");
    const min_price = searchParams.get("min_price");
    const max_price = searchParams.get("max_price");
    const date_from = searchParams.get("date_from");
    const date_to = searchParams.get("date_to");
    const min_area = searchParams.get("min_area");
    const max_area = searchParams.get("max_area");

    let apiUrl = `${api_link}/items`;

    // If any filter parameters are present, use the filter endpoint
    if (
      tp ||
      location ||
      min_price ||
      max_price ||
      date_from ||
      date_to ||
      min_area ||
      max_area
    ) {
      const queryParams = new URLSearchParams();
      if (tp) queryParams.append("type", tp);
      if (location) queryParams.append("location", location);
      if (min_price) queryParams.append("min_price", min_price);
      if (max_price) queryParams.append("max_price", max_price);
      if (date_from) queryParams.append("date_from", date_from);
      if (date_to) queryParams.append("date_to", date_to);
      if (min_area) queryParams.append("min_area", min_area);
      if (max_area) queryParams.append("max_area", max_area);

      apiUrl = `${api_link}/items/filter?${queryParams.toString()}`;
    }

    // Fetch data from the API
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch items: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}
