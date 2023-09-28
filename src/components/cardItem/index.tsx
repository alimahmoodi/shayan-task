interface ItemProps {
  title: string;
  value: string;
}
export const Item = ({ title, value }: ItemProps) => {
  return (
    <div style={{ display: "flex", columnGap: 10 }}>
      <p>{title}:</p>
      <p>{value}</p>
    </div>
  );
};
