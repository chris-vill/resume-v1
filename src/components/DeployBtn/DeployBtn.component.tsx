import Image from "next/image";
import classes from "./DeployBtn.module.sass";

export function DeployBtn() {
  return <>
    <a
      className={classes.primary}
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className={classes.logo}
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Deploy now
    </a>
  </>;
}