import styled from "styled-components";

export const DefaultBtn = styled.button({
  cursor: "pointer",
  backgroundColor: "#fca61f",
  padding: " 14px 38px",
  border: "none",
  borderRadius: 35,
  color: "#fff",
  fontWeight: 400,
  fontSize: 20,
  fontFamily: "Josefin Sans",
  transition: "0.4s",
  "&:hover": {
    backgroundColor: "#6f34fe",
    transform: "translateY(-5px)",
  },
});

export const SocialItem = styled.button(({ color }) => ({
  cursor: "pointer",
  fontSize: 24,
  backgroundColor: "white",
  border: "none",
  borderRadius: "50%",
  width: 50,
  height: 50,
  color: color,
  transition: "0.4s",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: color,
    color: "#fff",
    transform: "translateY(-5px)",
  },
}));

export const ArrowButton = styled.button(({ direction }) => ({
  transition: "0.4s",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.3rem",
  backgroundColor: "#fca61f",
  padding: 20,
  border: "none",
  borderRadius: "50%",
  width: 50,
  height: 50,
  color: "#fff",
  "&:hover": {
    transform:
      direction === "right"
        ? "translateX(5px)"
        : direction === "left"
        ? "translateX(-5px)"
        : "",
  },
}));

export const DefaultInput = styled.input({
  background: "#fefeff",
  border: "none",
  boxShadow:
    "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
  fontSize: " 16px",
  padding: "17px 30px",
  borderRadius: "30px",
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "Lato",
  "&:focus": {
    outline: "1px solid #6f34fe",
  },
});

export const DefaultTextArea = styled.textarea({
  background: "#fefeff",
  border: "none",
  boxShadow:
    "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
  fontSize: " 16px",
  padding: "17px 30px",
  borderRadius: "30px",
  width: "100% !important",
  height: "100% !important",
  minHeight: "150px",
  boxSizing: "border-box",
  fontFamily: "Lato",
  resize: "none",
  "&:focus": {
    outline: "1px solid #6f34fe",
  },
});

export const DefaultCircle = styled.div(({ color }) => ({
  position: "absolute",
  backgroundColor: color,
  borderRadius: "50%",
  width: "200px",
  height: "200px",
}));
