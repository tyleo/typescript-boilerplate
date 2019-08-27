import { default as WebpackMerge } from "webpack-merge";

import * as Common from "./webpack.common";
import * as ReleaseBase from "./webpack.releasebase";

const config = WebpackMerge(
  ReleaseBase.makeReleaseBase({
    FINAL: JSON.stringify(true),
  }),
  {
    output: {
      path: Common.webpackRelative("release_final"),
    },
  },
);

export default config;
