import { http } from "./urlConfig";

export const ticketService = {
  postTicket: (data) => {
    console.log("payload:", data.payload);
    console.log("authorization:", data.authorization);

    const url = `/api/QuanLyDatVe/DatVe`;
    return http.post(url, data.payload, {
      headers: {
        Authorization: `${data.authorization}`,
      },
    });
  },
};
