export async function sendMessage(data) {
    const res = await fetch("/api/messages/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) throw new Error("Message sending failed");
    return res.json();
  }
  