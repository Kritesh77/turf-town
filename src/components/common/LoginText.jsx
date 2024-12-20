import Image from "next/image";

const LoginTextComp = ({ title, subTitle, coolShapeImage }) => {
  return (
    <div className="login-text-container">
      <h1 className="login-flow-title">
        {title}
        {coolShapeImage && (
          <span className="relative">
            <Image
              src={coolShapeImage.src}
              alt={coolShapeImage.alt}
              layout="intrinsic"
              height={0}
              width={20}
              style={{ objectFit: "contain", marginLeft: "12px" }}
            />
          </span>
        )}
      </h1>
      <p className="login-flow-subtitle">{subTitle}</p>
    </div>
  );
};
export default LoginTextComp;
