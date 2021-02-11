import { memo, useState } from "react";
import clsx from "clsx";
import Cell from "../Cell/Cell";
import styles from "./Table.module.scss";

function Table({ numRows, numColumns }) {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const columns = [];
    for (let j = 0; j < numColumns; j++) {
      columns.push(<Cell key={j} />);
    }
    rows.push(
      <div key={i} className={styles.row}>
        {columns}
      </div>
    );
  }
  return <div className={styles.root}>{rows}</div>;
}

export default memo(Table);
