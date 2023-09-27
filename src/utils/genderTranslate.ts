import { UsersList } from "services/endpoints";

export const genderTranslte = (gender: UsersList["gender"]) => {
  if (gender === "male") return "مرد";
  else if (gender === "female") return "زن";
  else return "نامشخص";
};
