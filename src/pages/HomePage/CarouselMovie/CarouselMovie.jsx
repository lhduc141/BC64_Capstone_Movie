import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { movieSer } from "../../../service/movieService";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const CarouselMovie = () => {
  const [dataBan, setDataBan] = useState([]);
  const carouRef = useRef();
  const fetchBannerMovie = async () => {
    try {
      const dataBanner = await movieSer.getBannerMovie();
      let newDataBanner = dataBanner.data.content;

      setDataBan(newDataBanner);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //call API
    fetchBannerMovie();
  }, []);

  return (
    <div>
      <div className="relative">
        <Carousel ref={carouRef} autoplay>
          {dataBan.map((banner) => {
            return (
              <div key={banner.maBanner} className="w-full">
                <img
                  style={{ height: "700px" }}
                  className="h-full w-full object-cover"
                  src={banner.hinhAnh}
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>

        <button
          onClick={() => {
            carouRef.current.next();
          }}
          className="absolute right-10 top-1/3 text-white text-[50px] opacity-10 transition-opacity duration-300 hover:opacity-40"
        >
          <i className="fa fa-angle-right"></i>
        </button>
        <button
          onClick={() => {
            carouRef.current.prev();
          }}
          className="absolute left-10 top-1/3 text-white text-[50px] opacity-10 transition-opacity duration-300 hover:opacity-40"
        >
          <i className="fa fa-angle-left"></i>
        </button>
      </div>

      {/* <div className="container mx-auto max-w-5xl px-6 bg-white">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Hover me
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="col-span-3">hello</div>
          <div className="col-span-3">hello</div>
          <div className="col-span-2">hello</div>
        </div>
      </div> */}
    </div>
  );
};

export default CarouselMovie;
