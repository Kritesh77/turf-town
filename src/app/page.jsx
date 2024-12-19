import Button from "@/components/common/Button";
import Image from "next/image";
export default function Home() {
  return (
    <main className="main-container grid-cols-2">
      <div className="flex-center">
        <div className="relative">
          <Image
            src={"./assets/logo/TT Logo White.svg"}
            alt="turf town logo"
            layout="intrinsic"
            height={0}
            width={100}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <div className="flex-justify-center">
            <h1>Welcome to the Command Centre</h1>
            <div className="relative">
              <Image
                src={"./assets/icons/Cool Shape.svg"}
                alt="turf town logo"
                layout="intrinsic"
                height={0}
                width={20}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <h3>Login to access and manage the Townverse.</h3>
          <div>
            <Button
              title="Login with Google"
              icon={{
                src: "/assets/icons/google 1.svg",
                alt: "Google icon",
              }}
            />
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
