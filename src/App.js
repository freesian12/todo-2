import React, { useState } from "react";
import Button from "./component/Button.js";
import "./App.css";
import toDoIcon from "./img/todo.svg";
import board from "./img/clipboard.svg";
// import check from "./img/check2-all.svg";
import angry from "./img/volume-up.svg";
import wink from "./img/volume-mute.svg";
import box from "./img/inbox.svg";

function Plan(props) {
  return (
    <div className="list">
      <img src={board} style={{ width: "100%", overflow: "auto" }} />
      <span className="plan-content">{props.plan.title}</span>
      <span className="plan-content">{props.plan.content}</span>
      <Button
        onClick={() => props.deleted(props.plan.id, "todo")}
        type={"scratch"}
      ></Button>
      <Button
        onClick={() => props.swaping(props.plan.id, "down")}
        type={"complete"}
      ></Button>
    </div>
  );
}

function Complete(props) {
  return (
    <div className="list">
      <span className="comple-content">{props.complete.title}</span>
      <span className="comple-content">{props.complete.content}</span>
      <img src={box} style={{ width: "100%" }} />
      <Button
        onClick={() => props.deleted(props.complete.id, "complete")}
        type={"scratch"}
      ></Button>
      <Button
        onClick={() => props.swaping(props.complete.id, "up")}
        type={"reback"}
      ></Button>
    </div>
  );
}

const App = () => {
  const [plans, setPlans] = useState([]); // 해야 할 것들
  const [completes, setCompletes] = useState([]); // 완료 된 것들
  const [title, setTitle] = useState(""); // 플랜 제목
  const [content, setContent] = useState(""); // 플랜 내용
  const addNewPlan = () => {
    if (!(title || content)) {
      alert("뭐라도좀 써");
      return;
    }
    const newPlan = {
      id: plans.length + 1,
      title: title,
      content: content,
    };

    setPlans([...plans, newPlan]);
    setTitle(""); // 인풋에 글들이 남아 있어서 초기화
    setContent(""); // 인풋에 글들이 남아 있어서 초기화
  };

  const swaping = (id, type) => {
    let index;

    const list = type === "down" ? plans : completes;

    for (let i in list) {
      if (list[i].id === id) {
        // 완료한 플랜 찾기
        index = i;
        break;
      }
    }
    const target = list.splice(index, 1); // splice 해서 분리시키기
    const swaping = {
      id: list.length + 1,
      title: target[0].title,
      content: target[0].content,
    };

    type === "down"
      ? setCompletes([...completes, swaping])
      : setPlans([...plans, swaping]);

    //setName(""); // 입력 완료후 input창 초기화
  };

  const deleted = (id, type) => {
    type === "todo"
      ? setPlans(plans.filter((plan) => plan.id !== id))
      : setCompletes(completes.filter((complete) => complete.id !== id));
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="banner">
          <img src={toDoIcon} />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="버티자, 버티는거야, 버티고 보는거야, 인생은 버티는거야, 버티면 다 되는거야"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span
            class="input-group-text"
            id="basic-addon2"
            style={{ background: "#54BD54" }}
          >
            <Button onClick={addNewPlan}></Button>
          </span>
          {/* <input
            className="form-control"
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button onClick={addNewPlan}></Button> */}
        </div>

        <div className="icon">
          <img src={angry} />
        </div>
        <div className="todo-list">
          {plans.map((plan) => {
            if (plan.length !== 0) {
              return (
                // <div className="wrap-list">
                <div>
                  <Plan
                    plan={plan}
                    key={plan.id}
                    deleted={deleted}
                    swaping={swaping}
                  />
                </div>
              );
            }
          })}
        </div>
        <div className="icon">
          <img src={wink} />
        </div>
        <div className="todo-list-completed">
          {completes.map((complete) => {
            if (complete.length !== 0) {
              return (
                // <div className="wrap-list">
                <div>
                  <Complete
                    complete={complete}
                    key={complete.id}
                    deleted={deleted}
                    swaping={swaping}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
