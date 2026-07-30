import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

const INDEXNOW_KEY = "4f828a1c97a54e95b060d4b9b47e2b10";
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
];

export async function POST(request: Request) {
  try {
    const host = new URL(SITE_URL).hostname;
    const body = await request.json().catch(() => ({}));
    const urls: string[] = body.urls || [
      `${SITE_URL}/`,
      `${SITE_URL}/llms.txt`,
    ];

    const payload = {
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    };

    const results = await Promise.allSettled(
      INDEXNOW_ENDPOINTS.map(async (endpoint) => {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify(payload),
        });
        return { endpoint, status: res.status, ok: res.ok };
      })
    );

    return NextResponse.json({
      success: true,
      payload,
      results: results.map((r) => (r.status === "fulfilled" ? r.value : { error: r.reason })),
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to submit to IndexNow" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "IndexNow API endpoint active. Send a POST request to trigger indexing.",
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
  });
}
