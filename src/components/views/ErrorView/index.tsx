import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { SerializedError } from "@reduxjs/toolkit";

const Error = ({ error }: { error: FetchBaseQueryError | SerializedError }) => {
  if ("status" in error) {
    const errorMessage =
      "error" in error ? error.error : JSON.stringify(error.data);

    return (
      <div>
        <p>An error has occurred:</p>
        <p>{errorMessage}</p>
      </div>
    );
  }

  return <p>Something went wrong! An error occurred: {error.message}</p>;
};

export default Error;
