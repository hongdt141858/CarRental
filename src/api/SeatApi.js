import MyService from "../util/service";

const SeatApi = {
    getAllSeat: async () => {
        var result = null;
      
        await MyService.getRequestData("/seat")
            .then(res => result = res.data)
            .catch(err => console.log(err));
        return result;
    }
}
export default SeatApi

