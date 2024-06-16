const boardsStr = localStorage.getItem("boards09");
const boardsObj = JSON.parse(boardsStr);


const recentBoards = boardsObj.slice(-10);
const idx = location.search;
const index = parseInt(idx.split("=")[1], 10);

const adjustedIndex = recentBoards.length - 1 - index;
const board = recentBoards[adjustedIndex];
const beforeUrl = document.referrer;


const viewFrm = document.querySelectorAll("#viewFrm > div");
for (let i = 0; i < viewFrm.length; i++) {
    const id = viewFrm[i].id;


    if (id === 'subject') {
        viewFrm[i].innerHTML = `제목: ${board[id]}`;
    } else if (id === 'content') {
        viewFrm[i].innerHTML = `내용: ${board[id]}`;
    } else if (id === 'date') {
        viewFrm[i].innerHTML = `날짜: ${board[id]}`;
    } else if (id === 'writer') {
        viewFrm[i].innerHTML = `작성자: ${board[id]}`;
    } else {
        viewFrm[i].innerHTML = board[id];
    }
}


const deleteBtn = document.querySelector("#delete");
const deleteBtnHandler = () => {
    const boardsObj = JSON.parse(localStorage.getItem("boards09")) || [];
    const post = boardsObj.find(board => board.index === index);

    if (post) {
        const password = prompt("비밀번호를 입력하세요:");

        if (password === post.password) {
            const confirmed = confirm("정말 삭제하시겠습니까?");
            if (confirmed) {

                const updatedBoards = boardsObj.filter(board => board.index !== index);

                localStorage.setItem("boards09", JSON.stringify(updatedBoards));
                alert("게시물이 삭제되었습니다.");
                location.href = "./list.html";
            }
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    } else {
        alert("게시물을 찾을 수 없습니다.");
    }
};
deleteBtn.addEventListener("click", deleteBtnHandler);

