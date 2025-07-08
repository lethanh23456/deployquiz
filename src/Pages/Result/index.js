import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAnswers } from "../../services/answersService";
import { getListQuestion } from "../../services/questionService";
import "./Result.css";

function Result() {
    const params = useParams();
    const [dataResult , setDataResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const dataAnswers = await getAnswers(params.id);
            const dataQuestions = await getListQuestion(dataAnswers.topicId);


            console.log(dataAnswers);
            console.log(dataQuestions);
    
            let resultFinal = [];
    
            
            for (let i = 0; i < dataQuestions.length; i++) {
                const question = dataQuestions[i];
                const userAnswer = dataAnswers.answers.find(
                    item => String(item.questionId) === String(question.id)
                );
            
                resultFinal.push({
                    id: question.id,
                    question: question.question,
                    answers: question.answers,                
                    correctAnswer: question.correctAnswer,
                    answer: userAnswer.answers        
                });
            }
            
    
            console.log(resultFinal);
            setDataResult(resultFinal); 
        };
    
        fetchApi();
    }, []);
    

    return (
        <>
            <div className="result__list">
                {dataResult.map((item,index) => (
                    <div className="result__item" key={item.id}>
                            <p> cau {index+1} : {item.question}

                            {item.correctAnswer === item.answer ? (
                                <span className="result__tag result__tag--true">dung</span>
                            ) : (
                                <span className="result__tag result__tag--false">sai</span>
                            )}

                            </p>
                            {item.answers.map((itemAns, indexAns) => {
                                let className = "";
                                let checked = false;

                                if (item.answer === indexAns) {
                                    checked = true;
                                    className = "result__item--selected";
                                }
                                if (item.correctAnswer === indexAns) {
                                    className += " result__item--result";
                                }
                                return (
                                    <div className={`result__answer ${className}`} key={indexAns}>
                                    <input type="radio" checked={checked} disabled />
                                    <label>{itemAns}</label>
                                    </div>
                                );
                            })}
                        </div>
                ))}
            </div>
        </>
    )
}

export default Result;