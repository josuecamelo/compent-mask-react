import React, { useCallback } from "react";
import { cep, currency, cpf } from "./Masks";

/*interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    mask: "cep" | "currency" | "cpf";
    prefix?: string;
}*/

const Input = ({ mask, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e) => {
      console.log(e.target.value);
      if (mask === "cep") {
        cep(e);
      }
      if (mask === "currency") {
        currency(e);
      }
      if (mask === "cpf") {
        cpf(e);
      }
    },
    [mask]
  );

  return <input {...props} onKeyUp={handleKeyUp} />;
};

export default Input;
