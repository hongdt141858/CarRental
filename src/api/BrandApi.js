import MyService from "../util/service";

const BandApi = {
    getBrandByType: async () => {
        var result = null;
      
        await MyService.getRequestData("/brand")
            .then(res => result = res.data)
            .catch(err => console.log(err));
        return result;
    }
}
export default BandApi

