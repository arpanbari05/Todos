import { Alert, Button, Snackbar } from "@mui/material";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loader({ size = 14 }) {
  return <AiOutlineLoading3Quarters size={size} className="animate-spin" />;
}

export function MatButton({
  children,
  onClick = () => {},
  className,
  type = "button",
  size = "large",
  variant = "contained",
  isLoading,
  color = "primary",
}) {
  return (
    <Button
      className={`flex justify-center items-center gap-3 rounded-lg h-[44px] ${className}`}
      type={type}
      fullWidth
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
    >
      <span className="flex justify-center items-center gap-2">{children}</span>
      {isLoading && <Loader />}
    </Button>
  );
}

export function Toast({ message = "", status, handleClose, open }) {
  console.log({ message, status, handleClose, open });
  const vertical = "top";
  const horizontal = "center";
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      key={vertical + horizontal}
    >
      <Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
