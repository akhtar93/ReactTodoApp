import axios from "axios";

export function getTodoList() {
  return axios.get(`https://dummyjson.com/todos/?limit=1000`);
}

export function addTask(taskObj) {
  return axios.post('https://dummyjson.com/todos/add', taskObj);
}
export function markAsDone(taskId, taskObj) {
  return axios.put(`https://dummyjson.com/todos/${taskId}`, taskObj);
}
export function markDelete(taskId) {
  return axios.delete(`https://dummyjson.com/todos/${taskId}`);
}