import "./Button.css";
import { LoadingOutlined } from "@ant-design/icons";

function Button({
  children,
  variant = "primary",
  type = "button",
  href,
  target,
  rel,
  download,
  onClick,
  disabled = false,
  loading = false,
  ...props
}) {
  const classes = `btn btn-${variant}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        download={download}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <LoadingOutlined spin style={{ marginRight: "8px" }} />}

      {children}
    </button>
  );
}

export default Button;
