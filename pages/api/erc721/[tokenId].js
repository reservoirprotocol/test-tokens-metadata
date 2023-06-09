import { BASE_URL } from "../../../src/constants";

const backgrounds = ["Blue", "Yellow", "Green", "Red", "Black"];
const types = ["Special", "Regular", "Epic"];
const symbols = ["Alpha", "Gamma", "Delta", "Epsilon"];

const api = async (req, res) => {
  const tokenId = Number(req.query.tokenId);

  return res.json({
    name: `Reservoir ${tokenId}`,
    description: "Reservoir Test Token",
    image: `${BASE_URL}/erc721.png`,
    attributes: [
      {
        trait_type: "Background",
        value: backgrounds[tokenId % backgrounds.length],
      },
      { trait_type: "Type", value: types[tokenId % types.length] },
      { trait_type: "Symbol", value: symbols[tokenId % symbols.length] },
    ],
  });
};

export default api;
