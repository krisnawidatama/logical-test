import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <center>
          <h4>Jawaban Soal Nomor 1 - 3. Klik Tombol di Bawah ya.. &#128536;</h4>
          <div className={styles.ctas}>
            <Link
              href="./pages/one"
              className="btn btn-primary"
            >
              Soal No. 1
            </Link>
            <Link
              href="./pages/two"
              className="btn btn-secondary"
            >
              Soal no. 2
            </Link>
            <Link
              href="./pages/three"
              className="btn btn-success"
            >
              Soal No. 3
            </Link>
          </div>
        </center>
      </main>
    </div>
  );
}
