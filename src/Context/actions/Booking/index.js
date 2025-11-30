
import axiosInstance from "../../../Api/AxiosInstance/AxiosInstance";
import { CREATE_BOOKING, LIST_BOOKING } from "../../../Api/Api";

export const CreateBooking = (props) => (onResponse) => {
    try {
        let BASE_URL = `${CREATE_BOOKING}`;

        axiosInstance.post(BASE_URL, props)
            .then((response) => {
                onResponse(response);
            })
            .catch((err) => {
                onResponse(err.response);
            });
    } catch (error) { }
};

export const getBookingList = (props) => onResponse => {
    try {
        let BASE_URL = `${LIST_BOOKING}`;

        axiosInstance.get(BASE_URL)
            .then((response) => {
                onResponse(response?.data);
            }).catch(error => {
                onResponse(error?.data);
            });

    } catch (error) {

    }
}