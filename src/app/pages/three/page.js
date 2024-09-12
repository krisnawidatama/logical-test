'use client';
import styles from "../../page.module.css"
import Link from "next/link"

export default function Palindrom() {
    const isPalindrome = (str) => {
        const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = e.target.text.value;
        const result = isPalindrome(input);
        document.getElementById('result').textContent = result ? 'True' : 'False';
    };


    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className="text-3xl font-bold mb-4">Periksa Teks Palindrom</h1>
                <form onSubmit={handleSubmit} className="row g-2">
                    <div className="col-auto">
                        <input
                            type="text"
                            name="text"
                            className="form-control"
                            placeholder="Masukkan Teks"
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
                <div className="mt-4">
                    <h2 className="text-2xl font-bold">Hasil Palindrom</h2>
                    <p id="result" className="text-lg"></p>
                </div>
            </main>
        </div>

    );
}
