import axios from "axios";

export const allTimeSinceToday = async () => {
  const { data } = await axios.get("/api/wakatime");
  return data;
};

export const wakaTimeService = {
  allTimeSinceToday,
};
