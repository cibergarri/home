'use client';

import { useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import { WellDone, QuestionNav } from '../game';
import { MoneyPiece, pieceSize } from '../drawings/Maths';
import { Instructions, Message } from '../LabelMap/style';
import {
  Card, Body, Story, Picture, Row, Next,
} from '../NumberGame/style';
import {
  Purse, PurseTitle, Placed, Tray, PieceButton, Check,
} from './style';

const DENOMINATIONS = [100, 50, 20, 10, 5, 2, 1];
const TRAY = [50, 20, 10, 5, 2, 1];

// The fewest notes and coins that make an amount: with euros, always the biggest that fits.
export const fewestPieces = (amount) => {
  let left = amount;
  return DENOMINATIONS.reduce((count, value) => {
    const used = Math.floor(left / value);
    left -= used * value;
    return count + used;
  }, 0);
};

const total = pieces => pieces.reduce((sum, value) => sum + value, 0);

// A note or coin, in the tray as big as in the pictures, a little smaller once put down.
function Pieces({ value, scale = 1 }) {
  const { width, height } = pieceSize(value);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width * scale} height={height * scale} aria-hidden="true">
      <MoneyPiece value={value} />
    </svg>
  );
}

// Amounts to make with notes and coins, one after another: tapping the money in the tray puts it
// down, tapping it again takes it back. On ✓ it has to come to the `target`, with the fewest
// notes and coins, or with exactly `pieces` of them (`piecesSaid` in words) when the question says
// how many. A question
// may tell a story and show a picture (`scene`), as in "Cambia por un billete" or "¿Cuánto te
// devuelven?". The tray is the exercise's `tray`, or the notes up to 50 € and the coins.
export default function MoneyGame({ exercise }) {
  const { instructions, questions, tray = TRAY } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [placed, setPlaced] = useState([]);
  const [solved, setSolved] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState(null);
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  const { target, pieces, piecesSaid } = question;
  const sum = total(placed);

  const put = (value) => {
    if (solved) return;
    setPlaced(list => [...list, value].sort((a, b) => b - a));
    setMessage(null);
  };

  const takeBack = (at) => {
    if (solved) return;
    setPlaced(list => list.filter((value, i) => i !== at));
    setMessage(null);
  };

  const wrong = (why) => {
    setMistakes(count => count + 1);
    setMessage(why);
  };

  const check = () => {
    if (placed.length === 0) setMessage(text.putMoneyFirst);
    else if (sum !== target) wrong(text.notTheAmount(sum, target));
    else if (pieces && placed.length !== pieces) wrong(text.notThatMany(piecesSaid));
    else if (!pieces && placed.length > fewestPieces(target)) wrong(text.fewerPieces);
    else {
      setSolved(true);
      setMessage(null);
      speak(text.euros(target), text.lang);
    }
  };

  const goTo = (to) => {
    setIndex(to);
    setPlaced([]);
    setSolved(false);
    setMessage(null);
  };

  const next = () => {
    if (index + 1 < questions.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = () => {
    goTo(0);
    setMistakes(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <>
        <Instructions>{instructions}</Instructions>
        <WellDone mistakes={mistakes} onAgain={playAgain} />
      </>
    );
  }

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Card>
        <Body>
          <Story>{question.story}</Story>
          {question.scene && (
            <Picture $ratio={`${question.scene.width} / ${question.scene.height}`}>
              <svg viewBox={`0 0 ${question.scene.width} ${question.scene.height}`} role="img" aria-label={text.picture}>
                <question.scene.Drawing {...question.scene.props} />
              </svg>
            </Picture>
          )}
          <Purse $done={solved} aria-label={text.yourMoney}>
            <PurseTitle>
              {text.yourMoney}
              {': '}
              <strong>{text.euros(sum)}</strong>
            </PurseTitle>
            <Placed>
              {placed.length === 0 && <span>{text.tapMoney}</span>}
              {placed.map((value, i) => (
                // The same note can be there twice: told apart by where it is.
                <PieceButton key={`${value}-${i}`} type="button" onClick={() => takeBack(i)} aria-label={text.takeBack(value)} disabled={solved}>
                  <Pieces value={value} scale={0.75} />
                </PieceButton>
              ))}
            </Placed>
          </Purse>
          {solved ? (
            <Row>
              <span />
              <Next type="button" onClick={next}>{index + 1 < questions.length ? text.next : text.finish}</Next>
            </Row>
          ) : (
            <>
              <Tray role="group" aria-label={text.moneyTray}>
                {tray.map(value => (
                  <PieceButton key={value} type="button" onClick={() => put(value)} aria-label={text.putDown(value)}>
                    <Pieces value={value} />
                  </PieceButton>
                ))}
              </Tray>
              <Row>
                <span />
                <Check type="button" onClick={check} aria-label={text.check}>✓</Check>
              </Row>
            </>
          )}
        </Body>
      </Card>
      <QuestionNav index={index} total={questions.length} onGo={goTo} />
      <div aria-live="polite">
        {message && <Message $kind="wrong">{message}</Message>}
      </div>
    </>
  );
}
