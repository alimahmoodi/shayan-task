import { baseApiQuery as api } from "./baseApiQuery";
export const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    usersUsingGet: build.query<UsersList[], void>({
      query: () => ({
        url: "/api/users",
      }),
    }),
  }),
});
export { injectedRtkApi as nmsApi };

export interface UsersList {
  fullName: string;
  gender: "male" | "female";
  id: string;
  jobTitle: string;
  jobType: string;
  vehicle: string;
  description: string;
}
export const { useUsersUsingGetQuery } = injectedRtkApi;
