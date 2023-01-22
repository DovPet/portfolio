export default {
    name: "country",
    title: "Country",
    type: "document",
    i18n: true,
    fields: [
      {
        name: "locale",
        title: "Locale",
        type: "string"
      },
      {
        name: "countryImage",
        title: "CountryImage",
        type: "image",
        options: {
          hotspot: true
        }
      },
    ]
  };
  