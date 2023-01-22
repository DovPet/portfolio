export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  i18n: true,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "heroImage",
      title: "HeroImage",
      type: "image"
    },
    {
      name: "backgroundInformation",
      title: "BackgroundInformation",
      type: "text"
    },
    {
      name: "backgroundInformationTitle",
      title: "BackgroundInformationTitle",
      type: "string"
    },
    {
      name: "profilePicture",
      title: "ProfilePicture",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string"
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "address",
      title: "Address",
      type: "string"
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }]
    }
  ]
};
