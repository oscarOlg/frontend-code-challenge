import { UserData } from "../types";

export const userDataMock: UserData = {
  results: [
    {
      name: {
          title: "Mrs",
          first: "Roseni",
          last: "de Souza"
      },
      location: {
          country: "Brazil",

      },
      login: {
          uuid: "abc123",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/33.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/33.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/33.jpg"
      },
    }
  ]
}