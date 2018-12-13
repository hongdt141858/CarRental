import MyService from "../util/service";
import { reactLocalStorage } from "reactjs-localstorage";

const VehicleApi = {
    getVehicles: async () => {
        var vhc_bran_id = reactLocalStorage.get("booking.brand", 0)
        var vhc_seat_id = reactLocalStorage.get("booking.seat_filter", 0)
        var vhc_tms_id = reactLocalStorage.get("booking.tms_filter", 0)


        var request = {
            rental_date: reactLocalStorage.get("booking.rental_date"),
            return_date: reactLocalStorage.get("booking.return_date"),
            city_id: reactLocalStorage.get("home.city"),
            price_from: reactLocalStorage.get("vehicles.price_from", 0),
            price_to: reactLocalStorage.get("vehicles.price_to", 1500000)
        };

        if (vhc_seat_id)
            request["vhc_seat_id"] = vhc_seat_id

        if (vhc_bran_id)
            request["vhc_bran_id"] = vhc_bran_id

        if (vhc_tms_id)
            request["vhc_tms_id"] = vhc_tms_id


        let value = await MyService.getRequestData("/vehicle-partner", request);
        console.log(value)
        return value
        // return db_vehicles;
    },
    getVehicleById: async (vehicle_partner_id) => {
        let result = await MyService.getRequestData("/vehicle_partner/get-detail-vehicle-partner", { "vehicle_partner_id ": vehicle_partner_id });
        return result
    }
}

export default VehicleApi;