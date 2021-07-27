import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AlbumService from "../services/services";

function AlbumPage(props){

    console.log(props);
    // let {id} = useParams();
    // console.log(id);

    useEffect(() => {
        async function getAlbumData(){
            let response = await AlbumService.getAlbumById();
            console.log(response);
        }
        getAlbumData();
    },[]);
    
    return <div>
        this is album
    </div>
}
export default AlbumPage;