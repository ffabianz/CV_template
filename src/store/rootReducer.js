const initialState = {
  name: "Elio Freitas",
  role: "web developer",
  profile:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  residence: "republic of banana",
  mail: "mail@mail.com",
  linkedin: "linkedin.com",
  github: "github.com",
  experience: [
    {
      key: "1",
      title: "Title",
      company: "#Super Company",
      initialDate: "19-19-19",
      finalDate: "19-19-19",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ],
  education: [
    {
      key: "1",
      degree: "Degree",
      institute: "#Super Institute",
      initialDate: "19-19-19",
      finalDate: "19-19-19"
    }
  ],
  skills: [
    {
      name: "Skill",
      percentage: "10"
    }
  ]
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
