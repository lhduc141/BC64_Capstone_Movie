import { Navigate, useNavigate, useParams } from "react-router-dom";
import ListChair from "./ListGhe/ListChair";
import BuyTicket from "./BuyTicket/BuyTicket";

const ScreenPage = () => {
  const { maLichChieu } = useParams();

  return (
    <div className="flex" style={{ backgroundColor: "#fdfcf0" }}>
      <div className="w-3/5">
        <ListChair maLichChieu={maLichChieu} />
      </div>

      <div className="w-2/5">
        <BuyTicket maLichChieu={maLichChieu} />
      </div>
    </div>
  );
};

export default ScreenPage;
