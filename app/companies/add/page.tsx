"use server";
import { FieldGroup, FieldSet, Field, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import { addCompany } from "@/lib/data-access";

export default async function Home() {
  const add = async (formData: FormData) => {
    "use server";

    console.log(formData.get("canSide"));
    // validation
    if (!formData.get("name")) return;
    if (!formData.get("rank")) return;

    await addCompany({
      // must (brank strings are logically unreachable)
      name: formData.get("name")?.toString() || "",
      rank: formData.get("rank")?.toString() || "",

      // not have to
      mypageUrl: formData.get("mypageurl")?.toString() || "",
      mypageId: formData.get("mypageid")?.toString() || "",
      offeredFrom: formData.get("rank")?.toString() || "",
      salary: formData.get("salary")?.toString() || "",
      canSideJob: formData.get("canSide")?.toString() === "on",
      canRemote: formData.get("canRemote")?.toString() === "on",
      haveOwnProduct: formData.get("haveProduct")?.toString() === "on",
      haveSecurity: formData.get("haveSerucity")?.toString() === "on",
      avgOvertime: parseInt(formData.get("avgOvertime")?.toString() || "-1"),

      note: formData.get("note")?.toString() || "",
    });
  };

  return (
    <div>
      <form action={add}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel>会社名</FieldLabel>
                <Input name="name"></Input>
                <FieldLabel>ランク</FieldLabel>
                <Input name="rank"></Input>
                <FieldLabel>ステータス</FieldLabel>
                <Input name="status"></Input>
                <FieldLabel>mypage</FieldLabel>
                <Input name="mypageurl"></Input>
                <FieldLabel>mypageid</FieldLabel>
                <Input name="mypageid"></Input>
                <FieldLabel>オファー元サイト</FieldLabel>
                <Input name="offeredfrom"></Input>
                <FieldLabel>年収予定</FieldLabel>
                <Input name="salary"></Input>
                <FieldLabel>副業</FieldLabel>
                <Checkbox name="canSide" />
                <FieldLabel>リモート</FieldLabel>
                <Checkbox name="canRemote" />
                <FieldLabel>自社開発</FieldLabel>
                <Checkbox name="haveProduct" />
                <FieldLabel>セキュリティ</FieldLabel>
                <Checkbox name="haveSecurity" />
                <FieldLabel>平均残業時間</FieldLabel>
                <Input name="avgOvertime"></Input>
                <FieldLabel>そのほかメモ</FieldLabel>
                <Input name="note"></Input>
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
