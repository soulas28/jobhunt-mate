import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { getCompanyFromId } from "@/lib/data-access";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const company = await getCompanyFromId(parseInt((await params).id));
  console.log(company);

  return (
    <div>
      <Header title="Company Detail" />
      {company !== null ? (
        <main>
          <div className="flex">
            <Link href={`/companies/${company.id.toString()}/edit`}>
              <Button>Modify</Button>
            </Link>
          </div>
          <h1 className="text-4xl py-2">{company.name}</h1>
          <h2 className="text-2xl py-2">tier : {company.rank}</h2>
          <p className="py-2">id : {company.id}</p>
          <p className="py-2">ステータス</p>
          <h2 className="py-2">TODO</h2>
          <h3 className="py-2">応募</h3>
          <h2 className="py-2">予約</h2>
          <h3 className="py-2">1945/04/04~ MTG</h3>
          <p className="py-2">
            マイページ :
            <a
              className="ml-5"
              href={"https://" + company.mypageUrl}
              target="_blank"
            >
              <Button>{company.mypageUrl}</Button>
            </a>
          </p>
          <p className="py-2">マイページID : {company.mypageId}</p>
          <p className="py-2">オファー元 : {company.offeredFrom}</p>
          <p className="py-2">年収 : {company.salary}</p>
          <p className="py-2">
            副業可 : {company.canSideJob ? "Y" : "N"} リモート可 :{" "}
            {company.canRemote ? "Y" : "N"} 自社開発 :{" "}
            {company.haveOwnProduct ? "Y" : "N"} セキュリティ :{" "}
            {company.haveSecurity ? "Y" : "N"}
          </p>
          <p className="py-2">平均残業時間 : {company.avgOvertime}</p>
          <p className="py-2">備考 : {company.note}</p>
          <p className="py-2">
            作成日時 : {company.createdAt.toLocaleString("ja-jp")}
          </p>
          <p className="py-2">
            更新日時 : {company.updatedAt.toLocaleString("ja-jp")}
          </p>
        </main>
      ) : (
        <p>none</p>
      )}
    </div>
  );
}
