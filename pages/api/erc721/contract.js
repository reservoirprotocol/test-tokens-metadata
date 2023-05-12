import { BASE_URL } from "../../../src/constants";

const api = async (req, res) => {
  return res.json({
    name: "Reservoir ERC721 Test Collection",
    description: "This is the Reservoir ERC721 test collection",
    image: `${BASE_URL}/background.jpg`,
    external_link: "https://reservoir.tools",
  });
};

export default api;
