import './ScoreView.css';

type ScoreViewProps = {
  score: number;
};

export const ScoreView = ({ score }: ScoreViewProps) => {
  const scoresColors = new Map([
    [score > 75, 'green'],
    [score > 50 && score <= 75, 'yellow'],
    [score > 25 && score <= 50, 'orange'],
    [score <= 25, 'red'],
  ]);
  const color = scoresColors.get(true);
  return <div className={`score ${color}`}>{score}</div>;
};
