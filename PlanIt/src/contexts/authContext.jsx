import { useEffect, useState } from "react"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null) // 로그인 한 유저 정보
    const [loading, setLoading] = useState(false) // 초기 로딩 상태

    // useEffect((() => {
    //     // 앱 최초 로딩 시 사용자 정보 가져오기
    //     const initAuth = async () => {
    //         try {
                
    //         } catch(error) {

    //         } finally {

    //         }
    //     }
    // }),[])

}