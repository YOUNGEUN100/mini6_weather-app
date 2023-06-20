import React from 'react'

function Today() {
  const d = new Date();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const days = ["일","월","화","수","목","금","토"];
  const day = days[d.getDay()];

  return (
    <div className='today'>
        <div>{month}월 {date}일 {day}요일</div>
    </div>
  )
}

export default Today