import { useStyles } from "./style";
interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  const classes = useStyles();
  return <div className={classes["card"]}>{children}</div>;
};
