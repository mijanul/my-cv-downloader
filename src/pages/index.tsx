import SEO from "@/components/Seo";
import { useEffect } from "react";

export default function Home() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/SK Mijanul Haque_resume.pdf";
    link.download = "SK Mijanul Haque_resume.pdf"; // custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    downloadCV();
  }, []);

  return (
    <>
      <SEO pageTitle={"CV download - Mijanul"} />
      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Preparing download...</h1>
        <p>
          If it doesn’t start automatically,{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              downloadCV();
            }}
          >
            click here
          </a>
          .
        </p>
      </main>
    </>
  );
}
