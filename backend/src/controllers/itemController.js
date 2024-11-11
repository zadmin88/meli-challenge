// import { ItemService } from "../services/itemService";
const asyncHandler = require("express-async-handler");
const { transformResponse } = require("../service/itemService");

const getItems = asyncHandler(async (req, res, next) => {
  try {
    const { search } = req.query;

    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const data = await response.json();

    const transformedData = await Promise.all(
      data.results.map(async (item) => {
        const sellerUrl = `https://api.mercadolibre.com/users/${item.seller.id}`;
        const sellerResponse = await fetch(sellerUrl);

        if (!sellerResponse.ok) {
          throw new Error(
            `API call failed with status: ${sellerResponse.status}`
          );
        }

        const sellerData = await sellerResponse.json();
        return { ...item, city: sellerData.address.city };
      })
    );

    res.json(transformResponse({ ...data, results: transformedData }));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const getItemsById = asyncHandler(async (req, res, next) => {
  console.log("testing GetItemById");
  //   try {
  //     const { id } = req.params;
  //     const item = await ItemService.getItemById(id);
  //     if (!item) {
  //       return res.status(404).json({ message: "Item not found" });
  //     }
  //     res.json(item);
  //   } catch (error) {
  //     next(error);
  //   }
  res.status(200);
});

module.exports = { getItems, getItemsById };
