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
            id : String(maxId),
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
            <input type="text" placeholder="Nhập tên chủ đề" className="create-topic-inp" required/>
            <button type="submit" className="create-topic-btn">Tạo</button>
        </form>
        </div>


        <div className="create-question">
            <h2>Thêm câu hỏi mới vào hệ thống</h2>
            <form onSubmit={handleSubmitQuestion}>
                <div>
                <label className="create-topic-lable">Topic ID:</label>
                <input type="text" name="answer1" className="create-topic-inp" required />
                </div>

                <div>
                <label className="create-topic-lable" >Câu hỏi:</label>
                <textarea className="create-topic-textarea" id="question" name="question" rows="3" required />
                </div>

                <div>
                <label className="create-topic-lable">Đáp án 1:</label>
                <input type="text" name="answer1" className="create-topic-inp"  required />
                </div>

                <div>
                <label className="create-topic-lable">Đáp án 2:</label>
                <input type="text" name="answer2" className="create-topic-inp"  required />
                </div>

                <div>
                <label className="create-topic-lable">Đáp án 3:</label>
                <input type="text" name="answer3" className="create-topic-inp"  required />
                </div>

                <div>
                <label className="create-topic-lable">Chọn đáp án đúng:</label>
                <select className="create-topic-select" name="correctAnswer" required>
                    <option value="">-- Chọn --</option>
                    <option value="0">Đáp án 1</option>
                    <option value="1">Đáp án 2</option>
                    <option value="2">Đáp án 3</option>
                </select>
                </div>

                <button type="submit" className="create-topic-btn">Lưu câu hỏi</button>
            </form>
        </div>
    </div>
  );

}

export default CreateTopic;