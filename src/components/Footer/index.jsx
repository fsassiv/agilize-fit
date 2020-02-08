import React from "react";
import "./styles.scss";

const Footer = () => {

  const actionHandler = (actionName) => {
    console.log(`Clicou ${actionName}.`);
  }

  return (
    <ul className="footer">
      <li onClick={() => actionHandler('Tarefas')}>
        <div className="icon"></div>
        <p>Tarefas</p>
      </li>
      <li onClick={() => actionHandler('Feed')}>
        <div className="icon"></div>
        <p>Feed</p>
      </li>
      <li onClick={() => actionHandler('Ranking')}>
        <div className="icon"></div>
        <p>Ranking</p>
      </li>
      <li onClick={() => actionHandler('Regras')}>
        <div className="icon"></div>
        <p>Regras</p>
      </li>
    </ul>
  );
};

export default Footer;
