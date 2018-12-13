import { reactLocalStorage } from "reactjs-localstorage";
import MyService from "../util/service";

const BookingApi = {
    getBookings: async () => {
        var bookings = null;
        await MyService.getRequestData("/booking")
            .then(data => bookings = data)
            .catch(err => console.log(err))
        return bookings;
    },
    createBooking: async () => {
        let user = reactLocalStorage.getObject("user.info", null);
        var options = {
            customer_name: reactLocalStorage.get("customer_info.fullname", ""),
            customer_email: reactLocalStorage.get("customer_info.email", ""),
            customer_phone: reactLocalStorage.get("customer_info.phone", ""),
            booking_rental_date: reactLocalStorage.get("home.date_to"),
            booking_return_date: reactLocalStorage.get("home.date_from"),
            booking_note: reactLocalStorage.get("customer_info.note"),
            book_deli_form_id: 0,
            vehicle_partner_id: reactLocalStorage.getObject("booking.vehicle").vehicle_partner_id,
            vehicle_partner_name: reactLocalStorage.getObject("booking.vehicle").vehicle_partner_name
        };

        // options["use_acc_id"] = user ? parseInt(user.user_acc_id) : null

        var booking = null;
        
        await MyService.postRequestData("/booking", options)
            .then(result => {
                console.log(result);
                booking = result;
            })
            .catch(err => console.log(err));

        console.log(booking)
        return booking

    },
    getDeliPrice: async (options) => {
        // options = {
        //     "vhc_part_id": 1,
        // "cstm_deli_addr_lat": 21.014809,
        // "cstm_deli_addr_lng": 105.851624,
        // "cstm_deli_addr": "166 Huế, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội"
        // }
        var deliPrice = null;
        await MyService.getRequestData("/booking/deli-price", options)
            .then(result => {
                console.log(result);
                deliPrice = result.data
            })
            .catch(err => console.log(err))
        return deliPrice

    },
    getPromotion: async (options) => {
        // options = {
        //     promotionCode: ""
        // }
        var promotion = null;
        await MyService.getRequestData("/booking/promotion", options)
            .then(result => {
                console.log(result);
                promotion = result
            })
            .catch(err => console.log(err))
        return promotion
    },
    getDetailPriceBooking: async (options) => {
        console.log(options)
        var detailPrice = null;
        await MyService.getRequestData("/booking/detail-price", options)
            .then(result => {
                console.log(result);
                detailPrice = result.data
            })
            .catch(err => console.log(err))
        return detailPrice
    },
    getBookingByCode: async (code) => {
        var booking = null;
        await MyService.getRequestData("/booking/get-detail-booking/" + code)
            .then(result => {
                console.log(result);
                booking = result.data
            })
            .catch(err => console.log(err))
        return booking
    },
    getBookingsByToken: async (token) => {
        var url = "/booking/get-by-token";
        var booking = null;
        await MyService.getRequestData(url, {}, token)
            .then(result => {
                console.log(result);
                booking = result.data
            })
            .catch(err => console.log(err))
        return booking
    },
    postSendMail: async (options) => {
        console.log("options", options)
        if (!options || (!options.cstm_emai) || (!options.subject) || (!options.content)) {
            alert("Thông tin chưa đủ")
            return null;
        }
        var result = null;
        await MyService.postRequestData("/booking/send-email", options)
            .then(data => result = data)
            .catch(err => console.log(err));
        return result
    },

    postSendMailRequirement : async (options) =>{
        console.log("options", options)
        if (!options ||(!options.subject) || (!options.content)) {
            alert("Thông tin chưa đủ")
            return null;
        } 
        var result = null;
        await MyService.postRequestData("/booking/send-requirement", options )
        .then(data => result = data)
        .catch(err => console.log(err));
        return result
    },

}

function cleanOptions(obj) {
    console.log(obj.cstm_deli_addr_lat)
    var propNames = Object.getOwnPropertyNames(obj);
    for (var i = 0; i < propNames.length; i++) {
        var propName = propNames[i];
        console.log(propName + "-" + obj[propName])
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] === NaN || obj[propName] == "NaN") {
            console.log(propName)
            delete obj[propName];
        }
    }
}

export default BookingApi;