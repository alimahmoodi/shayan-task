import { UsersList } from "services/endpoints";
import { useStyles } from "./style";
import { genderTranslte } from "utils/genderTranslate";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

const HistoryItem = ({
  fullName,
  gender,
  vehicle,
  jobTitle,
  onClick,
  id,
}: { onClick: (id: UsersList["id"]) => void } & Pick<
  UsersList,
  "fullName" | "gender" | "vehicle" | "jobTitle" | "id"
>) => {
  const classes = useStyles();
  const handleHandleOnclick = () => {
    onClick(id);
  };
  return (
    <div
      onClick={handleHandleOnclick}
      style={{
        borderBottom: "1px solid gray",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <HistoryOutlinedIcon />
      <div style={{ marginRight: 10 }}>
        <p className={classes["name"]}>{fullName}</p>
        <div style={{ display: "flex", columnGap: 10 }}>
          <div style={{ display: "flex", columnGap: 4 }}>
            <p className={classes["itemLabel"]}>جنسیت:</p>
            <p className={classes["itemValue"]}>{genderTranslte(gender)}</p>
          </div>
          <div style={{ display: "flex", columnGap: 4 }}>
            <p className={classes["itemLabel"]}>عنوان شغل:</p>
            <p className={classes["itemValue"]}>{jobTitle}</p>
          </div>
          <div style={{ display: "flex", columnGap: 4 }}>
            <p className={classes["itemLabel"]}>نوع خودرو:</p>
            <p className={classes["itemValue"]}>{vehicle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HistoryItem };
