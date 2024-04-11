function TeamImages({ count, data, active, setActive }) {
  const circleCountArray = [...Array(count).keys()];

  const circlePositions = circleCountArray.map((index) => {
    const angle = (index * (360 / count)) % 360;
    const radians = (angle * Math.PI) / 180;
    const x = 50 + 50 * Math.cos(radians);
    const y = 50 + 50 * Math.sin(radians);
    return { x, y };
  });

  return (
    <div className="team__images" data-aos="fade-right">
      <div className="team__images-circle">
        {circlePositions.map((position, index) => (
          <div
            className={`team__image ${index === active ? "active-img" : ""}`}
            key={index}
            style={{
              top: `${position.y}%`,
              left: `${position.x}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src={data[index].avatar} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamImages;
