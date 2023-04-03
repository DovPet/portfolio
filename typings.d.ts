interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageinfo";
  address: string;
  backgroundInformation: string;
  backgroundInformationTitle: string;
  email: string;
  name: string;
  phoneNumber: string;
  profilePicture: Image;
  heroText: string;
  typeOfWorks: string[];
  navigationLinks: string[];
  contactText: string;
  sections: Section[];
  skillSectionHeader: string;
  contactSectionHeader: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  experience: string;
  title: string;
  progress: number;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Country extends SanityBody {
  _type: "country";
  locale: string;
  countryImage: Image;
}

export interface Section extends SanityBody {
  _type: "section";
  title: string;
  text: string;
}
