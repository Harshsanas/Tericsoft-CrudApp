import React from "react";
import styled from "styled-components";
export default function PageNotFound() {
  const PAGE = styled.div`
    position: fixed;
    width: 100vw;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    height: 100vh;
  `;
  return (
    <div>
      <PAGE>404 PAGE NOT FOUND</PAGE>
    </div>
  );
}
