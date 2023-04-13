import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import EMP_logo from "./assets/images/EMP_logo.png";
import EMP_logo_pequeno from "./assets/images/EMP_logo_pequeno.png";
import './App.css';

import * as firebase from "firebase/app"; 
import * as firebaseAuth from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyApZu6EALazP78vg6i6TOA9GziipXdTxd0",
  authDomain: "login-epm.firebaseapp.com",
  databaseURL: "https://login-epm-default-rtdb.firebaseio.com",
  projectId: "login-epm",
  storageBucket: "login-epm.appspot.com",
  messagingSenderId: "1061107555846",
  appId: "1:1061107555846:web:30005b049c477ae0fb2d87",
  measurementId: "G-1ECBPE8NVC"
};

const app = firebase.initializeApp(firebaseConfig)

const auth = firebaseAuth.initializeAuth(app);

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="cadastrar" element={<Cadastrar />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}


function Home() {

  const onSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.Email.value;
    let senha = e.target.elements.Senha.value;

    console.log(email, senha);

    firebaseAuth.signInWithEmailAndPassword(auth, email, senha
).then(user => alert("Usuário logado com sucesso!"))
.catch(error => alert("Email ou senha incorretos!"));

  }
  
  return (
    <main className="centralize">
        <div className="logo">
        <img src={EMP_logo} alt="Logo EMP" />
      </div>
      <form onSubmit={onSubmit}>
          <input type="email" placeholder="Email" name="Email"/>
          <input type="password" placeholder="Senha" name="Senha"/>
          <button type="submit" className="solid">Entrar</button>
          <Link to="/cadastrar">
            <button type="button" className="outline">Registrar</button>
          </Link>
      </form>
      </main>
    
  );
}

function Cadastrar(){
  
  const onSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.Email.value;
    let senha = e.target.elements.Senha.value;

    console.log(email, senha);

firebaseAuth.createUserWithEmailAndPassword(auth, email, senha
).then(user => alert("Cadastro realizado com sucesso!"))
.catch(error => alert("Erro ao cadastrar!"));
  
  

  }
  
  
  return (
    <main className="centralize">
    <div className="logo">
    <img src={EMP_logo} alt="Logo EMP" />
  </div>
  <form onSubmit={onSubmit}>
      <input type="text" placeholder="Nome" name="Nome"/>
      <input type="email" placeholder="Email" name="Email"/>
      <input type="password" placeholder="Senha" name="Senha"/>
      <button type="submit" className="outline">Cadastrar</button>
  </form>
  <p>Já tem uma conta? <Link to="/login">Entrar</Link></p>
  </main>
  );
}

function Login() {
  const onSubmit = (e) => {
    let email = e.target.elements.Email.value;
    let senha = e.target.elements.Senha.value;

    console.log(email, senha);
    
firebaseAuth.signInWithEmailAndPassword(auth, email, senha
).then(user => alert("Usuário logado com sucesso!"))
.catch(error => alert("Email ou senha incorretos!"));
      
  }
  
  return (
    <main className="centralize">
        <div className="logo">
        <img src={EMP_logo} alt="Logo EMP" />
      </div>
      <form onSubmit={onSubmit}>
          <input type="email" placeholder="Email" name="Email"/>
          <input type="password" placeholder="Senha" name="Senha"/>
          <button type="submit" className="solid">Entrar</button>
          <Link to="/cadastrar">
            <button type="button" className="outline">Registrar</button>
          </Link>
      </form>
      </main>
    
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
