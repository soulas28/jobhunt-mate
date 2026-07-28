import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCompanyFromId, getTodos } from "@/lib/data-access";
import Link from "next/link";
import Header from "../../components/Header";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    showall?: string;
  }>;
}) {
  const companies = await getTodos();
  const showall = await (await searchParams).showall;

  return (
    <main>
      <Header title="TODO" />
      <div className="flex">
        <Link href={`/todo${showall === "true" ? "" : "?showall=true"}`}>
          <Button className="right-0 px-10 py-5 text-lg mb-5 justify-end">
            {showall === "true" ? "Hide" : "ShowAll"}
          </Button>
        </Link>
      </div>
      <Table className="text-sm">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>ID</TableHead>
            <TableHead>会社名</TableHead>
            <TableHead>締切</TableHead>
            <TableHead>タイトル</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map(async (e) => {
            if (showall !== "true" && e.is_completed) return;
            const companyName =
              (await getCompanyFromId(e.company_id))!.name || "None";
            return (
              <TableRow key={e.id}>
                <TableCell className="w-10">
                  <Link href={"/todo/" + e.id.toString()}>
                    <Button className="px-3 py-3">To Detail Page</Button>
                  </Link>
                </TableCell>
                <TableCell>{e.id}</TableCell>
                <TableCell>{companyName}</TableCell>
                <TableCell>{e.deadline.toLocaleString("ja-JP")}</TableCell>
                <TableCell>{e.title}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
