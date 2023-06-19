import { useEffect } from "react";
import message from "../languages/en";

const useDocumentTitle = (title: string) => {
  console.log("useDocumentTitle");
  useEffect(() => {
    console.log("useDocumentTitle useEffect");

    window.document.title = title;

    return () => {
      window.document.title = message.APP_NAME;
    };
  }, []);
};

export default useDocumentTitle;
