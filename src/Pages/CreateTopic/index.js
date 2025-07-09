import { getListTopic} from "../../services/topicService";
import { createTopic} from "../../services/createTopicService";
import {createQuestionByTopicId} from "../../services/createTopicService";
import { useEffect, useState } from "react";
import {getListAllQuestion} from "../../services/questionService";
import "./CreateTopic.css";

function CreateTopic() {
    const [dataListTopic, setDataListTopic] = useState();
    const [dataListAllQuestion, setDataListAllQuestion] = useState();
    useEffect (() => {
        const fetchApi = async () => {
            const response = await getListTopic();
            setDataListTopic(response);
        }
        fetchApi();
    },[]);

    useEffect (() => {
        const fetchApi = async () => {
            const response = await getListAllQuestion();
            setDataListAllQuestion(response);
        }
        fetchApi();
    },[]);

    // console.log(dataListTopic);
    // const maxId = Math.max(...dataListTopic.map(u => parseInt(u.id) || 0)) + 1; 
    const handleSubmit = (e) => {
        let maxId = Math.max(...dataListTopic.map(u => parseInt(u.id) || 0)) + 1;
        e.preventDefault();
        // console.log(e.target[0].value);
        let options = {
            id : maxId,
            name : e.target[0].value,
        }
       createTopic(options);
    };

    const handleSubmitQuestion = (e) => {

        let maxId = Math.max(...dataListAllQuestion.map(u => parseInt(u.id) || 0)) + 1;
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[5].value);
        let res = [];
        res.push(e.target[2].value);
        res.push(e.target[3].value);
        res.push(e.target[4].value);
        console.log(res);

        let options = {
            id : String(maxId),
            topicId : parseInt(e.target[0].value),
            question : e.target[1].value,
            answers : res ,
            correctAnswer : parseInt(e.target[5].value) ,
        }
        createQuestionByTopicId(options);
    };




  return (

    <div>
        <div className="create-topic">
        <h2>Tạo chủ đề mới</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nhập tên chủ đề"  required />
            <button type="submit">Tạo</button>
        </form>
        </div>


        <div className="create-question">
            <h2>Thêm câu hỏi mới vào hệ thống</h2>
            <form onSubmit={handleSubmitQuestion}>
                <div>
                <label>Topic ID:</label>
                <input type="text" name="answer1" required />
                </div>

                <div>
                <label htmlFor="question">Câu hỏi:</label>
                <textarea id="question" name="question" rows="3" required />
                </div>

                <div>
                <label>Đáp án 1:</label>
                <input type="text" name="answer1" required />
                </div>

                <div>
                <label>Đáp án 2:</label>
                <input type="text" name="answer2" required />
                </div>

                <div>
                <label>Đáp án 3:</label>
                <input type="text" name="answer3" required />
                </div>

                <div>
                <label>Chọn đáp án đúng:</label>
                <select name="correctAnswer" required>
                    <option value="">-- Chọn --</option>
                    <option value="0">Đáp án 1</option>
                    <option value="1">Đáp án 2</option>
                    <option value="2">Đáp án 3</option>
                </select>
                </div>

                <button type="submit">Lưu câu hỏi</button>
            </form>
        </div>
    </div>
  );

}

export default CreateTopic;