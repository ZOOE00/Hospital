import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

export function SettingsPage() {
  return (
    <div className="flex-1 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Тохиргоо</CardTitle>
        </CardHeader>
        <CardContent>
          Нөөцлөлт, сүлжээ/хост тохиргоо, хувилбар шинэчлэл, 2FA/SSL — placeholder
        </CardContent>
      </Card>
    </div>
  );
}
