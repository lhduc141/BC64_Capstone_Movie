import { Navigate, useNavigate, useParams } from "react-router-dom";
import ListChair from "./ListGhe/ListChair";

const ScreenPage = () => {
  const { maLichChieu } = useParams();

  return (
    <div className="flex">
      <ListChair maLichChieu={maLichChieu} />
    </div>
  );
};

export default ScreenPage;
