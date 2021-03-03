 import request from 'superagent';
 
 const URL = 'http://localhost:3000';

 export async function signUp(email, password) {

    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })
    
    return response.body;
 }

 export async function login(email, password) {

    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })
    
    return response.body;
 }

 export async function createTodo(hacer, color, token) {

    const response = await request
        .post(`${URL}/api/todos`)
        .set('Authorization', token)
        .send({ hacer, color })
    
    return response.body;
 }

 export async function updateTodo(todo, token) {

    const response = await request
        .put(`${URL}/api/todos/${todo.id}`)
        .set('Authorization', token)
        .send({ todo })

    return response.body;
 }

 export async function getTodos(token) {

    const response = await request
        .get(`${URL}/api/todos`)
        .set('Authorization', token)

    return response.body;
 }