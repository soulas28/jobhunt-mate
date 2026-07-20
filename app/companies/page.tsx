import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCompanies } from "@/lib/data-access";

export default async function Home() {
  const companies = await getCompanies();
  return (
    <div className="">
      <main className="">
        <h1 className="text-2xl text-center h-20">Companies</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Rank</TableHead>
              <TableHead>ステータス</TableHead>
              <TableHead>会社名</TableHead>
              <TableHead>TODO</TableHead>
              <TableHead>予約</TableHead>
              <TableHead>マイページ</TableHead>
              <TableHead>オファー元サイト</TableHead>
              <TableHead>年収予定</TableHead>
              <TableHead>副業</TableHead>
              <TableHead>リモート</TableHead>
              <TableHead>自社開発</TableHead>
              <TableHead>セキュリティ</TableHead>
              <TableHead>平均残業</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((e) => (
              <TableRow key={e.id}>
                <TableCell>{e.id}</TableCell>
                <TableCell>{e.rank}</TableCell>
                <TableCell>FILLING</TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>なし</TableCell>
                <TableCell>なし</TableCell>
                <TableCell>{e.mypageUrl}</TableCell>
                <TableCell>{e.offeredFrom}</TableCell>
                <TableCell>{e.salary}</TableCell>
                <TableCell>{e.canSideJob ? "Y" : "N"}</TableCell>
                <TableCell>{e.canRemote ? "Y" : "N"}</TableCell>
                <TableCell>{e.haveOwnProduct ? "Y" : "N"}</TableCell>
                <TableCell>{e.haveSecurity ? "Y" : "N"}</TableCell>
                <TableCell>{e.avgOvertime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
