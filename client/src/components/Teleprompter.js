import React from 'react'
import styled from 'styled-components'
import stringSimilarity from 'string-similarity'

const StyledTeleprompter = styled.div`
  font-size: 9rem;
  width: 100%;
  height: 56rem;
  scroll-behavior: smooth;
  overflow: auto;
  display: block;
  margin-bottom: 1rem;
`
// User가 지금 말하고 있는 단어 style
const Interim = styled.div`
  background: rgb(0, 0, 0, 0.25);
  color: white;
  flex: 0 0 auto;
  padding: 0.5rem;
  border-radius: 1rem;
  display: inline-block;
`

// Script 문자열 처리 ["I", "am", "happy"] -> "iamhappy"
const onlyWord = (word) => 
  word
    .trim()                                 // 문자열 좌우에서 공백 제거
    .toLocaleLowerCase()                    // 알파벳 소문자로 변환
    .replace(/[^가-힣ㄱ-ㅎㅏ-ㅣa-z]/gi, '') // 정규식을 이용해 한글 또는 알파벳이 아닌 문자 빈칸으로 변환

export default function Teleprompter({ words, progress, listening, onChange }) {
  const recog = React.useRef(null)
  const scrollRef = React.useRef(null)
  const [ results, setResults ] = React.useState('')

  React.useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    recog.current = new SpeechRecognition()
    recog.current.continuous = true
    recog.current.interimResults = true
  }, [])

  React.useEffect(() => {
    if (listening) {
      recog.current.start()
    }
    else {
      recog.current.stop()
    }
  }, [listening])

  React.useEffect(() => {
    const handleResult = ({ results }) => {
      const interim = Array.from(results)
        .filter(r => !r.isFinal)
        .map(r => r[0].transcript)
        .join(' ')
      setResults(interim)

      const newIndex = interim
        .split(' ')
        .reduce((memo, word) => {
          if ( memo >= words.length) {
            return memo
          }
          const similarity = stringSimilarity.compareTwoStrings(
            onlyWord(word),
            onlyWord(words[memo])
          )
          memo +=
            similarity > 0.3  // 유사도 민감도 설정
              ? 1
              : 0
          return memo
        }, progress)
      if ( newIndex > progress && newIndex <= words.length ) {
        onChange(newIndex)
      }
    }
    recog.current.addEventListener(
      'result',
      handleResult
    )
    return () => {
      recog.current.removeEventListener(
        'result',
        handleResult
      )
    }
  }, [onChange, progress, words])

  React.useEffect(() => {
    /* eslint-disable no-unused-expressions */
    scrollRef.current
      .querySelector(
        `[data-index='${
          progress + 8  // 현재 진행 상태에 따라 Scroll 설정
        }']`
      )
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      })
  }, [progress])

  return (
    <>
      <StyledTeleprompter ref={scrollRef}>
        {words.map((word, i) => (
          <span
            key={`${word}:${i}`}
            data-index={i}
            style={{
              color:
                i < progress
                  ? '#000'  // 아직 읽지 않은 word는 흰색
                  : '#ccc'  // 읽은 word는 검은색으로 변경
            }}
          >
            {word}{' '}
          </span>
        ))}
      </StyledTeleprompter>
      {results && ( <Interim>{results}</Interim> )}
    </>
  )
}