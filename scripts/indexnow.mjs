const INDEXNOW_KEY = "4f828a1c97a54e95b060d4b9b47e2b10";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://packetstreamcode.vercel.app";
const HOST = new URL(SITE_URL).hostname;

const payload = {
  host: HOST,
  key: INDEXNOW_KEY,
  keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
  urlList: [
    `${SITE_URL}/`,
    `${SITE_URL}/llms.txt`
  ]
};

const endpoints = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow"
];

console.log("Submitting URLs to IndexNow protocol...");
console.log("Payload:", JSON.stringify(payload, null, 2));

async function main() {
  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload)
      });
      console.log(`Endpoint: ${endpoint} => Status ${res.status} (${res.ok ? "OK" : "Notice"})`);
    } catch (err) {
      console.error(`Error submitting to ${endpoint}:`, err.message);
    }
  }
}

main();
