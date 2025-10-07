import axios from "axios";

export default async function handler(req, res) {
  try {
    const apiKey = process.env.WAKATIME_API_KEY; // Defina no painel da Vercel
    const encodedKey = Buffer.from(apiKey).toString("base64");

    const response = await axios.get(
      "https://wakatime.com/api/v1/users/current/all_time_since_today",
      {
        headers: {
          Authorization: `Basic ${encodedKey}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Erro ao buscar dados do WakaTime" });
  }
}
