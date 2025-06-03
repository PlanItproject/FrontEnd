export const userMenuItems = [
    { id: 'user-menu-profile', label: "프로필 조회", onClick: () => console.log("프로필 조회 클릭됨") },
    { id: 'user-menu-chat', label: "채팅하기", onClick: () => console.log("채팅하기 클릭됨") },
    { id: 'user-menu-report',label: "신고하기", onClick: () => console.log("신고하기 클릭됨") },
    { id: 'user-menu-block',label: "차단하기", onClick: () => console.log("차단하기 클릭됨") },
];
  
export const moreMenuItems = (handlers) => [
    { id: 'more-menu-edit', label: "편집하기", onClick: handlers.onEdit },
    { id: 'more-menu-delete',label: "삭제하기", onClick: handlers.onDelete },
];