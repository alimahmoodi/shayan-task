import { Card } from "components/card";
import { Item } from "components/cardItem";
import { useParams } from "react-router-dom";
import { injectedRtkApi } from "services/endpoints";
import { genderTranslte } from "utils/genderTranslate";

export const Details = () => {
  const { id } = useParams();
  const { data } = injectedRtkApi.endpoints.usersUsingGet.useQuery();
  const itemDetail = data?.find(({ id: _id }) => _id === id);

  return (
    <div style={{ padding: 40 }}>
      <Card>
        {itemDetail ? (
          <>
            <Item title="نام" value={itemDetail.fullName} />
            <Item title="جنسیت" value={genderTranslte(itemDetail?.gender)} />
            <Item title="عنوان شغل" value={itemDetail.jobTitle} />
            <Item title="نوع شغل" value={itemDetail.jobType} />
            <Item title="نوع خودرو" value={itemDetail.vehicle} />
            <Item title="توضیحات" value={itemDetail.description} />
          </>
        ) : (
          "اطلاعاتی وجود ندارد!"
        )}
      </Card>
    </div>
  );
};
