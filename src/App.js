import styles from "./App.module.scss";
import Table from "./components/Table/Table";

export default function App() {
  return (
    <div className={styles.root}>
      <Table numRows={8} numColumns={8} />
    </div>
  );
}
