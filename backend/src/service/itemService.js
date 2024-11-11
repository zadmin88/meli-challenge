const transformResponse = (data) => {
  const author = {
    name: "Simon",
    lastname: "Franco",
  };

  const categories =
    data.filters
      ?.find((filter) => filter.id === "category")
      ?.values[0]?.path_from_root?.map((category) => category.name) || [];

  const items = data.results.map((item) => {
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
      city: item.city,
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
