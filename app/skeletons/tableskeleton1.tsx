import styles from "./tableskeleton.module.css"
export default function TableSkeleton1(){
    return(
        <div className="bg-green-50 justify-center flex mt-8">
            <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th> Employee ID </th>
                    <th>Employee Name</th>
                    <th>Employee Address</th>
                    <th>Employee Salary</th>
                    <th>Employee EmailID</th>
                    <th>Employee MobileNo</th>
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
                    <td className={styles.loading}>
                    <div className={styles.bar}></div>
                    </td>
                    <td className={styles.loading}>
                    <div className={styles.bar}></div>
                    </td>
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