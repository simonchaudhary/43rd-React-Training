import { useEffect } from "react";
import message from "../languages/en";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    window.document.title = title;

    return () => {
      window.document.title = message.APP_NAME;
    };
  }, [title]);
};

export default useDocumentTitle;
