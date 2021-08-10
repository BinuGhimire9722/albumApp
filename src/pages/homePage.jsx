import { useState } from "react";
import { useEffect } from "react";
import AlbumService from "../services/services";
import history from "../history/history";
import {AlbumTitle, Album } from "../styled/album.style";

function HomePage(props){

    const[data , setData] = useState([]);
    console.log("HOMEPAGE LOADED");
    
    const getAlbumData = async()=> {
        let response = await AlbumService.getAlbum();
        console.log(response);
        setData(response.data);
    }

    useEffect(()=>{       
        getAlbumData();
    },[])

    const handleTitle=(id)=>{
        console.log(id);
        console.log(props); // props nai khali raixa
        props.history.push("/album/"+id);

    }
    
    return <div>

        {data.map((item)=>{
            return <Album>
                <AlbumTitle onClick={(e)=>handleTitle(item.id)}>{item.title}</AlbumTitle>
            </Album>
        })}

    </div>
}

export default HomePage;