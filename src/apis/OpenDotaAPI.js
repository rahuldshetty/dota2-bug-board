import axios from "axios";

import {OPEN_DOTA_URL} from "../constants/OpenDotaConstants"

let callOpenDotaGETAPI = async ({
    endpoint
}) => {
    return await axios.get(
        OPEN_DOTA_URL + endpoint
    )
}

export default callOpenDotaGETAPI

