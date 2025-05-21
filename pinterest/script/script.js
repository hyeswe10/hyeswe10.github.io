//요소 선택
const $li = document.querySelectorAll("li");
const $section = document.querySelector("section");

//메뉴 클릭
$li.forEach((value)=>{
    value.addEventListener("click",()=>{
        //다른 li에 on이라는 클래스가 추가되어 있으면 삭제
        const $on = document.querySelector("main > ul  > li.on ");
        $on.classList.remove("on");
        value.classList.add("on");
        const filter = value.textContent.trim().toLowerCase();
        const $article = document.querySelectorAll("section > article");
        $article.forEach((type)=>{
            //삼항연산자 사용
            // const text = type.classList.contains("summer") ? "summer" :
            // type.classList.contains("winter") ? "winter" : "";
            //삼항연산자의 if문 풀이
            let text = '';
            if(type.classList.contains("winter")){
                text = "winter";
            } else if(type.classList.contains("summer")){
                text = "summer";
            } else {
                text = '';
            }
            //if문 사용
        //     const text = type.className;
            if(filter ==='all' || filter === text){
            type.style.display = "block";
        } else {
            type.style.display = "none";
        }
        })
    })
})

// imgList에서 정보를 읽어와서 요소를 생성
// section에 추가
imgList.forEach((data)=>{
    //data값을 이용하여 요소를 생성
    const $article = document.createElement("article");
    $article.classList.add(data.type);
    const $div = document.createElement("div");
    const $img = document.createElement("img");
    $img.src = data.img;
    $img.alt = data.title;
    const $h2 = document.createElement("h2");
    $h2.textContent = data.title;
    const $p = document.createElement("p");
    $p.textContent = data.desc;
    $div.appendChild($img);
    $div.appendChild($h2);
    $div.appendChild($p);
    $article.appendChild($div);
    $section.appendChild($article);
})

