const transformResponse = (data) => {
  // Create author object (you might want to replace these with actual values)
  const author = {
    name: "Simon",
    lastname: "Franco",
  };

  // Extract categories from available_filters
  const categories =
    data.available_filters
      .find((filter) => filter.id === "category")
      ?.values.map((value) => value.name) || [];

  // Transform items
  const items = data.results.map((item) => {
    // Extract price decimals (getting decimal part from price)
    const priceString = item.price.toString();
    const [integerPart, decimalPart = "0"] = priceString.split(".");

    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: parseInt(integerPart),
        decimals: parseInt(decimalPart),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping?.free_shipping || false,
    };
  });

  return {
    author,
    categories,
    items,
  };
};

module.exports = {
  transformResponse,
};
