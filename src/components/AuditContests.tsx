import Section from "./Section"
import styles from "./AuditContests.module.css"

const contests = [
  { date: "2026/05", project: "K2", rank: 69, found: "3H", payout: "$0.39" },
  {
    date: "2024/03",
    project: "Taiko",
    rank: 11,
    found: "1H",
    payout: "$2.03K",
  },
  {
    date: "2024/03",
    project: "Revert Lend",
    rank: 29,
    found: "2M",
    payout: "$422.35",
  },
  {
    date: "2023/12",
    project: "Ethereum Credit Guild",
    rank: 24,
    found: "3H, 1M",
    payout: "$577.54",
  },
]

export default function AuditContests() {
  return (
    <Section title="Audit Contests">
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Project</th>
              <th>Rank</th>
              <th>Found</th>
              <th>Payout</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((c, i) => (
              <tr key={i}>
                <td>{c.date}</td>
                <td>{c.project}</td>
                <td>{c.rank}</td>
                <td>{c.found}</td>
                <td>{c.payout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
