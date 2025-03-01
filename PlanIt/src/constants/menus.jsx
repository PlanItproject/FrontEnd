export const userMenuItems = [
    { label: "프로필 조회", onClick: () => console.log("프로필 조회 클릭됨") },
    { label: "채팅하기", onClick: () => console.log("채팅하기 클릭됨") },
    { label: "신고하기", onClick: () => console.log("신고하기 클릭됨") },
    { label: "차단하기", onClick: () => console.log("차단하기 클릭됨") },
];
  
export const moreMenuItems = (handlers) => [
    { label: "편집하기", onClick: handlers.onEdit },
    { label: "삭제하기", onClick: handlers.onDelete },
];