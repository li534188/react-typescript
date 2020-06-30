let nextTodoId = 0
// 设置todos action的枚举类型
export enum ToDosActions{
  ADD_TODO = 'ADD_TODO',
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',
  TOGGLE_TODO = 'TOGGLE_TODO',

}

// 设置action的 接口


interface ToggleTodo {
  type:ToDosActions.TOGGLE_TODO,
  id:number
}

interface SetVisibilityFilter {
  type: ToDosActions.SET_VISIBILITY_FILTER,
  filter:any
}

interface AddTodo {
  type: ToDosActions.ADD_TODO,
  id:number,
  text:string
}



//设置Todos action的交叉类型接口
export type ToDoAction = AddTodo | SetVisibilityFilter | ToggleTodo;


export function addTodo(text):AddTodo{
  return {
    type: ToDosActions.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter):SetVisibilityFilter => ({
  type: ToDosActions.SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = (id):ToggleTodo => ({
  type: ToDosActions.TOGGLE_TODO,
  id
})


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//在这里测试一下redux-thunk的使用
export const exampleAction = {
    asyncThing:()=>{
        // 使用redux-thunk dispatch就可以传送函数了，而不用传送对象
        return (dispatch,) =>{
            // fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
            //     .then(res => {
            //         dispatch(exampleAction.asyncSuccess('我是成功回调'))  
            //     }).catch(e => {
            //         dispatch(exampleAction.asyncError('我是成功回调'))  
            // });
            setTimeout(() => {
                let sign = Math.random() >= 0.5 ? true : false;
                console.log(sign)
                sign ? dispatch(exampleAction.asyncSuccess('我是成功数据'))  : dispatch(exampleAction.asyncError('我是失败数据'))  
            }, 2000);
        }
    },
    asyncSuccess:(text)=>({
        type:'SUCCESS',
        text:text,
        mate:'异步成功操作'
    }),
    asyncError:(text)=>({
        type:'ERROR',
        text:text,
        mate:'异步成功操作'
    })
}

