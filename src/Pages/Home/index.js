import "./home.css";
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
function Home() {
    return (
        <>
            <div className="home__header">
                <p className = "home_title1">trực tuyến miễn phí</p>
                <p className = "home_title2">người làm câu đố</p>
                <p className = "home_title3">Tạo một bài kiểm tra với các loại câu hỏi khác nhau để thu hút học sinh trong lớp</p>
                <p className = "home_title3">học, đào tạo nhân viên tại nơi làm việc hoặc chơi đố vui với bạn bè.</p>
                <button className="home__btn">Tạo một bài kiểm tra</button>
                <p className = "home_title4">✔️ Được sử dụng bởi hơn 50 triệu người vòng quanh thế giới</p>
            </div>
           
            <div className="home__wrap">
                <div className="home__wrap-title1">Tạo bài kiểm tra của riêng bạn với chúng tôi</div>
                <div className="home__wrap-title2">phần mềm làm bài trắc nghiệm trực tuyến</div>
                <div className="home__wrap-title3">Nhanh chóng và dễ dàng tạo các câu đố trực tuyến tương tác miễn phí! Với Quizizz, bạn có thể tạo một bài kiểm tra giúp tăng cường sự tương tác và tham gia chỉ bằng vài cú nhấp chuột. Cho dù bạn đang muốn tạo một bài tập về nhà cho lớp Toán, hoặc một máy phá băng để chào đón những gương mặt mới, ở đây luôn có điều gì đó dành cho tất cả mọi người.</div>
                <div className="home__wrap-title4">
                    <div className = "home__wrap-box">
                        <div className = "home__wrap-boxhead">Quizizz for Schools</div>
                        <div className = "home__wrap-desc">Đặt câu hỏi giúp học sinh xác định nhiều lĩnh vực có liên quan, khuyến khích các em suy nghĩ sâu sắc về các thành phần của hình ảnh và mối quan hệ của chúng.</div>
                    </div>
                    <img src = "https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/6476e8ec816823abe7247ab2_Get%20more%20asset%202.webp"/>
                </div>
                <div className="home__wrap-title4">
                    <div className = "home__wrap-box">
                        <div className = "home__wrap-boxhead">Quizizz cho công việc </div>
                        <div className = "home__wrap-desc">Làm cho việc đào tạo và giáo dục nhân viên trở nên thú vị với Quizizz for Work. Công cụ tạo câu đố trực tuyến của chúng tôi cho phép bạn tạo điều kiện cho sự tham gia trực tiếp thông qua các bài thuyết trình, câu đố và thăm dò ý kiến. Sử dụng Quizizz tại nơi làm việc để tuyển dụng nhân viên, học trực tuyến, tương tác cộng đồng và nhiều hơn nữa!</div>
                    </div>
                    <img src = "https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/63ce1d71f329ee29a328cccd_img%20(3)-p-800.webp"/>
                </div>
                <div className="home__wrap-title5">
                Tạo các câu đố hấp dẫn hoàn chỉnh với hình ảnh, ảnh gif, clip âm thanh, video, đồ thị, hình minh họa và nhiều hơn thế nữa! Khai thác hơn 12 loại câu hỏi bao gồm Nhiều lựa chọn, Kéo và thả, Điền vào chỗ trống, và Điểm phát sóng. Với Quizizz, bạn cũng có thể nhân đôi niềm vui bằng sức mạnh, âm nhạc, chủ đề và meme. 
                </div>
                <button className="home__wrap-btn">Make a quiz</button>
            </div>

            <div className="home__selector">
                <div className="home__selector-head">
                    Rất nhiều loại câu hỏi để lựa chọn
                </div>
                <div className="home__selector-selec">
                    <button className="home__selector-btn">Điền vào chỗ trống</button>
                    <button className="home__selector-btn">Sắp xếp lại</button>
                    <button className="home__selector-btn">Nhiều lựa chọn</button>
                    <button className="home__selector-btn">Cuộc thi đấu</button>
                    <button className="home__selector-btn">Vẽ tranh</button>
                    <button className="home__selector-btn">Kéo thả</button>
                    <button className="home__selector-btn">Phản hồi video</button>
                    <button className="home__selector-btn">Thăm dò ý kiến</button>
                    <button className="home__selector-btn">trang trình bày</button>
                    <button className="home__selector-btn">kết thúc mở</button>
                    <button className="home__selector-btn">Phản hồi âm thanh</button>
                    <button className="home__selector-btn">Thả xuống</button>
                </div>
                <div className="home__selector-desc">
                Yêu cầu học sinh của bạn sắp xếp lại một tập hợp các tùy chọn lộn xộn theo thứ tự tăng dần, giảm dần hoặc theo trình tự thời gian.
                </div>
                <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/64366d31f69aaebda7ec1424_Reorder.webp" />
            </div>
            <div className="home__check">
                <div className = "home__check-head">Cách làm một bài kiểm tra</div>
                <div className = "home__check-box">
                    <div className = "home__check-desc"> ✔️ <span>Phóng:</span> Thăm nom quizizz, nhấp vào 'Tạo' và chọn tùy chọn 'Câu hỏi'</div>
                    <div className = "home__check-desc"> ✔️ <span>Tạo nên:</span> Trộn và kết hợp 15 loại câu hỏi khác nhau bao gồm Nhiều lựa chọn, Sắp xếp lại, Vẽ đồ thị và Điền vào chỗ trống để tạo bài kiểm tra của riêng bạn</div>
                    <div className = "home__check-desc"> ✔️ <span>Tìm kiếm:</span> Nhập các câu hỏi hiện có từ hơn 30 triệu câu đố và bài học do cộng đồng Quizizz tạo ra</div>
                    <div className = "home__check-desc"> ✔️ <span>Nhập khẩu:</span> Đưa vào các câu đố từ bảng tính hoặc Google Biểu mẫu của bạn để bạn không bao giờ phải bắt đầu lại từ đầu</div>
                    <div className = "home__check-desc"> ✔️ <span>Tùy chỉnh:</span> Thêm hình ảnh, video, gif, clip âm thanh, phương trình, v.v. vào câu hỏi và tùy chọn trả lời của bạn</div>
                    <div className = "home__check-desc"> ✔️ <span>Chủ nhà:</span>  Chọn giữa nhiều chế độ trò chơi bao gồm Chế độ trực tiếp, Bài tập về nhà, Nhóm, Kiểm tra và Giấy để tổ chức bài kiểm tra của bạn và nhận kết quả ngay lập tức</div>
                </div>
                <div className="home__check-foot">
                    <button className="home__check-btn">Tạo một bài kiểm tra</button>
                </div>
            </div>
            <div className = "home__foc">
                <div className = "home__foc-wrap">
                    <div className = "home__foc-box">
                        <div className = "home__foc-title">Quickly find or create</div>
                        <div className = "home__foc-title1">một câu đố từ thư viện</div>
                        <div className = "home__foc-desc">Chuẩn bị các câu đố tương tác, chất lượng cao chỉ trong hai phút.</div>
                        <div className = "home__foc-title2">✔️ Thư viện nội dung có thể tùy chỉnh</div>
                        <div className = "home__foc-desc1">Duyệt qua hơn 30 triệu hoạt động trải rộng trên tất cả các chủ đề và chủ đề</div>
                        <div className = "home__foc-title3">✔️ Tạo, sao chép hoặc chỉnh sửa</div>
                        <div className = "home__foc-desc2">Xây dựng từ đầu, sao chép toàn bộ hoạt động hoặc tạo bài kiểm tra của riêng bạn bằng cách kết hợp nội dung đáp ứng tốt nhất nhu cầu của học sinh.</div>
                    </div>
                    <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/63a3e944f8cc91ecb2166330_Fill%20in%20the%20blanks%20-%20import%20from%20library.webp" />
                </div>
                <div className = "home__foc-wrap2">
                    <div className = "home__foc-box">
                        <div className = "home__foc-title">Nhận kết quả chi tiết tại</div>
                        <div className = "home__foc-title1">trong tầm tay</div>
                        <div className = "home__foc-desc">Công cụ tạo bài kiểm tra trực tuyến của chúng tôi cung cấp thông tin chi tiết chính xác mà bạn cần để biến việc giảng dạy dựa trên dữ liệu thành hiện thực.</div>
                        <div className = "home__foc-title2">✔️ Thông tin chi tiết trong thời gian thực</div>
                        <div className = "home__foc-desc1">Xác định và điều chỉnh ngay lập tức theo nhu cầu của người tham gia</div>
                        <div className = "home__foc-title3">✔️ Báo cáo ảnh chụp nhanh</div>
                        <div className = "home__foc-desc2">Xem hiệu suất tổng thể, câu hỏi hoặc chủ đề khó nhất và tiến độ của từng cá nhân</div>
                    </div>
                    <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/63c6e0253776dab1035e073c_ezgif.com-gif-maker.png" />
                </div>
                <div className = "home__foc-wrap3">
                    <div className = "home__foc-box">
                        <div className = "home__foc-title">Quizizz easily integrates</div>
                        <div className = "home__foc-title1">with your existing tools</div>
                        <div className = "home__foc-desc">Tích hợp liền mạch công cụ tạo bài kiểm tra trực tuyến của chúng tôi với các công cụ như Google Classroom, Schoology và Canvas.</div>
                        <div className = "home__foc-title2">✔️ Chia sẻ dễ dàng</div>
                        <div className = "home__foc-desc1">Chia sẻ trực tiếp các liên kết bài kiểm tra với những người tham gia trong lớp học của bạn chỉ bằng một cú nhấp chuột</div>
                        <div className = "home__foc-title3">✔️ Đồng bộ hóa dễ dàng</div>
                        <div className = "home__foc-desc2">Update grades and reports in the blink of an eye by syncing Quizizz with your preferred LMS</div>
                    </div>
                    <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/6333fdf771367551bf73b8f9_Integrate%20Tools%20Image-p-1600.webp" />
                </div>
            </div>

            <div className = "home__explore">
                <div className = "home__explore-wrap">
                    <div className = "home__explore-head">Explore Resources by Grade</div>
                    <button className = "home__explore-btn">Kindergarten</button>
                    <button className = "home__explore-btn">1st Grade</button>
                    <button className = "home__explore-btn">2nd Grade</button>
                    <button className = "home__explore-btn">3rd Grade</button>
                    <button className = "home__explore-btn">4th Grade</button>
                    <button className = "home__explore-btn">5th Grade</button>
                    <button className = "home__explore-btn">6th Grade</button>
                    <button className = "home__explore-btn">7th Grade</button>
                    <button className = "home__explore-btn">8th Grade</button>
                    <button className = "home__explore-btn">9th Grade</button>
                    <button className = "home__explore-btn">10th Grade</button>
                    <button className = "home__explore-btn">11th Grade</button>
                    <button className = "home__explore-btn">12th Grade</button>
                </div>
                <div className = "home__explore-wrap">
                    <div className = "home__explore-head">Explore Resources by Subject</div>
                    <button className = "home__explore-btn">môn Toán</button>
                    <button className = "home__explore-btn">Khoa học</button>
                    <button className = "home__explore-btn">Khoa học Xã hội</button>
                    <button className = "home__explore-btn">Reading & Writing</button>
                </div>
            </div>
            <div className = "home__interested">
                <div className = "home__interested-head">You might also be interested in</div>
                    <ul>
                        <li>✔️ Đánh giá quá trình</li>
                        <li>✔️ Câu hỏi mở</li>
                        <li>✔️ Điền vào chỗ trống</li>
                        <li>✔️ Exit tickets</li>
                        <li>✔️ Câu hỏi trắc nghiệm</li>
                        <li>✔️ Bell ringers</li>
                        <li>✔️ Common Core Standards</li>
                        <li>✔️ Free online quiz games</li>
                        <li>✔️ Online Homework</li>
                        <li>✔️ Free live quizzes</li>
                        <li>✔️ Fun ice breakers</li>
                        <li>✔️ Interactive Poll questions</li>
                        <li>✔️ Reorder questions</li>
                        <li>✔️ Lesson plans</li>
                        <li>✔️ Hotspot questions</li>
                        <li>✔️ Paper mode</li>
                        <li>✔️ HSC 2023</li>
                        <li>✔️ GCSE 2023</li>
                    </ul>
            </div>
            <div className = "home__question">
                <div className = "home__question-head">câu hỏi thường gặp</div>
                <ul>
                    <li>Quizizz có miễn phí sử dụng không?<span class="icon">▼</span></li>
                    <li>Tôi có thể thêm loại câu hỏi nào vào bài kiểm tra của mình?<span class="icon">▼</span></li>
                    <li>Làm thế nào người tham gia có thể tham gia bài kiểm tra của tôi?<span class="icon">▼</span></li>
                    <li>Làm cách nào để chấm điểm bài kiểm tra trực tuyến trên Quizizz?<span class="icon">▼</span></li>
                    <li>Tôi có thể tìm thấy kết quả bài kiểm tra của mình ở đâu?<span class="icon">▼</span></li>
                </ul>
            </div>
            <div className = "home__create">
                <div className = "home__create-box">
                    <div className = "home__create-desc">Cách tốt nhất để đặt câu hỏi, khám phá ý tưởng và để người tham gia thể hiện những gì họ biết.</div>
                    <div className="home__create-desc1">Làm bài kiểm tra trực tuyến miễn phí</div>
                    <div className="home__create-desc2">trong vài phút.</div>
                    <button className ="home__create-btn">Tạo một bài kiểm tra</button>
                </div>
                <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa641a161d3a4124681cfa_Mask%2520group-p-1080.webp"/>
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

export default Home;