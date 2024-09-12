'use client';
import styles from "../../page.module.css"
import Link from "next/link"

export default function FishBashPage() {
    const printNumbers = (limit) => {
        let result = [];
        for (let i = 1; i <= limit; i++) {
            if (i % 15 === 0) {
                result.push("fish bash");
            } else if (i % 3 === 0) {
                result.push("fish");
            } else if (i % 5 === 0) {
                result.push("bash");
            } else {
                result.push(i);
            }
        }
        return result;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const limit = e.target.limit.value;
        const output = printNumbers(limit);
        alert(output.join(", ")); // Tampilkan hasil menggunakan alert
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className="text-3xl font-bold mb-4">Fish Bash Game</h1>
                <form onSubmit={handleSubmit} className="row g-2">
                    <div className="col-auto">
                        <input
                            type="number"
                            name="limit"
                            className="form-control"
                            placeholder="Masukkan Batas Angka"
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Proses
                        </button>
                    </div>
                    <Link href="/">&laquo; Kembali</Link>
                </form>
            </main>
        </div>

    );
}
