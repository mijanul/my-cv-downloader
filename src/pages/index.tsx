import SEO from "@/components/Seo";
import { useEffect, useState, CSSProperties } from "react";

const CV_FILE_PATH = "/SK Mijanul Haque_resume.pdf";
const CV_FILE_NAME = "SK Mijanul Haque_resume.pdf";
const REDIRECT_URL = "https://mijanul.in";
const REDIRECT_DELAY = 10000;
const downloadCV = () => {
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = CV_FILE_PATH;
    link.download = CV_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 1000);
};

const redirectToWebsite = () => {
  window.open(REDIRECT_URL, "_self");
};

const styles: { [key: string]: CSSProperties } = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#000000",
    padding: "20px",
  },
  container: {
    backgroundColor: "#000000",
    borderRadius: "12px",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
    padding: "30px",
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
    border: "2px solid #ffb400",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    color: "#ffffff",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
    color: "#ffffff",
  },
  link: {
    color: "#daa520",
    textDecoration: "underline",
    fontWeight: "bold",
  },
  countdownText: {
    fontSize: "1.2rem",
    color: "#ffffff",
  },
};

export default function Home() {
  const [countdown, setCountdown] = useState(REDIRECT_DELAY / 1000);

  useEffect(() => {
    downloadCV();

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(countdownInterval);
        return 0;
      });
    }, 1000);

    const timer = setTimeout(() => {
      redirectToWebsite();
    }, REDIRECT_DELAY);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <>
      <SEO pageTitle={"CV download - Mijanul"} />
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.heading}>Preparing download...</h1>
          <p style={styles.paragraph}>
            if it doesn’t kick off on its own,{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                downloadCV();
              }}
              style={styles.link}
            >
              tap here
            </a>
            .
          </p>
          <p style={styles.countdownText}>
            Redirecting to{" "}
            <a href={REDIRECT_URL} style={styles.link}>
              mijanul.in
            </a>{" "}
            in {countdown}s. 🚀
          </p>
        </div>
      </main>
    </>
  );
}
