export default {
  name: "skill",
  title: "Skill",
  type: "document",
  i18n: true,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100)
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
