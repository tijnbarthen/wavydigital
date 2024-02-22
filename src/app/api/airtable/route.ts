import { z } from "zod";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data) {
      return new Response("No data", { status: 400 });
    }

    console.log("this is the data in the call", data.records[0].fields);
    // send data to airtable
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    console.log("this is the result", result);

    return new Response(JSON.stringify(response));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response(
      "Could not create event at this time. Please try later",
      { status: 500 }
    );
  }
}
