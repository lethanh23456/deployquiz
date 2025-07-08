import { useEffect, useState } from "react";
import { getAnswersByUserId } from "../../services/answersService";
import { getListTopic } from "../../services/topicService";
import { Link } from "react-router-dom";
import "./answers.css";

function Answers() {
    const [dataAnswers, setDataAnswers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const answersByUserId = await getAnswersByUserId();
            const topics = await getListTopic();

            console.log(topics);
            console.log(answersByUserId);

            let result = [];
            for (let i = 0; i < answersByUserId.length; i++) {
                result.push({
                    ...topics.find(item => String(item.id) === String(answersByUserId[i].topicId)),
                    ...answersByUserId[i]
                });
            }
            console.log(result);
            setDataAnswers(result.reverse());
        };
        fetchApi();
    }, []);

    return (
        <>
            <div className="answers__title">
                <div className="answers__icon">📝</div>
                <h1 className="answers__heading">Danh sách các bài đã làm</h1>
            </div>
            {dataAnswers.length > 0 && (
                <table className="answers__table">
                    <thead>
                        <tr>
                            <th className="answers__table-heading">ID</th>
                            <th className="answers__table-heading">Tên chủ đề</th>
                            <th className="answers__table-heading">Xem chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAnswers.map(item => (
                            <tr key={item.id} className="answers__table-row">
                                <td className="answers__table-cell">{item.id}</td>
                                <td className="answers__table-cell">{item.name}</td>
                                <td className="answers__table-cell">
                                    <Link className="answers__link" to={`/result/${item.id}`}>
                                        Xem chi tiết
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

export default Answers;
