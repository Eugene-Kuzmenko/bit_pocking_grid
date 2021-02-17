import { memo, useState } from "react";
import clsx from "clsx";
import Cell from "../Cell/Cell";
import styles from "./Table.module.scss";

const RANK = ["A", "B", "C", "D", "E", "F", "G", "H"];

function Table({ numRows, numColumns }) {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const columns = [];
    for (let j = 0; j < numColumns; j++) {
      columns.push(<Cell key={j} />);
    }
    rows.push(
      <div key={i} className={styles.row}>
        <div className={styles.notation}>{8 - i}</div>
        {columns}
      </div>
    );
  }
  return (
    <div className={styles.root}>
      <div className={styles.titles}>
        {RANK.map((key) => (
          <div key={key} className={styles.notation}>
            {key}
          </div>
        ))}
      </div>
      {rows}
    </div>
  );
}

export default memo(Table);
