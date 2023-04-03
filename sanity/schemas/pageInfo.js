export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  i18n: true,
  fields: [
    {
      name: "contactText",
      title: "Contact Text",
      type: "string"
    },
    {
      name: "heroText",
      title: "Hero Text",
      type: "text"
    },
    {
      name: "typeOfWorks",
      title: "Type of works",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "navigationLinks",
      title: "NavigationLinks",
      type: "array",
      of: [{ type: "string" }]
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
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "reference", to: { type: "section" } }]
    },
    {
      name: "skillSectionHeader",
      title: "SkillSectionHeader",
      type: "string"
    },
    {
      name: "contactSectionHeader",
      title: "ContactSectionHeader",
      type: "string"
    },
  ]
};
