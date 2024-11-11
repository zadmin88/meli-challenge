// import { ItemService } from "../services/itemService";
const asyncHandler = require("express-async-handler");
const { transformResponse } = require("../service/itemService");

const getItems = asyncHandler(async (req, res, next) => {
  try {
    const { search } = req.query;

    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return res.status(404).json({ error: "items not found" });
    }

    const data = await response.json();

    const transformedData = await Promise.all(
      data.results.map(async (item) => {
        const sellerUrl = `https://api.mercadolibre.com/users/${item.seller.id}`;
        const sellerResponse = await fetch(sellerUrl);

        if (!sellerResponse.ok) {
          return res.status(404).json({ error: "Seller not found" });
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
  try {
    const { id } = req.params;
    const apiUrl = `https://api.mercadolibre.com/items/${id}`;
    const descriptionUrl = `https://api.mercadolibre.com/items/${id}/description`;
    const categories = [];

    const [itemResponse, descriptionResponse] = await Promise.all([
      fetch(apiUrl),
      fetch(descriptionUrl),
    ]);

    if (!itemResponse.ok) {
      return res.status(404).json({ error: "Item not found" });
    }

    if (!descriptionResponse.ok) {
      return res.status(404).json({ error: "Description not found" });
    }

    const itemData = await itemResponse.json();
    const categoriesUrl = `https://api.mercadolibre.com/categories/${itemData.category_id}`;
    const categoriesResponse = await fetch(categoriesUrl);
    const descriptionData = await descriptionResponse.json();

    if (categoriesResponse.ok) {
      const categoriesData = await categoriesResponse.json();

      categoriesData?.path_from_root.map((category) =>
        categories.push(category.name)
      );
    }

    const result = {
      author: {
        name: "Simon",
        lastname: "Franco",
      },
      item: {
        id: itemData.id,
        title: itemData.title,
        price: {
          currency: itemData.currency_id,
          amount: itemData.price,
          decimals: 2,
        },
        picture: itemData.pictures[0].url,
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.initial_quantity,
        description: descriptionData.plain_text,
      },
      categories: categories,
    };

    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = { getItems, getItemsById };
