import MyService from "../util/service";

const CityApi = {
    getAll: async () => {
        var cities = null;
        await MyService.getRequestData("/city")
            .then(result => cities = result.data)
            .catch(err => console.log(err));

        console.log(cities)
        return cities 
    }
}

export default CityApi;