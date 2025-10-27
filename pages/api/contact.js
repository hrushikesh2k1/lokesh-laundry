// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Please fill all required fields." });
  }

  try {
    // For now, just log the data (you can connect email later)
    console.log("📩 New contact message received:", {
      name,
      email,
      phone,
      subject,
      message,
    });

    return res.status(200).json({ success: true, message: "Message received!" });
  } catch (error) {
    console.error("Error in contact API:", error);
    return res.status(500).json({ error: "Server error. Try again later." });
  }
}
