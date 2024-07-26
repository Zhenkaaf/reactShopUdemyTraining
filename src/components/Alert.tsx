import { useEffect } from "react";

interface IAlert {
  name: string;
  closeAlert: () => void;
}
const Alert = ({ name = "", closeAlert }: IAlert) => {
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
