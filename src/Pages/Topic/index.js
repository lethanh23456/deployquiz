import { useEffect, useState } from "react";
import "./topic.css";
import { Link } from "react-router-dom";
import { getListTopic } from "../../services/topicService";

function Topic() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListTopic();
            setTopics(response);
        };
        fetchApi();
    }, []);

    return (
        <>
            <div className="topic__title">
                <div className="topic__icon">📝</div>
                <h1 className="topic__heading">Danh sách chủ đề</h1>
            </div>
            {topics.length > 0 && (
                <table className="topic__table">
                    <thead>
                        <tr>
                            <th className="topic__table-heading">ID</th>
                            <th className="topic__table-heading">Tên chủ đề</th>
                            <th className="topic__table-heading">Thực hành lại</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map((item) => (
                            <tr key={item.id} className="topic__table-row">
                                <td className="topic__table-cell">{item.id}</td>
                                <td className="topic__table-cell">{item.name}</td>
                                <td className="topic__table-cell">
                                    <Link className="topic__link" to={`/quiz/${item.id}`}>
                                        Làm bài
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Topic;
