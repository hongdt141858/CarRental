import { reactLocalStorage } from "reactjs-localstorage";
import MyUtil from "../util/MyUtil";

const save = (state) => {
    console.log("state booking: ", state)
    reactLocalStorage.set("booking.type", state.type);
    reactLocalStorage.set("booking.location", state.location);
    reactLocalStorage.set("booking.rental_date", state.rentalDate);
    reactLocalStorage.set("booking.return_date", state.returnDate);
}


const getDayNum = (rentalDate, returnDate) => {

    var rentalFormat = MyUtil.getDateFormatEn(new Date(rentalDate));
    var returnFormat = MyUtil.getDateFormatEn(new Date(returnDate))

    console.log(rentalFormat + ' - ' + returnFormat)

    var rld = rentalFormat ? new Date(rentalFormat).getTime() : 0;
    var rnd = returnFormat ? new Date(returnFormat).getTime() : 0;
    var dayNum = (rnd - rld) / (24 * 1000 * 3600) + 1;
    return dayNum ? dayNum : 0
}

const getDays = (rentalDate, returnDate) => {
    var daysOfYear = [];
    if (rentalDate && returnDate) {
        var rld = new Date(rentalDate)
        var rnd = new Date(returnDate)
        var daysOfYear = [];
        for (var d = rld; d <= rnd; d.setDate(d.getDate() + 1)) {
            daysOfYear.push(new Date(d));
        }
    }
    return daysOfYear

}

const getWdays = (partWday, rentalDate, returnDate) => {
    var arr_days = getDays(rentalDate, returnDate);
    var wdays = [];
    if (arr_days.length > 0 && partWday.length > 0) {
        arr_days.map(d => {
            partWday.map(pw => {
                if (d.getDay() === pw.partner_weekdays.weekday_index) wdays.push(d);
            })
        })
    }
    return wdays;
}

const getHolis = (partHoli, rentalDate, returnDate) => {
    var arr_days = getDays(rentalDate, returnDate);
    var holis = [];

    if (arr_days.length > 0 && partHoli.length > 0) {
        arr_days.map(d => {
            var date = d.getDate();
            var month = d.getMonth();
            partHoli.map(ph => {
                var holiFrom = ph.partner_holidays.holiday_from;
                var holiTo = ph.partner_holidays.holiday_from_to;
                if (holiFrom && holiTo) {
                    var dateFrom = new Date(holiFrom);
                    var dateTo = new Date(holiTo);
                    for (var day = dateFrom; day <= dateTo; day.setDate(day.getDate() + 1)) {
                        if ((day.getDate() === date) && (day.getMonth() === month)) holis.push(d);
                    }
                }

            })
        })
    }
    return holis
}

const getDayNumHoliIsWday = (wdays, holis) => { // so ngay holi la ngay cuoi tuan

    var dayNum = 0;
    if (wdays.length > 0 && holis.length > 0) {
        holis.map(h => {
            wdays.map(w => {
                if (w.getTime() === h.getTime()) dayNum++;
            })
        })
    }
    return dayNum;
}

const getWdayExtraFee = (vehicle) => {
    if (!vehicle) return 0;
    var fee;
    if (vehicle.partner.partner_weekdays.length > 0 && vehicle.partner.partner_weekdays[0]["part_wday_exta_fee"]){
        fee = vehicle.partner.partner_weekdays[0].partner_extra_fee;
        fee = fee? fee:0
    }
    else fee = 0;

    var price = 0;
    if (isPercent(fee)) {
        price = vehicle.partner_extra_fee * fee / 100;
    } else {
        price = fee;
    }
    return price
}


const getHoliExtraFee = (vehicle) => {
    if (!vehicle) return 0;
    var fee;
    if (vehicle.partner.partner_holidays.length > 0)
        fee = vehicle.partner.partner_holidays[0].partner_extra_fee;
    fee  = fee ? fee : 0;
    var price = 0;
    if (isPercent(fee)) {
        price += vehicle.partner_extra_fee * fee / 100
    } else price += fee
    return price
}

const getPrice = (vehicle, dayNum, rentalDate, returnDate) => {
    var wdays = getWdays(vehicle.partner.partner_weekdays, rentalDate, returnDate);
    var holis = getHolis(vehicle.partner.partner_holidays, rentalDate, returnDate);
    console.log("vehicle part holiday:", vehicle.partner.partner_holidays)
    console.log("holiday: ", holis)
    var holiIsWday = getDayNumHoliIsWday(wdays, holis);

    var wdayNum = wdays.length - holiIsWday;
    var holiNum = holis.length;
    var defaultPrice = dayNum * vehicle.vehicle_partner_default_price;
    defaultPrice = defaultPrice ? defaultPrice : 0
    var wdayExtraFee = getWdayExtraFee(vehicle) ? getWdayExtraFee(vehicle) : 0;
    var holiExtraFee = getHoliExtraFee(vehicle) ? getHoliExtraFee(vehicle) : 0;
    var extraFee = wdayExtraFee * wdayNum + holiExtraFee * holiNum;
    var sumPrice = defaultPrice + extraFee;
    return { sumPrice, extraFee, defaultPrice }
}

const isPercent = (num) => {
    if (num > -100 && num < 100) return true;
    else return false
}

const clearDate = () => {
    reactLocalStorage.set("customer_info.fullname", "");
    reactLocalStorage.set("customer_info.email", "");
    reactLocalStorage.set("customer_info.phone", "");
    reactLocalStorage.set("customer_info.payment", "");
    reactLocalStorage.set("customer_info.note", "");
    reactLocalStorage.set("booking.type", "");
    reactLocalStorage.set("booking.brand", "");
    reactLocalStorage.set("booking.location", "");
    reactLocalStorage.set("booking.rental_date", "");
    reactLocalStorage.set("booking.return_date", "");
    reactLocalStorage.set("booking.pick_up_form", "");
    reactLocalStorage.set("booking.deli_address", "");
    reactLocalStorage.set("booking.deli_address_lat", "");
    reactLocalStorage.set("booking.deli_address_lng", "");
    reactLocalStorage.set("booking.promotion_code", "");
    reactLocalStorage.setObject("booking.vehicle", null);
    reactLocalStorage.setObject("booking.detail_prices", null);
    reactLocalStorage.set("price.day_num", "");
    reactLocalStorage.set("price.default_price", "");
    reactLocalStorage.set("price.extra_fee", "");
    reactLocalStorage.set("price.sum_price", "");
    reactLocalStorage.set("price.extra_hour_num", "");
    reactLocalStorage.set("price.holi_num", "");
    reactLocalStorage.set("price.wday_num", "");
}

export { isPercent, save, getDayNum, getDays, getWdays, getHolis, getDayNumHoliIsWday, getHoliExtraFee, getWdayExtraFee, getPrice, clearDate }