import { useContext, useEffect } from "react";
import { ShopContext } from "../context";

/* interface IAlert {
  name: string;
  closeAlert: () => void;
} */
const Alert = () => {
  console.log("alertRender");
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("ShopContext must be used within a ShopProvider");
  }
  const { alertName: name = "", closeAlert } = context;
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
};

export default Alert;
