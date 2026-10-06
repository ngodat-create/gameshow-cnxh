const questions = [
    {
        question: "Chủ nghĩa xã hội khoa học là một bộ phận cấu thành của hệ thống lý luận nào?",
        answers: [
            "Chủ nghĩa duy vật",
            "Chủ nghĩa Mác - Lênin",
            "Triết học cổ điển Đức",
            "Kinh tế học cổ điển"
        ],
        correct: 1
    },
    {
        question: "Một trong những nội dung nghiên cứu cơ bản của chủ nghĩa xã hội khoa học là gì?",
        answers: [
            "Các quy luật tự nhiên",
            "Các quy luật của sự vận động và phát triển xã hội theo định hướng xã hội chủ nghĩa",
            "Cấu tạo của vật chất",
            "Các hiện tượng thiên văn"
        ],
        correct: 1
    },
    {
        question: "Theo nội dung môn học, lực lượng nào được xem xét trong mối quan hệ với sứ mệnh lịch sử của giai cấp công nhân?",
        answers: [
            "Giai cấp công nhân",
            "Tầng lớp quý tộc",
            "Thương nhân",
            "Địa chủ"
        ],
        correct: 0
    },
    {
        question: "Một trong những nội dung được nghiên cứu trong chủ nghĩa xã hội khoa học là vấn đề nào sau đây?",
        answers: [
            "Dân chủ và nhà nước trong thời kỳ quá độ",
            "Cấu tạo nguyên tử",
            "Địa chất học",
            "Thiên văn học"
        ],
        correct: 0
    }
];

let currentQuestion = 0;


// HIỂN THỊ CÂU HỎI
function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        String(currentQuestion + 1).padStart(2, "0");

    document.getElementById("circle-number").textContent =
        String(currentQuestion + 1).padStart(2, "0");

    document.getElementById("question").textContent =
        question.question;

    document.getElementById("answer-a").textContent =
        question.answers[0];

    document.getElementById("answer-b").textContent =
        question.answers[1];

    document.getElementById("answer-c").textContent =
        question.answers[2];

    document.getElementById("answer-d").textContent =
        question.answers[3];


    // Lấy 4 nút đáp án
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(button => {

        // Xóa màu của câu trước
        button.classList.remove("correct", "wrong");

        // QUAN TRỌNG:
        // Mở khóa nút khi sang câu mới
        button.style.pointerEvents = "auto";

        button.style.opacity = "1";
    });


    // Xóa thông báo
    document.getElementById("result").textContent = "";

    // Ẩn nút câu tiếp theo
    document.getElementById("next-button").style.display = "none";
}


// CHỌN ĐÁP ÁN
function chooseAnswer(index) {

    const question = questions[currentQuestion];

    const buttons = document.querySelectorAll(".answer");

    const result = document.getElementById("result");


    // NẾU ĐÚNG
    if (index === question.correct) {

        buttons[index].classList.add("correct");

        result.textContent = "✓ CHÍNH XÁC!";


        // Khóa tất cả đáp án
        buttons.forEach(button => {
            button.style.pointerEvents = "none";
        });


        // Hiện nút câu tiếp theo
        document.getElementById("next-button").style.display = "block";
    }


    // NẾU SAI
    else {

        buttons[index].classList.add("wrong");

        result.textContent =
            "✕ CHƯA CHÍNH XÁC! HÃY CHỌN LẠI.";


        // Sau 800ms cho chọn lại
        setTimeout(() => {

            buttons[index].classList.remove("wrong");

            result.textContent = "";

        }, 800);
    }
}


// CÂU TIẾP THEO
function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        alert("Đã hoàn thành phần câu hỏi!");

        currentQuestion = 0;
    }

    showQuestion();
}


// Chạy câu hỏi đầu tiên
showQuestion();