import { FieldGroup, FieldSet, Field, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel>会社名</FieldLabel>
                <Input></Input>
                <FieldLabel>ランク</FieldLabel>
                <Input></Input>
                <FieldLabel>ステータス</FieldLabel>
                <Input></Input>
                <FieldLabel>TODO</FieldLabel>
                <Input></Input>
                <FieldLabel>応募</FieldLabel>
                <Input></Input>
                <FieldLabel>予約</FieldLabel>
                <Input></Input>
                <FieldLabel>mypage</FieldLabel>
                <Input></Input>
                <FieldLabel>mypageid</FieldLabel>
                <Input></Input>
                <FieldLabel>オファー元サイト</FieldLabel>
                <Input></Input>
                <FieldLabel>年収予定</FieldLabel>
                <Input></Input>
                <FieldLabel>副業</FieldLabel>
                <Checkbox />
                <FieldLabel>リモート</FieldLabel>
                <Checkbox />
                <FieldLabel>自社開発</FieldLabel>
                <Checkbox />
                <FieldLabel>セキュリティ</FieldLabel>
                <Checkbox />
                <Input></Input>
                <FieldLabel>平均残業時間</FieldLabel>
                <Input></Input>
                <FieldLabel>そのほかメモ</FieldLabel>
                <Input></Input>
                <Button variant="outline">Submit</Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  );
}
