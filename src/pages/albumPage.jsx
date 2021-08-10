import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AlbumCard from "../components/card";
import AlbumService from "../services/services";
import { Row, Col } from "react-bootstrap";
import {AlbumContainer} from "../styled/albumPage.style"
function AlbumPage(props) {

    // let {id} = useParams();
    // console.log(id);

    const [albumData, setAlbumData] = useState([]);


    useEffect(() => {
        async function getAlbumData() {
            let id = props.match.params.id;
            let result = await AlbumService.getAlbumById(id);
            console.log(result);
            setAlbumData(result.data);
        }
        getAlbumData();
    }, []);

    return  <AlbumContainer>
            <Row>
                {albumData.map((item) => {
                    return <Col md={3}>
                        <AlbumCard title={item.title} image={item.url} /><br></br>
                    </Col>
                })}
            </Row>
        </AlbumContainer>

}
export default AlbumPage;