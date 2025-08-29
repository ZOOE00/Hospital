import PageTitle from "@components/commons/page-title";

export function Modals() {
  return (
    <div className="w-full space-y-4">
      <PageTitle title="Модалууд" desc="Системийн модалын бүрдэл хэсгүүд" />
      <div className="p-8 text-center">
        <p className="text-muted-foreground">Модалуудын жишээ энд харагдана</p>
      </div>
    </div>
  );
}
