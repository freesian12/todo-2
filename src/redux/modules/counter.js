// src/modules/counter.js

// 저장소
const initialState = {
  target: null,
  plans: [], // 해야 할 목표들
  completed: [], // 완료한 목표들,
};

const DETAIL = "DETAIL"; // 상세보기
export const detail = (target) => {
  return {
    type: DETAIL,
    target,
  };
};

const MAIN = "MAIN"; // 메인 페이지로 이동
export const main = () => {
  return {
    type: MAIN,
    // plans,
    // completes,
  };
};

const UPDATE = "UPDATE"; // 해당 목표 내용수정
export const update = (target, title) => {
  // 수정한 게시글의 내용을

  return {
    type: UPDATE,
    target,
    title,
  };
};

const ADD = "ADD"; // 새 게시글 추가
export const add = (newPlan) => {
  //state.plans.push(newPlan);

  return {
    type: ADD,
    newPlan,
  };
};

const DELETED = "DELETED"; // 새 게시글 추가
export const deleted = (id, kind) => {
  //state.plans.push(newPlan);

  return {
    type: DELETED,
    id,
    kind,
  };
};

const SWAPING = "SWAPING"; // 새 게시글 추가
export const swaping = (id, obj, kind) => {
  //state.plans.push(newPlan);

  return {
    type: SWAPING,
    id,
    obj,
    kind,
  };
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL: // 상세페이지 버튼 클릭시
      return {
        target: action.target,
        plans: [...state.plans],
        completed: [...state.completed],
      };

    // case MAIN: // 뒤로가기, 메인페이지 클릭시
    //   return {
    //     plans: action.plans,
    //     completed: action.completed,
    //   };

    case UPDATE: // 게시글 수정
      const isComplete = action.target.isComplete;
      const planList =
        isComplete === false ? [...state.plans] : [...state.completed];

      for (let map of planList) {
        if (map.id === action.target.id) {
          map.title = action.title;
        }
      }
      return {
        plans: isComplete === false ? planList : [...state.plans],
        completed: isComplete === false ? [...state.completed] : planList,
      };

    case ADD: // 게시글 추가
      //const plan = state.plans;
      return {
        plans: [...state.plans, action.newPlan],
        completed: [...state.completed],
      };

    case DELETED: // 게시글 삭제
      const isCompleted = action.target.isComplete;
      //플랜 종류(해야할,완료된)로  state.plans,state.completed 구분하기
      const sortedList =
        isCompleted === false
          ? state.plans.filter((plan) => plan.id !== action.id)
          : state.completed.filter((plan) => plan.id !== action.id);

      //플랜 번호 빼고 필터하기
      //let sortedList = planList.filter((plan) => plan.id !== action.id);
      //return 하기
      if (isCompleted === false) {
        return {
          plans: [...sortedList],
          completed: [...state.completed],
        };
      } else {
        return {
          plans: [...state.plans],
          completed: [...sortedList],
        };
      }
    case SWAPING: // 완료 및 복원
      //플랜 종류(해야할,완료된)로  state.plans,state.completed 구분하기

      let todoList = [];
      let completeList = [];

      const isCompletes = action.obj.isComplete;

      if (isCompletes === false) {
        todoList = state.plans.filter((plan) => plan.id !== action.id);
        action.obj.isComplete = true;
        completeList = [...state.completed, action.obj];
      } else {
        action.obj.isComplete = false;
        todoList = [...state.plans, action.obj];
        completeList = state.completed.filter((plan) => plan.id !== action.id);
      }
      //todo면 state.plans 접근해서 filter로 거르기 , state.completed에 데이터 추가하기
      // 반대면 반대로
      return {
        target: action.obj,
        plans: [...todoList],
        completed: [...completeList],
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
