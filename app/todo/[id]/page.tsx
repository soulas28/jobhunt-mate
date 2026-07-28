import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { getCompanyFromId, getTodoFromId } from "@/lib/data-access";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const todo = await getTodoFromId(parseInt((await params).id));
  const companyName = (await getCompanyFromId(parseInt((await params).id)))
    ?.name;

  return (
    <div>
      <Header title="Company Detail" />
      {todo !== null ? (
        <main>
          <div className="flex">
            <Link href={`/todo/${todo.id.toString()}/edit`}>
              <Button>Modify</Button>
            </Link>
          </div>
          <h1 className="text-4xl py-2">{todo.title}</h1>
          <p className="py-2">id : {todo.id}</p>
          <p className="py-2">{companyName}</p>
          <p className="py-2">
            ステータス : {todo.is_completed ? "完了済み" : "未完了"}
          </p>
          <p className="py-2">締切 : {todo.deadline.toLocaleString("ja-JP")}</p>
          <p className="py-2">
            メモ : <br />
            {todo.note}
          </p>
        </main>
      ) : (
        <p>none</p>
      )}
    </div>
  );
}
