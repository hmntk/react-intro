import "./part2.css";
export function Part2({ passedElement }) {
  return (
    <div>
      <button className={passedElement[1]}>{passedElement[0]}</button>
    </div>
  );
}
