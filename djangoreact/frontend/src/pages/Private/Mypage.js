import React from 'react'
import { useParams } from 'react-router-dom'

const Mypage = () => {
  let { username } = useParams();
  return (
    <div>
      이 곳은 {username}의 페이지 입니다.
    </div>
  )
}

export default Mypage
