import MyService from "../util/service";

const TransmissionApi = {
    getAllTransmisssion: async () => {
        var result = null;
      
        await MyService.getRequestData("/transmission")
            .then(res => result = res.data)
            .catch(err => console.log(err));
        return result;
    }
}
export default TransmissionApi

