import { Item } from "components/cardItem";
import { UsersList } from "services/endpoints";
import { genderTranslte } from "utils/genderTranslate";

export const CardContent = ({
  fullName,
  jobTitle,
  jobType,
  gender,
  vehicle,
}: Omit<UsersList, "id">) => {
  const genderFa = genderTranslte(gender);
  return (
    <>
      <Item title="نام" value={fullName} />
      <Item title="جنسیت" value={genderFa} />
      <Item title="عنوان شغل" value={jobTitle} />
      <Item title="نوع شغل" value={jobType} />
      <Item title="نوع خودرو" value={vehicle} />
    </>
  );
};
