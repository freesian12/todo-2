import board from "./../img/clipboard.svg";
import Button from "./../component/main/Button";
import { List, Before, After } from "../styled_component/detail.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { update } from "./../redux/modules/counter.js";

const Detail = () => {
  const [title, setTitle] = useState("");
  const [isBlock, setIsBlock] = useState(0);

  const details = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const navi = useNavigate();

  const back = () => {
    dispatch({ type: "" }, navi("/"));
  };

  const updating = () => {
    dispatch(update(details.target, title), navi("/"));
  };

  const clickChange = (light) => {
    // 0 이면 before 컴포넌트 활성화 1이면 after 컴포넌트 활성화
    setIsBlock(light);
  };

  return (
    <List>
      <img src={board} style={{ width: "100%" }} />
      <Before display={isBlock === 0 ? "block" : "none"}>
        <Button onClick={() => back()} type="back"></Button>
        <Button onClick={() => clickChange(1)} type="update"></Button>
        <span className="plan-title" display="none;">
          {details.target.title}
        </span>
      </Before>
      <After display={isBlock === 0 ? "none" : "block"}>
        <input
          className="update-plan-title"
          placeholder={details.target.title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button onClick={() => updating()} type="complete"></Button>
        <Button onClick={() => clickChange(0)} type="back"></Button>
      </After>
    </List>
  );
};
export default Detail;
