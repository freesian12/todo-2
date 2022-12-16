import React, { useState } from "react";

import Button from "./../component/main/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  CompleCotent,
  PlanContent,
  Banner,
  Icon,
  List,
  OuterContainer,
  InnerContainer,
  TodoList,
  TodoListCompleted,
} from "./../styled_component/main.jsx";

import { detail, swaping, deleted, add } from "./../redux/modules/counter.js";

import toDoIcon from "./../img/todo.svg";
import board from "./../img/clipboard.svg";
import angry from "./../img/volume-up.svg";
import wink from "./../img/volume-mute.svg";
import box from "./../img/inbox.svg";

function Plan(props) {
  return (
    <List>
      <img src={board} style={{ width: "100%" }} />
      <PlanContent>{props.plan.title}</PlanContent>
      <PlanContent>{props.plan.content}</PlanContent>
      <Button
        onClick={() => props.scratch(props.plan.id)}
        type={"scratch"}
      ></Button>
      <Button
        onClick={() => props.swap(props.plan.id, props.plan)}
        type={"complete"}
      ></Button>
      <Button
        onClick={() => props.goDetail(props.plan)}
        type={"expand"}
      ></Button>
    </List>
  );
}

function Complete(props) {
  return (
    <List>
      <CompleCotent>{props.complete.title}</CompleCotent>
      <CompleCotent>{props.complete.content}</CompleCotent>
      <img src={box} style={{ width: "100%" }} />
      <Button
        onClick={() => props.scratch(props.complete.id)}
        type={"scratch"}
      ></Button>
      <Button
        onClick={() => props.swap(props.complete.id, props.complete)}
        type={"reback"}
      ></Button>
      <Button
        onClick={() => props.goDetail(props.complete)}
        type={"expand"}
      ></Button>
    </List>
  );
}

const Main = () => {
  const [title, setTitle] = useState(""); // 플랜 제목
  //const [content, setContent] = useState(""); // 플랜 내용

  const obj = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const navi = useNavigate();

  const addNewPlan = () => {
    if (!title) {
      alert("뭐라도좀 써");
      return;
    }
    const newPlan = {
      id: obj.plans.length + 1,
      title: title,
      isComplete: false,
      //content: content,
    };

    dispatch(add(newPlan));
    setTitle("");
  };

  const scratch = (id) => {
    // 삭제
    dispatch(deleted(id));
  };

  const swap = (id, plan, kind) => {
    // 완료 및 복원
    dispatch(swaping(id, plan, kind));
  };

  const goDetail = (id) => {
    dispatch(detail(id), navi("/detail"));
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <Banner>
          <img src={toDoIcon} />
        </Banner>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="버티자, 버티는거야, 버티고 보는거야, 인생은 버티는거야, 버티면 다 되는거야"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span
            className="input-group-text"
            id="basic-addon2"
            style={{ background: "#54BD54" }}
          >
            <Button onClick={addNewPlan}></Button>
          </span>
        </div>

        <Icon>
          <img src={angry} />
        </Icon>
        <TodoList>
          {obj.plans.map((plan) => {
            if (plan.length !== 0) {
              return (
                // <div className="wrap-list">
                <div>
                  <Plan
                    plan={plan}
                    key={plan.id}
                    scratch={scratch}
                    swap={swap}
                    goDetail={goDetail}
                  />
                </div>
              );
            }
          })}
        </TodoList>
        <Icon>
          <img src={wink} />
        </Icon>
        <TodoListCompleted>
          {obj.completed.map((complete) => {
            if (complete.length !== 0) {
              return (
                // <div className="wrap-list">
                <div>
                  <Complete
                    complete={complete}
                    key={complete.id}
                    scratch={scratch}
                    swap={swap}
                    goDetail={goDetail}
                  />
                </div>
              );
            }
          })}
        </TodoListCompleted>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Main;
