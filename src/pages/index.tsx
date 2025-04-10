import { useEffect } from "react";

export default function Home() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "SK Mijanul Haque_resume.pdf"; // custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    downloadCV();
  }, []);

  return (
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
  );
}
