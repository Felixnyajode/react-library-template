import React from "react";
import classNames from "classnames";

export default function Foo({ bar, ...restProps }) {
  return (
    <div className={classNames("SomeClassName")}>
      Foo: {bar}, Rest Props Size: {Object.keys(restProps).length}
    </div>
  );
}
