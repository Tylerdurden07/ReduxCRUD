import axios from 'axios';
export const FETCH_ONEPOST='fetch_onepost';
export const CREATE_POST="create_post"
export const FETCH_POST="fetch_post";
export const DELETE_POST="delete_post";
const ROOT_URL="http://reduxblog.herokuapp.com/api/";
const API_KEY="?key=SEKAR";

export function FetchPosts(){
  const request=axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type:FETCH_POST,
    payload:request
  };
}

export function CreatePost(values,callback){
  const request=axios.post(`${ROOT_URL}/posts${API_KEY}`,
    values
  ).then(()=>callback());

  return {
    type:CREATE_POST,
    payload:request
  }
}

export function FetchPost(id){
  const request=axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type:FETCH_ONEPOST,
    payload:request
  }
}

export function DeletePost(id,callback){
  const request=axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(()=>{
    callback();
  })
  return{
    type:DELETE_POST,
    payload:id
  }
}
