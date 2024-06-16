const writefrm = document.querySelector("#writeFrm");

class Board {
    constructor(indexNum, subjectStr, writerStr, contentStr, ratingNum) {
        this.index = indexNum;
        this.Subject = subjectStr;
        this.Writer = writerStr;
        this.Content = contentStr;
        this.date = recordDate();
        this.rating = ratingNum / 2;
    }

    set Subject(value) {
        if (value.length === 0) throw new Error("제목을 입력하세요.");
        this.subject = value;
    }

    set Writer(value) {
        if (value.length === 0) throw new Error("작성자를 입력하세요.");
        this.writer = value;
    }

    set Content(value) {
        if (value.length === 0) throw new Error("내용을 입력하세요.");
        this.content = value;
    }
}

const recordDate = () => {
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    mm = (mm > 9 ? "" : "0") + mm;
    dd = (dd > 9 ? "" : "0") + dd;

    const arr = [yyyy, mm, dd];

    return arr.join("-");
}

const submitHandler = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const writer = e.target.writer.value;
    const content = e.target.content.value;
    const rating = e.target.rating.value;

    // 비밀번호 입력 받기
    const password = prompt("게시물을 작성하려면 비밀번호를 입력하세요:");

    try {
        const boardsObj = JSON.parse(localStorage.getItem("boards04")) || [];
        const index = boardsObj.length;
        const instance = new Board(index, subject, writer, content, rating);

        // 비밀번호 확인 후 저장
        const confirmed = confirm("저장하시겠습니까?");
        if (confirmed) {
            // 비밀번호를 게시물 객체에 저장
            instance.password = password;

            // 최신순으로 저장하기 위해 배열의 맨 앞에 추가
            boardsObj.unshift(instance);

            const boardsStr = JSON.stringify(boardsObj);
            localStorage.setItem("boards04", boardsStr);
            location.href = "./view.html?index=" + index;
        } else {
            alert("저장이 취소되었습니다.");
        }
    } catch (e) {
        alert(e.message);
        console.error(e);
    }
};

writefrm.addEventListener("submit", submitHandler);

const rating_input = document.querySelector('.rating input');
const rating_star = document.querySelector('.rating_star');

rating_input.addEventListener('input', () => {
    const ratingValue = rating_input.value;
    rating_star.style.width = `${ratingValue * 10}%`;

    localStorage.setItem('ratingValue04', ratingValue);

    window.ratingValue = ratingValue;
});
