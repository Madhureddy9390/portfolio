import "./Button.css";

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
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
