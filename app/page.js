'use client'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('Heejun & Sujin')
  const [date, setDate] = useState('2024년 6월 15일 토요일 오후 2시')
  const [location, setLocation] = useState('라온컨벤션 2층 베르사유홀')
  const [message, setMessage] = useState(`저희 두 사람이 사랑으로 하나 되어
새로운 출발을 함께 하고자 합니다.
기쁜 날 소중한 걸음으로 축복해주세요.`)
  const [account, setAccount] = useState(`신랑: 123-4567-8901
신부: 234-5678-9012`)
  const [guestbook, setGuestbook] = useState([])
  const [note, setNote] = useState('')

  const handleAddNote = () => {
    if (note.trim()) {
      setGuestbook([...guestbook, note])
      setNote('')
    }
  }

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#f5f0c8] text-sm">
      {/* 왼쪽 입력 영역 */}
      <div className="w-full md:w-1/2 p-6 bg-white shadow-inner space-y-4">
        <h2 className="text-xl font-semibold mb-2">청첩장 정보 입력</h2>

        <div>
          <label className="font-medium block mb-1">이름</label>
          <input value={name} onChange={e => setName(e.target.value)} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="font-medium block mb-1">날짜/시간</label>
          <input value={date} onChange={e => setDate(e.target.value)} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="font-medium block mb-1">장소</label>
          <input value={location} onChange={e => setLocation(e.target.value)} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="font-medium block mb-1">초대 메시지</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} className="w-full p-2 border rounded h-24" />
        </div>

        <div>
          <label className="font-medium block mb-1">계좌 정보</label>
          <textarea value={account} onChange={e => setAccount(e.target.value)} className="w-full p-2 border rounded h-16" />
        </div>
      </div>

      {/* 오른쪽 아이폰 형태 미리보기 */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <div className="bg-black p-2 rounded-[2.5rem] shadow-2xl">
          <div className="w-[320px] h-[640px] bg-white rounded-[2rem] overflow-y-auto p-4 text-center">
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <p className="mb-1">{date}</p>
            <p className="mb-4">{location}</p>

            <img src="/images/sample.jpg" alt="커플 사진" className="rounded-lg w-full max-w-xs mx-auto mb-4 shadow" />

            <p className="whitespace-pre-line italic text-gray-700 mb-6">{message}</p>

            <h2 className="text-lg font-semibold mb-2">마음 전하실 곳</h2>
            <pre className="bg-white p-4 rounded shadow mb-6 whitespace-pre-wrap text-left">{account}</pre>

            <h2 className="text-lg font-semibold mb-2">방명록</h2>
            <ul className="mt-2 space-y-2 text-left">
              {guestbook.map((n, i) => (
                <li key={i} className="bg-white p-2 rounded shadow">{n}</li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold mt-4 mb-1">공유하기</h2>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                alert('링크가 복사되었습니다!')
              }}
              className="bg-green-600 text-white px-4 py-1 rounded"
            >
              링크 복사하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
