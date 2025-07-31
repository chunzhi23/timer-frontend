import { useEffect, useState } from "react";
import { commonAxios } from "../../util/commonAxios";
import classes from "./VisitorCountBox.module.css";

export function VisitorCountBox() {
  const [total, setTotal] = useState(0);
  const [today, setToday] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalVisitor = await commonAxios.get("/visit/total");
        setTotal(() => totalVisitor.data);

        const todayVisitor = await commonAxios.get("/visit/today");
        setToday(() => todayVisitor.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classes.visitorBox}>
      <span className={classes.value} data-value={total}>
        Total
      </span>
      <span className={classes.value} data-value={today}>
        Today
      </span>
    </div>
  );
}
