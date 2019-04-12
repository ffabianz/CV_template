const initialState = {
  name: "John Doe",
  role: "Miner",
  profileTitle: "profileTitle",
  profile:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  contactTitle: "contactTitle",
  residence: "republic of banana",
  mail: "mail@mail.com",
  linkedin: "linkedin",
  linkedinUrl: "https://www.linkedin.com/in/elio-samuel-granados-freitas/",
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      key: "2",
      title: "Title",
      company: "#Super Company",
      initialDate: "19-19-19",
      finalDate: "19-19-19",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      key: "3",
      title: "Title",
      company: "#Super Company",
      initialDate: "19-19-19",
      finalDate: "19-19-19",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
      percentage: 10
    }
  ]
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
