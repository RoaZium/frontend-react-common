import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

const divStyle = {
  container: {
    // margin: "10px",
    // height: "calc(100vh - 20px)", // 브라우저 높이에서 margin 값만큼 뺀 값
    height: "100vh",
    overflow: "auto", // 스크롤 없애기
  },
};

export default function BaseWireFrame(props: any) {
  return (
    <CssBaseline>
      <div style={divStyle.container}>{props.children}</div>
    </CssBaseline>
  );
}
