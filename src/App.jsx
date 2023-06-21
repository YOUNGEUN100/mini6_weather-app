import { useEffect, useState } from 'react'
import './App.css'
import {random} from "kadvice";

function App() {
  // 명언 랜덤하게 가져오기
  const [advice, setAdvice] = useState(random());

  useEffect(()=>{
    let adviceInterval = setInterval(()=>{
      setAdvice(random());
    }, 5000);
    return () => clearInterval(adviceInterval);
  },[])

  // 오늘 날짜 가져오기
  const days = ["일","월","화","수","목","금","토"];
  const d = new Date();
  let day = days[d.getDay()];
  const month = d.getMonth() + 1;
  const date = d.getDate();

  // '더보기' 누르면 구글 검색으로 이동
  const moreInfo = () => {
    window.open(`https://www.google.com/search?q=${advice.author}&hl=ko&sxsrf=APwXEdeeqCVSISx2YNxTQxZxb8GhEGUlhA%3A1687249773557&source=hp&ei=bWORZLTWH8OR-AbGma3wCQ&iflsig=AOEireoAAAAAZJFxffyd6K9sjB5TApPxiyBrvce3q8PT&ved=0ahUKEwj0wJebt9H_AhXDCN4KHcZMC54Q4dUDCAs&uact=5&oq=%EC%98%A4&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjEIoFECcyBwgjEIoFECcyBwgjEIoFECcyBAgAEAMyEQguEIAEELEDEIMBEMcBENEDMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyEQguEIAEELEDEIMBEMcBENEDMgUILhCABDILCAAQgAQQsQMQgwE6BwgjEOoCECc6BQgAEIAEUOsBWI0MYM0NaANwAHgAgAGBAYgB8wGSAQMwLjKYAQCgAQGwAQo&sclient=gws-wiz`)
  }


  return (
    <div className='App'>
      <div className='now'>
        <div className='dayST'>{day}요일</div>
        <div className='today'>{month} / {date}</div>
      </div>
      <div className='content'>
        <div>{advice.message}</div>
        <div>-{advice.author}</div>
      </div>
      <button className='moreBtn' onClick={moreInfo}>더보기</button>
    </div>
  )
}

export default App
