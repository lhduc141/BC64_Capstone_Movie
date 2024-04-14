import { Tabs } from "antd";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
const Movie24h = [
  {
    image: "https://i.imgur.com/cp0kb1t.jpeg",
    title: "Cù lao xác sống là phim hay nhất 2022.",
    content:
      "Nhận được số lượng phản hồi tích cực rất lớn, cù lao xác sống được cử đi tham gia oscar..",
    like: "100",
    cmt: "9",
  },
  {
    image: "https://i.imgur.com/JlQSd8E.jpeg",
    title: "'Nhà Bà Nữ' đạt doanh thu khủng tại Mỹ.",
    content:
      "Không còn nghi ngờ gì nữa, sức hút từ phim của Trấn Thành đã được khẳng định...",
    like: "10",
    cmt: "9",
  },
  {
    image: "https://i.imgur.com/d0UCzn1.jpeg",
    title: "Huyền Sử Vua Đinh Cán mốc doanh thu 100 tỷ.",
    content:
      "Con số doanh thu không hề tệ với kinh phí bỏ ra chỉ 50 triệu đồng...",
    like: "90",
    cmt: "9",
  },
  {
    image: "https://i.imgur.com/tgk5dQE.png",
    title: "Chị Chị Em Em gây thất vọng vì không có cảnh nóng.",
    content: "Nhiều khán giả bỏ về sớm vì thất vọng với cảnh phim...",
    like: "999",
    cmt: "1299",
  },
  {
    image: "https://i.imgur.com/azu8Bj4.jpeg",
    title: "Bố già là phim Việt hot nhất 2023.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatum...",
    like: "1",
    cmt: "4",
  },
  {
    image: "https://i.imgur.com/ztZHabY.jpeg",
    title: "Hít drama mới với Seo Ye Ji.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatum...",
    like: "0",
    cmt: "0",
  },
  {
    image: "https://i.imgur.com/zzBN7nJ.jpeg",
    title: "Tiếng khóc trong cô đơn của Ngạn.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatum...",
    like: "0",
    cmt: "19",
  },
  {
    image: "https://i.imgur.com/2OUQ9cQ.png",
    title: 'Thông điệp mới của "Về nhà đi con".',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatum...",
    like: "9",
    cmt: "12",
  },
];
const Review = [
  {
    image: "https://i.imgur.com/BeHfJNL.jpeg",
    title: "Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết",
    content:
      "Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám, câu chuyện ly kỳ...",
    like: "10",
    cmt: "7",
  },
  {
    image: "https://i.imgur.com/H7vsLu8.jpeg",
    title: "Review: Dinh Thự Oan Khuất (Ghost Of War)",
    content:
      "Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại...",
    like: "1",
    cmt: "2",
  },
  {
    image: "https://i.imgur.com/JmxwIRv.jpeg",
    title: "BlacKkKlansman - cốc nước lạnh để người Mỹ thức tỉnh",
    content:
      "Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn...",
    like: "1",
    cmt: "12",
  },
  {
    image: "https://i.imgur.com/mWtgbY5.jpeg",
    title: "American Sniper - Chính nghĩa hay phi nghĩa?",
    content: "Khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ...",
    like: "8",
    cmt: "7",
  },
  {
    image: "https://i.imgur.com/FxHhrNG.jpeg",
    title: "Nhìn lại chặng đường của Spider-Man.",
    content:
      "Phần phim riêng đầu tiên của Spider-Man thuộc MCU diễn ra ngay sau các sự kiện trong Captain America: Civil War.",
    like: "8",
    cmt: "7",
  },
  {
    image: "https://t.vietgiaitri.com/2010/11/quai.jpg",
    title: "Quái vật sông Hàn là bộ phim 'quái thú'?",
    content:
      "Bộ phim kể về sự tiến hóa của một con cá bởi ảnh hưởng của chất độc hóa học",
    like: "0",
    cmt: "8",
  },
  {
    image: "https://i.imgur.com/asPgYZH.jpeg",
    title: "Đội vợ lên đầu, cứu nguy tổng thống",
    content: "Bộ phim xuất sắc của điện ảnh Thái Lan năm 2020",
    like: "10",
    cmt: "3",
  },
  {
    image: "https://i.imgur.com/QxKNST4.jpeg",
    title: "[review] -  Dòng máu anh hùng, đỉnh cao võ thuật",
    content: "Bộ phim xuất sắc của Jonny Trí Nguyễn",
    like: "110",
    cmt: "300",
  },
];
const Promotion = [
  {
    image: "https://i.imgur.com/LbOPV32.jpeg",
    title: "Nhập mã VNPAY50 giảm đến 50%",
    content:
      "Hàng ngàn mã giảm giá đến từ VNpay đang chờ bạn sử dụng. Tham gia ngay...",
    like: "10",
    cmt: "7",
  },
  {
    image: "https://i.imgur.com/SWKrsaI.jpeg",
    title: "Xem phim trước 10h chỉ còn 45k",
    content:
      "Mừng ngày trở lại, hàng loạt khuyến mại KHỦNG đổ bộ cùng lúc dàng cho các tín đồ của TIX đây...",
    like: "1",
    cmt: "0",
  },
  {
    image: "https://i.imgur.com/sbq7RdK.jpeg",
    title: "Thanh toán bằng momo nhận ngay giảm giá",
    content: "Tin vui cho những khách hàng đang sử dụng ví momo...",
    like: "1",
    cmt: "3",
  },
  {
    image: "https://i.imgur.com/fMJdOdh.jpeg",
    title: "Thanh toán bằng momo nhận ngay giảm giá",
    content: "Học sinh sinh viên đồng giá 45k, áp dụng toàn quốc...",
    like: "0",
    cmt: "4",
  },
  {
    image: "https://i.imgur.com/GuCBxtQ.jpeg",
    title: "Đặt vé qua momo để nhận ưu đãi hấp dẫn",
    content: "Ưu đãi ngập tràn đến từ ví điện tử momo...",
    like: "0",
    cmt: "5",
  },
  {
    image: "https://i.imgur.com/Hnr3Vxm.jpeg",
    title: "U22 chỉ 99k trải nghiệm thật đã!!!",
    content: "Cực bự, cực to, trải nghiệm ngay màn hình này thôi...",
    like: "0",
    cmt: "6",
  },
  {
    image: "https://i.imgur.com/dKfMVmz.jpeg",
    title: "Tải momo giảm ngay đến 99k",
    content: "Ưu đãi ngập tràn đến từ ví điện tử momo...",
    like: "0",
    cmt: "7",
  },
  {
    image: "https://i.imgur.com/zOib0Rw.jpeg",
    title: "CGV ưu đãi mua 2 tặng 1 thật sảng khoái",
    content: "Áp dụng cho tất cả các khách hàng checkin tại CGV...",
    like: "10",
    cmt: "8",
  },
];
const QuickNews = () => {
  const Banner = (props) => {
    const { className } = props || {};
    const { image, title, content, like, cmt } = props.content || {};
    return (
      <div className={`${className} pb-14`}>
        <img
          className="object-cover card-image w-full h-52 rounded-md mb-2 shadow-md"
          src={image}
          alt="img"
        />
        <div className="card-text">
          <h3 className="card-title text-red-700 font-bold pb-2 cursor-pointer text-sm md:text-base hover:text-slate-800 duration-300">
            {title}
          </h3>
          <p className="card-sub-title text-neutral-600 text-xs md:text-sm indent-2 h-14 overflow-hidden">
            {content}
          </p>
        </div>
        <div className="flex text-xl gap-x-5">
          <div className="like">
            <AiOutlineLike className="mr-2 inline-block" />
            <span>{like}</span>
          </div>
          <div className="comment">
            <AiOutlineComment className="mr-2 inline-block" />
            <span>{cmt}</span>
          </div>
        </div>
      </div>
    );
  };
  const SmallBanner = (props) => {
    const { className } = props || {};
    const { image, title, like, cmt } = props.content || {};
    return (
      <div className={className}>
        <div className="flex cursor-pointer font-medium leading-4 hover:text-slate-800 hover:-translate-y-1 duration-300">
          <div className="basis-3/12">
            <img
              className="w-full h-full rounded-sm object-cover"
              src={image}
              alt="hinh anh phim"
            />
          </div>
          <div className="basis-9/12 pl-3">
            <h4 className="text-red-700">{title}</h4>
            <div className="flex text-lg gap-x-5 ">
              <div className="like">
                <AiOutlineLike className="mr-2 inline-block" />
                <span>{like}</span>
              </div>
              <div className="comment">
                <AiOutlineComment className="mr-2 inline-block" />
                <span>{cmt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const content_1 = {
    label: (
      <h3 className="parent__tab text-[1.25rem] font-semibold hover:text-red-500 lg:text-">
        Điện ảnh 24h
      </h3>
    ),
    key: 1,
    children: (
      <div className="flex flex-wrap">
        <Banner className="top-item basis-6/12 px-4" content={Movie24h[0]} />
        <Banner className="top-item basis-6/12 px-4" content={Movie24h[1]} />
        <Banner
          className="bot-item basis-6/12 lg:basis-4/12 px-4"
          content={Movie24h[2]}
        />
        <Banner
          className="bot-item basis-6/12 lg:basis-4/12 px-4"
          content={Movie24h[3]}
        />
        <div className="bot-item flex justify-around flex-wrap basis-full lg:basis-4/12 px-4">
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Movie24h[4]}
          />
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Movie24h[5]}
          />
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Movie24h[6]}
          />
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Movie24h[7]}
          />
        </div>
      </div>
    ),
  };
  const content_2 = {
    label: (
      <h3 className="parent__tab text-[1.25rem] font-semibold hover:text-red-500">
        Review
      </h3>
    ),
    key: 2,
    children: (
      <div className="flex flex-wrap">
        <Banner className="top-item basis-6/12 px-4" content={Review[0]} />
        <Banner className="top-item basis-6/12 px-4" content={Review[1]} />
        <Banner
          className="bot-item basis-6/12 lg:basis-4/12 px-4"
          content={Review[2]}
        />
        <Banner
          className="bot-item basis-6/12 lg:basis-4/12 px-4"
          content={Review[3]}
        />
        <div className="bot-item flex justify-around flex-wrap basis-full lg:basis-4/12 px-4">
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Review[4]}
          />
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Review[5]}
          />
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Review[6]}
          />
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Review[7]}
          />
        </div>
      </div>
    ),
  };
  const content_3 = {
    label: (
      <h3 className="parent__tab text-[1.25rem] font-semibold hover:text-red-500">
        Khuyến mãi
      </h3>
    ),
    key: 3,
    children: (
      <div className="flex flex-wrap">
        <Banner className="top-item basis-6/12 px-4" content={Promotion[0]} />
        <Banner className="top-item basis-6/12 px-4" content={Promotion[1]} />
        <Banner
          className="bot-item basis-6/12 lg:basis-4/12 px-4"
          content={Promotion[2]}
        />
        <Banner
          className="bot-item basis-6/12 lg:basis-4/12 px-4"
          content={Promotion[3]}
        />
        <div className="bot-item flex justify-around flex-wrap basis-full lg:basis-4/12 px-4">
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Promotion[4]}
          />
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Promotion[5]}
          />
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Promotion[6]}
          />
          <SmallBanner
            className="bot-list basis-5/12 lg:basis-full"
            content={Promotion[7]}
          />
        </div>
      </div>
    ),
  };
  return (
    <div className="booking__news container mx-auto pb-16" id="quickNews">
      <Tabs
        animated
        className="news__content w-full  mx-auto"
        defaultActiveKey="1"
        centered
        items={[content_1, content_2, content_3]}
      />
    </div>
  );
};
export default QuickNews;
