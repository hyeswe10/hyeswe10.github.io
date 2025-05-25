//객체 가져오기
const $startword = document.querySelector("#start");
const $gameStart = document.querySelector("#game-start");
const $main = document.querySelector("main");
const $section = document.querySelector("section");
const $ul = document.querySelector("ul");
const $textInput = document.querySelector("#newTxt");
const $enter = document.querySelector(".arrow");

//li 생성
const createUl = (keyword)=>{
    const $li = document.createElement("li");
    $li.textContent = keyword;
    $ul.appendChild($li);
;}

//버튼눌러서 게임시작하기
const startBtnClick = ()=>{
    const text = $startword.value.trim();
    if(text !== ''){
        $main.style.display = "none";
        $section.style.display = "block";
        createUl(text);
    } else {
        alert("시작 단어가 입력되지 않았습니다.");
    }
}
$gameStart.addEventListener("click",startBtnClick);
$startword.addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
        startBtnClick();
    }
})
//맞는 단어인지 체크하기
const continueGame = ()=>{
    const keyword = $textInput.value.trim();
    if(keyword === ''){
        alert("단어를 제대로 입력하세요");
        return;
    }
    //이전 입력 단어
    const prev = $ul.lastElementChild.textContent;
    const prevWord = prev[prev.length-1];
    const firstWord = keyword[0];
    //올바른 단어인지 구분
    if(firstWord === prevWord){
        createUl(keyword);
    } else {
        alert(`${prevWord}로 시작해야합니다`);
    }
    $textInput.value = '';
}
$enter.addEventListener("click",continueGame);
$textInput.addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
        continueGame();
    }
})
