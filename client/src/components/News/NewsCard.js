import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';

function NewsCard({ params }) {
    return (
        <Card>
            <Link to={`/news/${params._id}`}>
                <Card.Img variant="top" src={params.image} />
                <Card.Body>
                    <Card.Title>{params.title}</Card.Title>
                </Card.Body>
            </Link>
            <Card.Footer>
                <small className="text-muted">
                    {/* <Moment format="d MMM YYYY (dddd) HH:mm"> */}
                        {params.addedAt}
                    {/* </Moment> */}
                </small>
            </Card.Footer>
        </Card>
    )
}

export default NewsCard;