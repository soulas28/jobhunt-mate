"use server";
import { FieldGroup, FieldSet, Field, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import { addCompany } from "@/lib/data-access";
import Header from "@/components/Header";
import { Textarea } from "@/components/ui/textarea";

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
      <Header title="Add New Company" />
      <form action={add}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel className="text-sm py-2">会社名</FieldLabel>
                <Input name="name"></Input>
                <FieldLabel className="text-sm py-2">ランク</FieldLabel>
                <Input name="rank"></Input>
                <FieldLabel className="text-sm py-2">ステータス</FieldLabel>
                <Input name="status"></Input>
                <FieldLabel className="text-sm py-2">mypage</FieldLabel>
                <Input name="mypageurl"></Input>
                <FieldLabel className="text-sm py-2">mypageid</FieldLabel>
                <Input name="mypageid"></Input>
                <FieldLabel className="text-sm py-2">
                  オファー元サイト
                </FieldLabel>
                <Input name="offeredfrom"></Input>
                <FieldLabel className="text-sm py-2">年収予定</FieldLabel>
                <Input name="salary"></Input>
                <div className="flex gap-4">
                  <div className="flex">
                    <FieldLabel className="text-sm" htmlFor="canSide">
                      副業 :　
                    </FieldLabel>
                    <Checkbox name="canSide" className="py-1" />
                  </div>
                  <div className="flex">
                    <FieldLabel className="text-sm" htmlFor="canRemote">
                      リモート :　
                    </FieldLabel>
                    <Checkbox name="canRemote" className="py-1" />
                  </div>
                  <div className="flex">
                    <FieldLabel className="text-sm" htmlFor="haveProduct">
                      自社開発 :　
                    </FieldLabel>
                    <Checkbox name="haveProduct" />
                  </div>
                  <div className="flex">
                    <FieldLabel className="text-sm" htmlFor="haveSecurity">
                      セキュリティ : 　
                    </FieldLabel>
                    <Checkbox name="haveSecurity" />
                  </div>
                </div>
                <FieldLabel className="text-sm py-2">平均残業時間</FieldLabel>
                <Input name="avgOvertime"></Input>
                <FieldLabel className="text-sm py-2">そのほかメモ</FieldLabel>
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
