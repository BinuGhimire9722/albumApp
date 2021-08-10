import {Card} from "react-bootstrap";
import AlbumPage from "../pages/albumPage";
function AlbumCard (props) {
    return <div>

        <Card style={{ width: '15rem', maxHeight : "400px"}}>
        <Card.Img  src={props.image} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        </Card>

    </div>
}
export default AlbumCard;