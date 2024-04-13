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

export const SumbitBtn = styled.button({
  cursor: "pointer",
  backgroundColor: "#fca61f",
  padding: " 14px 38px",
  border: "none",
  borderRadius: 35,
  color: "#fff",
  fontWeight: 400,
  fontSize: 22,
  fontFamily: "Josefin Sans",
  transition: "0.4s",
  "&:hover": {
    backgroundColor: "#6f34fe",
    transform: "translateY(-5px)",
  },
  marginTop:"50%",
marginLeft:"-10%"
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
