import PageTitle from "@components/commons/page-title";

export function Form() {
  return (
    <div className="w-full space-y-4">
      <PageTitle title="Формууд" desc="Системийн формын бүрдэл хэсгүүд" />
      <div className="p-8 text-center">
        <p className="text-muted-foreground">Формуудын жишээ энд харагдана</p>
      </div>
    </div>
  );
}
