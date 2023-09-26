import { Item } from "./item";

interface CardContentProps {
  fullName: string;
  sex: string;
  jobTitle: string;
  jobType: string;
  vehicle: string;
}

export const CardContent = ({
  fullName,
  jobTitle,
  jobType,
  sex,
  vehicle,
}: CardContentProps) => {
  return (
    <>
      <Item title="نام" value={fullName} />
      <Item title="جنسیت" value={sex} />
      <Item title="عنوان شغل" value={jobTitle} />
      <Item title="نوع شغل" value={jobType} />
      <Item title="نوع خودرو" value={vehicle} />
    </>
  );
};
