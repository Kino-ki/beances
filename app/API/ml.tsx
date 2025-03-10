"use server";

export async function subscribeUser(email: string) {
  try {
    const mlResponse = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.MAILERLITE_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          groups: ["147615619942974699"],
        }),
      }
    );

    const mlData = await mlResponse.json();

    if (mlData.errors) {
      return { error: mlData.message };
    }

    return { success: "Merci pour votre inscription!" };
  } catch (error) {
    console.error("Error in subscription:", error);
    return { error: "Internal server error" };
  }
}
