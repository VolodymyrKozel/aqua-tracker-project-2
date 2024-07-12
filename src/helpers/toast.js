import toast from "react-hot-toast";

export const successToast = (message) =>
  toast.success(message, {
    position: "top-right",
    style: {
      padding: "12px",
      background: "#e2fee2",
      color: "#242424",
    },
  });

export const errorToast = (message) =>
  toast.error(message, {
    position: "top-right",
    style: {
      padding: "12px",
      background: "#ffeaea",
      color: "#242424",
    },
  });