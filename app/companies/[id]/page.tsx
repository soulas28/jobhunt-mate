import { getCompanyFromId } from "@/lib/data-access";

export default async function Home({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const company = await getCompanyFromId(parseInt((await params).id));
  console.log(company);

  return (
    <div>
      {company !== null ? (
        <main>
          <h1>{company.name}</h1>
          <h2>tier : {company.rank}</h2>
          <p>id : {company.id}</p>
          <p>ステータス</p>
          <h2>TODO</h2>
          <h3>応募</h3>
          <h2>予約</h2>
          <h3>1945/04/04~ MTG</h3>
          <p>マイページ : {company.mypageUrl}</p>
          <p>マイページID : {company.mypageId}</p>
          <p>オファー元 : {company.offeredFrom}</p>
          <p>年収 : {company.salary}</p>
          <p>
            副業可 : {company.canSideJob ? "Y" : "N"} リモート可 :{" "}
            {company.canRemote ? "Y" : "N"} 自社開発 :{" "}
            {company.haveOwnProduct ? "Y" : "N"} セキュリティ :{" "}
            {company.haveSecurity ? "Y" : "N"}
          </p>
          <p>平均残業時間 : {company.avgOvertime}</p>
          <p>備考 : {company.note}</p>
          <p>作成日時 : {company.createdAt.toLocaleString("ja-jp")}</p>
          <p>更新日時 : {company.updatedAt.toLocaleString("ja-jp")}</p>
        </main>
      ) : (
        <p>none</p>
      )}
    </div>
  );
}
