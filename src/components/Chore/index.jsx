import React from "react";
import "./styles.scss";
import { ReactComponent as Success } from "../../assets/success.svg";
import { ReactComponent as Lock } from "../../assets/lock.svg";
import { ReactComponent as OpenLock } from "../../assets/open-lock.svg";
import { ReactComponent as Block } from "../../assets/block.svg";

const Chore = ({ status, value, label }) => {
  return (
    <li className={`chore ${status==='open'?'open':''}`}>
      {status === "open" && <OpenLock />}
      {status === "closed" && <Lock />}
      {status === "done" && <Success />}
      {status === "missed" && <Block />}
      <p className="chore__label">{label}</p>
      {status === "open" && <p className="chore__warning">Disponivel</p>}

      <span className="chore__value">{value}</span>
    </li>
  );
};

export default Chore;
