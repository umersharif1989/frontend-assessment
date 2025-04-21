import { ReactNode } from "react";
import { Profile } from "./types";

export const PROFILE_PARAMS: {
  columnTitle: string;
  renderValue: (profile: Profile) => ReactNode;
}[] = [
  {
    columnTitle: "Full Name",
    renderValue: (profile: Profile) =>
      `${profile.name.first} ${profile.name.last}`,
  },
  {
    columnTitle: "Age",
    renderValue: (profile: Profile) => profile.dob.age,
  },
  {
    columnTitle: "Email",
    renderValue: (profile: Profile) => profile.email,
  },
];
