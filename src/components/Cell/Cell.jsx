import React, { memo, useState } from "react";
import clsx from "clsx";
import styles from "./Cell.module.scss";

function Cell() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={clsx(styles.root, { [styles.active]: isActive })}
      onClick={() => setIsActive((v) => !v)}
    >
      {" "}
    </button>
  );
}

export default memo(Cell);
