import styles from "./tableskeleton.module.css"
export default function TableSkeleton(){
    return(
        <div className="bg-green-50 justify-center flex mt-8">
            <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th> Pet Name</th>
                    <th>Owner Name</th>
                    

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={styles.loading}>
                    <div className={styles.bar}></div>
                    </td>
                    <td className={styles.loading}>
                    <div className={styles.bar}></div>
                    </td>
                   
                </tr>
                </tbody>
            </table>
            </div>
        </div>

    );
}