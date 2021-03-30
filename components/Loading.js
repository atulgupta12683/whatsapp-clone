import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="http://assets.stickpng.com/images/5ae21cc526c97415d3213554.png"
          alt="Loading"
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3cbc28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
