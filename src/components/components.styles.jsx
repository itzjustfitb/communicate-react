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
  padding: " 14px 40px",
  border: "none",
  borderRadius: 45,
  color: "#fff",
  fontWeight: 400,
  fontSize: 20,
  fontFamily: "Josefin Sans",
  transition: "0.4s",
 marginTop:"43%",
 marginLeft:"-8%"
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
