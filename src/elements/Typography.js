import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  text-decoration: ${(props) => props.textDecoration};
  text-align: ${(props) => props.textAlign};
`;

export default function Typography({
  width,
  variant,
  weight,
  className,
  children,
  fontSize,
  color,
  margin,
  padding,
  textAlign,
  textDecoration,
}) {
  if (!fontSize) {
    if (variant) {
      switch (variant) {
        case "p":
          fontSize = "16px";
          weight = weight ? weight : "200";
          break;
        case "h1":
          fontSize = "24px";
          weight = weight ? weight : "600";
          break;
        case "h2":
          fontSize = "22px";
          weight = weight ? weight : "500";
          break;
        case "h3":
          fontSize = "42px";
          weight = weight ? weight : "500";
          break;
        case "h4":
          fontSize = "20px";
          weight = weight ? weight : "400";
          break;
        case "h5":
          fontSize = "18px";
          weight = weight ? weight : "400";
          break;
        case "h6":
          fontSize = "16px";
          weight = weight ? weight : "600";
          break;
        default:
          fontSize = "16px";
          break;
      }
    }
    margin = margin ? margin : "0";
    padding = padding ? padding : "0";
    width = width ? width : "auto";
    textAlign = textAlign ? textAlign : "unset";
  }

  return (
    <Container
      className={className}
      fontSize={fontSize}
      as={variant}
      margin={margin}
      padding={padding}
      color={color}
      width={width}
      weight={weight}
      textDecoration={textDecoration}
      textAlign={textAlign}
    >
      {children}
    </Container>
  );
}
