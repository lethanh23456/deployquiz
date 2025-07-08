import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../services/topicService";
import { getListQuestion } from "../../services/questionService";
import { getCookie } from "../../helpers/cookie";
import { createAnswer } from "../../services/quizService";
import "./quiz.css";
import { MdOutlineSearch } from "react-icons/md";
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import "../Home/home.css";
function Quiz() {
    const params = useParams();
    const [dataTopic, setDataTopic] = useState();
    const [dataQuestions , setDataQuestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTopic(params.id);
            setDataTopic(response);
        }
        fetchApi();
    },[]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListQuestion(params.id);
            setDataQuestions(response);
        }
        fetchApi();
    },[]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        let selectedAnswers = [];
        for ( let i = 0 ; i < e.target.elements.length ; i++){
            if(e.target.elements[i].checked){
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;

                selectedAnswers.push({
                    questionId:parseInt(name),
                    answers : parseInt(value) 
                });

            }
        }
        
        if (selectedAnswers.length !== dataQuestions.length) {
            alert("Vui lòng trả lời tất cả các câu hỏi trước khi nộp bài!");
            return;
        }
        // k đẩy id nên tự nhảy 
        let options = {
            userId : parseInt(getCookie("id")) ,
            topicId : parseInt(params.id) ,
            answers : selectedAnswers
        }

        const response = await createAnswer(options);
        if (response) {
            navigate (`/result/${response.id}`);
        }
    }

    return (
        <>

            <div className="quiz__search">
                <input type="text" placeholder="Search in Quizizz library"/>
                <MdOutlineSearch className="quiz__search-icon"/>
            </div>
            <div className="quiz__box">


                <div className="quiz__header">
                    <div className="quiz__header-wrap">
                        <div className="quiz__header-box1">
                            <img src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/fb2ef2bc-0018-4205-aa58-9847b602d80d?w=200&h=200"/>
                            <div className="quiz__header-title">
                                <div className="quiz__header-head">{dataTopic && (<>{dataTopic.name}</>)}</div>
                                <div className="quiz__header-desc">
                                    <ul>
                                        <li>Quiz</li>
                                        <li>thanhle</li>
                                        <li>Computers</li>
                                        <li>85 plays</li>
                                        <li>hard</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="quiz__header-box2">
                                <ul>
                                    <li>edit</li>
                                    <li>worksheet</li>
                                    <li>share</li>
                                    <li>save</li>
                                </ul>
                                <div className="quiz__header-list2">
                                    <div className="quiz__header-preview">Preview</div>
                                    <div className="quiz__header-start">Start for FREE</div>
                                </div>

                            </div>
                    </div>
                </div>

                <div className="quiz__body">
                    <div className="quiz__body-box1">
                        <div className="quiz__question">20 question</div>
                        <div className="quiz__show">show all answers</div>
                    </div>
                    <div className="quiz__body-box2">
                        <div className="quiz__body-wrap1">
                        <form onSubmit={handleSubmit}>
                            {dataQuestions.map((item,index) => (
                                <div className="form-quiz-question" key={index.id}>
                                    <div className="form-quiz__item" >
                                        <div className="quiz__choice">{index+1}. MULTIPLE CHOICE QUESTION</div>
                                        <div className="quiz__time">30 sec • 1 pt</div>
                                    </div>
                                    <div className="form-quiz__cauhoi">
                                        {item.question}
                                    </div>
                                            {item.answers.map((itemAns , indexAns) => (
                                            <div className="form-quiz__answer" key = {indexAns}>
                                                <input type = "radio" name = {item.id} value = {indexAns} id={`quiz-${item.id}-${indexAns}`}/>
                                                <label htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label>
                                            </div>
                                        ))}
                                </div>
                            ))}

                            <button type="submit" className="btn-submit">
                                            nop bai
                                        </button>
                        </form>
                        </div>
                                    
                       
                    </div>
                </div>
            </div>
            <div className = "home__quizz">
                <div className = "home__quizz-wrap">
                    <div className = "home__quizz-box1">
                        <img src = "https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/6792157ffa3e2e9204d4a3b6_%5Bcm%5D%20Brand.svg" />
                        <div className="home__quizz-desc">✔️ Khả năng tiếp cận & Hòa nhập</div>
                    </div>
                    <div className = "home__quizz-box2">
                        <ul>
                            <li>Blog Quizizz</li>
                            <li>Tài nguyên dành cho giáo viên</li>
                            <li>Nhà giáo dục được chứng nhận</li>
                            <li>Chuẩn bị kiểm tra trạng thái</li>
                            <li>Quizizz cho công việc</li>
                            <li>Trung tâm trợ giúp</li>
                            <li>Bảng giáo viên</li>
                            <li>IQAPS</li>
                            <li>AI Toolkit</li>
                            <li>Khả năng tiếp cận và hòa nhập</li>
                            <li>Sơ đồ trang web</li>
                            <li>Điều khoản dịch vụ</li>
                        </ul>
                    </div>
                    <div className = "home__quizz-box3">
                        <ul>
                            <li>bảng tính</li>
                            <li>Chương trình người bán lại</li>
                            <li>Chính sách bảo mật</li>
                            <li>Trung tâm bảo mật</li>
                            <li>Nghề nghiệp</li>
                            <li>Liên hệ hỗ trợ</li>
                            <li>Về chúng tôi</li>
                        </ul>
                    </div>
                    <div className = "home__quizz-box4">
                        <div className="home__quizz-img">
                            <img src ="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/60aca2b71ab9a563ffecf204_google%20play.webp" />
                            <img src ="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/60aca2b71ab9a50fe9ecf205_apple%20app%20store.webp" />
                        </div>
                    </div>
                </div>
            </div>
            <div className = "home__footer">
                <div className = "home__footer-quiz">2024 Quizizz Inc.</div>
                <ul>
                    <li><FaFacebook /></li>
                    <li><FaTwitter /></li>
                    <li><FaInstagram /></li>
                </ul>
            </div>
        </>
    )
}

export default Quiz;

