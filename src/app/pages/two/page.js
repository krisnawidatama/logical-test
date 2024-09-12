'use client';
import styles from "../../page.module.css"
import Link from "next/link"

export default function Sorting() {

    const sortAscending = (arr) => {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    };

    const sortDescending = (arr) => {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = e.target.numbers.value;
        const array = input.split(',').map(Number);

        const sortedAsc = sortAscending([...array]);
        const sortedDesc = sortDescending([...array]);

        const ascResultElement = document.getElementById('asc-result');
        const descResultElement = document.getElementById('desc-result');

        if (ascResultElement && descResultElement) {
            ascResultElement.textContent = sortedAsc.join(', ');
            descResultElement.textContent = sortedDesc.join(', ');
        } else {
            console.error('Error');
        }
    };


    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className="text-3xl font-bold mb-4">Pengurutan Angka</h1>
                <form onSubmit={handleSubmit} className="row g-2">
                    <div className="col-auto">
                        <input
                            type="text"
                            name="numbers"
                            className="form-control"
                            placeholder="Angka Acak, cth: 3,5,1,9"
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
                    <h4 className="text-2xl font-bold">Hasil Pengurutan Dari Kecil ke Besar:</h4>
                    <p id="asc-result" className="text-lg"></p>
                </div>
                <div className="mt-4">
                    <h4 className="text-2xl font-bold">Hasil Pengurutan Dari Besar ke Kecil:</h4>
                    <p id="desc-result" className="text-lg"></p>
                </div>
            </main>
        </div>

    );
}
