import React, { useState, useEffect } from "react";
import * as S from "./ContentsSt";
import Items from "../../Profile/Index";
import Modal from "../Modal/Modal";
import { connect } from "react-redux";

interface Round {
  round: number;
}

type Image = {
  src: string;
  default: string;
};

interface D {
  name: string;
  src: Image;
}

const Contents = ({ round }: Round) => {
  const [modalOpen, setModalOpen] = useState(true);
  const closeModal = () => {
    setModalOpen(false);
  };

  const [showRound, setShowRound] = useState<string>("");

  const [nowRound, setNowRound] = useState<number>(0);
  const [reverseCount, setReverseCount] = useState<number | null>(null);
  const [halfRound, setHalfRound] = useState<string>("");
  const [idols, setIdols] = useState<number[]>([]);
  const [displays, setDisplays] = useState<number[]>([]);
  const [winners, setWinners] = useState<number[]>([]); //선택한 값 저장

  useEffect(() => {
    let Garray = JSON.parse(JSON.stringify(Items));
    console.log(Garray, Garray.length);
    Garray.length = round;
    setNowRound(round);
    setShowRound(round + "강");
    setHalfRound("/" + round / 2);
    setReverseCount(1);

    console.log(Garray, Garray.length);
    console.log("round: ", round);
    console.log("라운드 수 : ", Garray.length);

    Garray.sort(() => Math.random() - Math.random());

    console.log("라운드 수 : ", Garray.length);
    setIdols(Garray);
    setDisplays([Garray[0], Garray[1]]);
  }, [round]);
  // choice함수가 월드컵 토너먼트임
  const choice = (idol: any) => () => {
    if (showRound !== "결승전") {
      setReverseCount((num) => num + 1);
      setNowRound((num) => num - 1);
    } else {
      setReverseCount(null);
    }

    if (nowRound === 9) {
      setShowRound("8강");
      setHalfRound("/4");
      setReverseCount(1);
    } else if (nowRound == 5) {
      setShowRound("4강");
      setHalfRound("/2");
      setReverseCount(1);
    } else if (nowRound == 3) {
      setShowRound("결승전");
      setHalfRound("");
      setReverseCount(null);
    }

    if (idols.length <= 2) {
      // 남은 아이돌 수가 2보다 작거나 같을때
      if (winners.length === 0) {
        // 선택받은 사람의 길이 === 0 (1)
        setDisplays([idol]); // 아이돌 보여주기
      } else {
        // 16강 -> 8강 4강 -> 2강 등등 토너먼트의 단계가 올라갈때
        let updatedidol = [...winners, idol]; // 선택받은 애들이랑 나머지 아이돌
        setIdols(updatedidol); //
        setDisplays([updatedidol[0], updatedidol[1]]);
        setWinners([]);
      }
    } else if (idols.length > 2) {
      // 남은아이돌 길이가 2 이상일때
      setWinners([...winners, idol]); // 선택받았던자들과 아이돌을 선택받은자들로 설정
      setDisplays([idols[2], idols[3]]); // 3번째 4번째 보여주기
      setIdols(idols.slice(2)); // 아이돌설정을 아이돌배열 3번째 부터 끝까지 (3,4)
    }
  };
  return (
    <>
      <Modal open={modalOpen} close={closeModal} header="이상형월드컵" />
      <S.Contents>
        <S.Title>
          당신의 이상형을 찾아라 {showRound} {reverseCount}
          {halfRound}
        </S.Title>
        <S.Vscontent>
          {" "}
          {/* style*/}
          <S.FlexBox>
            {" "}
            {/* style*/}
            {displays.map((d: any) => {
              return (
                <S.Fight1 key={d.name} onClick={choice(d)}>
                  <S.Img src={d.src.default} />
                  <S.Name>{d.name}</S.Name>
                </S.Fight1>
              );
            })}
          </S.FlexBox>
        </S.Vscontent>
      </S.Contents>
    </>
  );
};
const mapStateToProps = ({ rounds }: any) => {
  return {
    round: rounds.round,
  };
};

export default connect(mapStateToProps)(Contents);

//React.MouseEventHandler<HTMLDivElement>
