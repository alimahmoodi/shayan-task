import { UsersList } from "services/endpoints";
import { Item } from "./item";

export const CardContent = ({
  fullName,
  jobTitle,
  jobType,
  gender,
  vehicle,
}: Omit<UsersList, "id">) => {
  return (
    <>
      <Item title="نام" value={fullName} />
      <Item title="جنسیت" value={gender} />
      <Item title="عنوان شغل" value={jobTitle} />
      <Item title="نوع شغل" value={jobType} />
      <Item title="نوع خودرو" value={vehicle} />
    </>
  );
};
