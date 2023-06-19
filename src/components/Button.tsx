import classNames from "classnames";

interface IButton {
  label: string;
  onClick: () => void;
  className?: string;
}

function Button(props: IButton) {
  const { label, onClick, className } = props;

  return (
    <button
      onClick={onClick}
      className={classNames(
        "p-1 bg-slate-500 text-white w-10 h-10 flex items-center justify-center font-medium text-lg",
        className
      )}
    >
      {label}
    </button>
  );
}

export default Button;
