import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCompanies } from "@/lib/data-access";
import Link from "next/link";
import Header from "../../components/Header";

export default async function Home() {
  const companies = await getCompanies();
  return (
    <main>
      <Header title="Companies" />
      <div className="flex">
        <Link href="/companies/add">
          <Button className="right-0 px-10 py-5 text-lg mb-5 justify-end">
            New
          </Button>
        </Link>
      </div>
      <Table className="text-sm">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
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
          {companies.map((e) => {
            return (
              <TableRow key={e.id}>
                <TableCell className="w-10">
                  <Link href={"/companies/" + e.id.toString()}>
                    <Button className="px-3 py-3">To Detail Page</Button>
                  </Link>
                </TableCell>
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
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
