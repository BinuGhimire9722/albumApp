import axios from "axios";
import url from "../constant/url";
const AlbumService = {
    getAlbum : async ()=>{
        let result = await axios.get(url+"albums?_page="+0+"&_limit="+10);
        console.log(result);
        return result;
    },

    getAlbumById : async (id) =>{
        try{
            let result = await axios.get(url+"photos?albumId="+id);
            console.log(result);
            return result;
        }catch(err){
            return err;
        }
    }

}

export default AlbumService;