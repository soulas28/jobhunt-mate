"use server";
import { FieldGroup, FieldSet, Field, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { addTodo } from "@/lib/data-access";
import Header from "@/components/Header";
import { Textarea } from "@/components/ui/textarea";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const add = async (formData: FormData) => {
    "use server";

    // validation
    if (!formData.get("title")) return;
    if (!formData.get("deadline")) return;

    console.log("test");
    await addTodo({
      company_id: parseInt((await params).id),
      title: formData.get("title")!.toString(),
      deadline: new Date(formData.get("deadline")!.toString()),
      note: formData.get("note")?.toString() || "",
      application_id: -1,
    });
  };

  return (
    <div>
      <Header title="Add New TODO" />
      <form action={add}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel className="text-sm py-2">タイトル</FieldLabel>
                <Input name="title" />
                <FieldLabel className="text-sm py-2">締め切り</FieldLabel>
                <Input name="deadline" />
                <FieldLabel className="text-sm py-2">内容</FieldLabel>
                <Textarea name="note" rows={10} />
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
