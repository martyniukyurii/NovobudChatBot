import { NextResponse } from "next/server";

import { loadEnvConfig } from '@next/env'

//Use top level .env file (one level above ./frontend/)
const projectDir = process.cwd().replace("frontend\\novobud-frontend", '');
loadEnvConfig(projectDir)

const api_link = process.env.api_link! + "/" + process.env.api_version!;

export async function GET() {
    try {
        const response = await fetch(api_link + "/items");
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
        { error: "Failed to fetch items" },
        { status: 500 }
        );
    }
}
