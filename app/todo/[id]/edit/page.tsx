"use server";
import { FieldGroup, FieldSet, Field, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { updateTodo, getTodoFromId } from "@/lib/data-access";
import Header from "@/components/Header";
import { Textarea } from "@/components/ui/textarea";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const currentTodo = await getTodoFromId(parseInt((await params).id));

  const add = async (formData: FormData) => {
    "use server";

    // validation
    if (!formData.get("title")) return;
    if (!formData.get("deadline")) return;

    console.log("test");
    await updateTodo({
      id: parseInt((await params).id),
      company_id: parseInt((await params).id),
      title: formData.get("title")!.toString(),
      deadline: new Date(formData.get("deadline")!.toString()),
      note: formData.get("note")?.toString() || "",
    });
    redirect("../");
  };

  return (
    <div>
      <Header title="Edit TODO" />
      <form action={add}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel className="text-sm py-2">タイトル</FieldLabel>
                <Input name="title" defaultValue={currentTodo?.title} />
                <FieldLabel className="text-sm py-2">締め切り</FieldLabel>
                <Input
                  name="deadline"
                  defaultValue={currentTodo?.deadline.toLocaleString("ja-JP")}
                />
                <FieldLabel className="text-sm py-2">内容</FieldLabel>
                <Textarea
                  name="note"
                  rows={10}
                  defaultValue={currentTodo?.note || ""}
                />
                <Button variant="outline" type="submit">
                  Submit
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  );
}
