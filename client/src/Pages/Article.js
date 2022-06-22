import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';

import '../components/News/News.css'
function Article({ match, history }) {
    const [article, setArticle] = useState({
        title: "Обновен рафик с разписания", _id: 'aoief284234djas',
        image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', addedAt: '2022-05-30',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    })

    return (
        <Container>
                <Row className='justify-content-center'>
                    <Col lg={6} className='text-center' align="left">
                        <h1 className='page-header'>{article.title}</h1>
                        <div id="articleContent">{article.content}</div>
                    </Col>
                    <Col lg={6} align="right">
                        <img className="img-fluid" id="timetable-img" src={article.image} />
                    </Col>
                </Row>
            </Container>
    )
}

export default Article;