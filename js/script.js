// 1. 사용할 HTML 요소 4개를 찾아 변수에 저장하기
//    (열기 버튼, 닫기 버튼, 모달 전체, 반투명 배경)

// 2. 열기 버튼을 클릭하면 → 모달에 show 클래스 추가

// 3. 닫기 버튼을 클릭하면 → show 클래스 제거

// 4. 반투명 배경을 클릭해도 → show 클래스 제거

// 1. 사용할 HTML 요소 4개를 찾아 변수에 저장하기
//    (열기 버튼, 닫기 버튼, 모달 전체, 반투명 배경)
const openBtn = document.querySelector(".btn-open"); // 참가 신청 안내 보기 버튼
const closeBtn = document.querySelector(".btn-close"); // 닫기 버튼
const modal = document.querySelector(".modal"); // 모달 전체
const modalBg = document.querySelector(".modal-bg"); // 반투명 배경

// 2. 열기 버튼을 클릭하면 → 모달에 show 클래스 추가
openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

// 3. 닫기 버튼을 클릭하면 → show 클래스 제거
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// 4. 반투명 배경을 클릭해도 → show 클래스 제거
modalBg.addEventListener("click", () => {
  modal.classList.remove("show");
});
