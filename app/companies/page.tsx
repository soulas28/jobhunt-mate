import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
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
            <TableRow>
              <TableCell>0001</TableCell>
              <TableCell>S</TableCell>
              <TableCell>IS応募済み</TableCell>
              <TableCell>ABC株式会社</TableCell>
              <TableCell>なし</TableCell>
              <TableCell>なし</TableCell>
              <TableCell>mypage.example.com</TableCell>
              <TableCell>Agent ABC</TableCell>
              <TableCell>1,0000,000 JPY ~</TableCell>
              <TableCell>Y</TableCell>
              <TableCell>Y</TableCell>
              <TableCell>Y</TableCell>
              <TableCell>N</TableCell>
              <TableCell>1500h/m</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
