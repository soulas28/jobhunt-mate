"use server";
import { FieldGroup, FieldSet, Field, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  updateCompany,
  getCompanyFromId,
  statusItems,
  rankItems,
} from "@/lib/data-access";
import Header from "@/components/Header";
import { Textarea } from "@/components/ui/textarea";
import { redirect } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const company = await getCompanyFromId(parseInt((await params).id));
  const update = async (formData: FormData) => {
    "use server";

    // validation
    if (!formData.get("name")) return;
    if (!formData.get("rank")) return;
    if (!formData.get("status")) return;

    await updateCompany({
      // must (brank strings are logically unreachable)
      id: parseInt((await params).id),
      name: formData.get("name")?.toString() || "",
      rank: formData.get("rank")?.toString() || "",
      status: formData.get("status")?.toString() || "",

      // not have to
      mypageUrl: formData.get("mypageurl")?.toString() || "",
      mypageId: formData.get("mypageid")?.toString() || "",
      offeredFrom: formData.get("offeredfrom")?.toString() || "",
      salary: formData.get("salary")?.toString() || "",
      canSideJob: formData.get("canSide")?.toString() === "on",
      canRemote: formData.get("canRemote")?.toString() === "on",
      haveOwnProduct: formData.get("haveProduct")?.toString() === "on",
      haveSecurity: formData.get("haveSerucity")?.toString() === "on",
      avgOvertime: parseInt(formData.get("avgOvertime")?.toString() || "-1"),

      note: formData.get("note")?.toString() || "",
    });
    redirect("../"); // to update fields with newest info. without this, old info will be shown in the page.
  };

  return (
    <div>
      <Header title={"Edit Company"} />
      <form action={update}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel className="text-sm py-2">会社名</FieldLabel>
                <Input name="name" defaultValue={company?.name}></Input>
                <FieldLabel className="text-sm py-2">ランク</FieldLabel>
                <Select
                  items={rankItems}
                  name="rank"
                  defaultValue={company?.rank}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="rank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {rankItems.map((e) => (
                        <SelectItem key={e.value} value={e.value}>
                          {e.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FieldLabel className="text-sm py-2">ステータス</FieldLabel>
                <Select
                  items={statusItems}
                  name="status"
                  defaultValue={company?.status}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {statusItems.map((e) => (
                        <SelectItem key={e.value} value={e.value}>
                          {e.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FieldLabel className="text-sm py-2">mypage</FieldLabel>
                <Input
                  name="mypageurl"
                  defaultValue={company?.mypageUrl || ""}
                ></Input>
                <FieldLabel className="text-sm py-2">mypageid</FieldLabel>
                <Input
                  name="mypageid"
                  defaultValue={company?.mypageId || ""}
                ></Input>
                <FieldLabel className="text-sm py-2">
                  オファー元サイト
                </FieldLabel>
                <Input
                  name="offeredfrom"
                  defaultValue={company?.offeredFrom || ""}
                ></Input>
                <FieldLabel className="text-sm py-2">年収予定</FieldLabel>
                <Input
                  name="salary"
                  defaultValue={company?.salary || ""}
                ></Input>
                <div className="flex gap-4">
                  <div className="flex">
                    <FieldLabel className="text-sm" htmlFor="canSide">
                      副業 :　
                    </FieldLabel>
                    <Checkbox
                      name="canSide"
                      className="py-1"
                      defaultChecked={company?.canSideJob || false}
                    />
                  </div>
                  <div className="flex">
                    <FieldLabel className="text-sm" htmlFor="canRemote">
                      リモート :　
                    </FieldLabel>
                    <Checkbox
                      name="canRemote"
                      className="py-1"
                      defaultChecked={company?.canRemote || false}
                    />
                  </div>
                  <div className="flex">
                    <FieldLabel className="text-sm" htmlFor="haveProduct">
                      自社開発 :　
                    </FieldLabel>
                    <Checkbox
                      name="haveProduct"
                      defaultChecked={company?.haveOwnProduct || false}
                    />
                  </div>
                  <div className="flex">
                    <FieldLabel className="text-sm" htmlFor="haveSecurity">
                      セキュリティ : 　
                    </FieldLabel>
                    <Checkbox
                      name="haveSecurity"
                      defaultChecked={company?.haveSecurity || false}
                    />
                  </div>
                </div>
                <FieldLabel className="text-sm py-2">平均残業時間</FieldLabel>
                <Input
                  name="avgOvertime"
                  defaultValue={company?.avgOvertime || ""}
                ></Input>
                <FieldLabel className="text-sm py-2">そのほかメモ</FieldLabel>
                <Textarea
                  name="note"
                  rows={10}
                  defaultValue={company?.note || ""}
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
