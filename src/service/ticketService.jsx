import { http } from "./urlConfig";

export const ticketService = {
  postTicket: (data) => {
    const url = `/api/QuanLyDatVe/DatVe`;
    return http.post(url, data.payload, {
      headers: {
        Authorization: `${data.authorization}`,
      },
    });
  },
};
