import { Container, Row, Col } from "react-bootstrap";
import {useState} from 'react';
import NewsCard from "../components/News/NewsCard";
import '../components/News/News.css'
function News() {
    const [news, setNews] = useState([{title: "Обновен рафик с разписания", _id: 'aoief284234djas',
     image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', addedAt: '2022-05-30'},
     {title: "Обновен рафик с разписания", _id: 'aoief284234djas',
     image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', addedAt: '2022-05-30'},
     {title: "Обновен рафик с разписания", _id: 'aoief284234djas',
     image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', addedAt: '2022-05-30'},
     {title: "Обновен рафик с разписания", _id: 'aoief284234djas',
     image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', addedAt: '2022-05-30'},
     {title: "Обновен рафик с разписания", _id: 'aoief284234djas',
     image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', addedAt: '2022-05-30'}])
    return (
        <>
            <img className="img-fluid" src="images/news-header-img.jpg" />
            <h1 className='page-header news-header text-center'>Последни Новини</h1>

            <Container>
                <Row>
                    {news.map(x =>
                        <Col xs={12} md={6} lg={3} key={x._id.toString()}>
                            <NewsCard params={x} />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default News;