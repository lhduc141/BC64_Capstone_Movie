import { MA_NHOM, http } from "./urlConfig";

export const ticketService = {
  postTicket: (data) => {
    let url = `/api/QuanLyDatVe/DatVe`;
    return http.post(url, data);
  },
};
