import { IPost } from "../../Types/post";
import style from "./style.module.css";
import {postsImg} from "../../../assets/index"
import { useContext } from "react";
import { Context } from "../../../App";

export const ItemOfPost = (props: IPost) => {
  const { isDark } = useContext(Context);
  return (
    <div className={isDark ? style.containerDark : style.container}>
      <img className={style.image} src={postsImg} alt={props.title} />
      <h2 className={isDark ? style.titleDark :  style.title}>{props.title}</h2>
      <p className={isDark ? style.textDark : style.text}>{props.text}</p>
      <h5 className={isDark ? style.dateDark  : style.date}>{props.date}</h5>
    </div>
  );
};