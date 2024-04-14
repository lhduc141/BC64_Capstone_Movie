import { useParams } from "react-router-dom";
import ListChair from "./ListGhe/ListChair";
import BuyTicket from "./BuyTicket/BuyTicket";

const ScreenPage = () => {
  const { maLichChieu } = useParams();

  return (
    <div
      className="flex flex-col xl:flex-row justify-center"
      style={{ backgroundColor: "#fdfcf0" }}
    >
      <div className="w-full">
        <ListChair maLichChieu={maLichChieu} />
      </div>

      <div className="w-full">
        <BuyTicket maLichChieu={maLichChieu} />
      </div>
    </div>
  );
};

export default ScreenPage;
