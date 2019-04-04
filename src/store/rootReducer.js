const initialState = {
  name: "Elio Freitas",
  role: "web developer",
  profileTitle: "profileTitle",
  profile:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  contactTitle: "contactTitle",
  residence: "republic of banana",
  mail: "mail@mail.com",
  linkedin: "linkedin.com",
  linkedinUrl: "linkedin.com",
  github: "github.com",
  githubUrl: "github.com",
  number: "+999-999-999-990",
  experienceTitle: "experienceTitle",
  experience: [
    {
      key: "1",
      title: "Title",
      company: "#Super Company",
      initialDate: "19-19-19",
      finalDate: "19-19-19",
      description:
        "dent, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ],
  educationTitle: "educationTitle",
  education: [
    {
      key: "1",
      degree: "Degree",
      institute: "#Super Institute",
      initialDate: "19-19-19",
      finalDate: "19-19-19"
    }
  ],
  skillsTitle: "skillsTitle",
  skills: [
    {
      key: "1",
      name: "Skill",
      percentage: "10"
    }
  ]
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
