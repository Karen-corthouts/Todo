import styled from "styled-components";

const Item = styled.div`
  text-align: left;
  margin: 15px auto;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 9px 1px rgba(0, 0, 0, 0.4);
  max-width: 500px;

  ul {
      list-style-type: none;
  }

  li {
    margin: 0 0 15px;
    position: relative;
    margin-left: 10px;
    cursor: pointer;
    &:before, &:after {
        position: absolute;
        content: "";
        display: inline-block;
    }
    &:before {
        left: -30px;
        top: 50%;
        transform: translateY(-50%);
        height: 18px;
        width: 18px;
        background-color: #fff;
        border: 1px solid #333;
    }
  }
  .completed {
    text-decoration: line-through;
    &:after {
        content: "✓";
        left: -28px;
        top: 50%;
        transform: translateY(-50%);
        height: 28px;
        width: 28px;
        font-size: 28px;
        line-height: 28px;
        font-weight: bold;
        color: green;
    }
  }
`;

const PageWrapper = ({ children }) => {
    return <Item>{children}</Item>;
  };
  
  export default PageWrapper;