import { BASE_URL } from "../../../src/constants";

const api = async (req, res) => {
  return res.json({
    name: `Memswap Alpha NFT`,
    description: "Memswap Alpha",
    image: `${BASE_URL}/memswap-alpha-token.png`,
    attributes: [],
  });
};

export default api;
