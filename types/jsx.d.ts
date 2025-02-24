/// <reference types="react" />

import * as React from "react";

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
