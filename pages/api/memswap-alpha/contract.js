import { BASE_URL } from "../../../src/constants";

const api = async (req, res) => {
  return res.json({
    name: "Memswap Alpha",
    description: "Proof of using the alpha version of Memswap",
    image: `${BASE_URL}/memswap-alpha-background.png`,
    external_link: "https://memswap.xyz",
  });
};

export default api;
