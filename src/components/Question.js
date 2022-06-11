import classes from "../styles/Question.module.css";
import Answers from "./Answers";

export default function Question() {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Quiz
      </div>
      <Answers />
    </div>
  );
}
