import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>БД</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Батбаяр Доржжантагва
          </p>
          <p className="text-sm text-muted-foreground">
            Урьдчилан сэргийлэх үзлэг
          </p>
        </div>
        <div className="ml-auto font-medium">Өнөөдөр</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>ЦБ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Цэцэг Баярмагнай</p>
          <p className="text-sm text-muted-foreground">Хэвтэн эмчилгээ</p>
        </div>
        <div className="ml-auto font-medium">Өчигдөр</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>ГО</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ганбаатар Өнөрбаяр</p>
          <p className="text-sm text-muted-foreground">
            Тоног төхөөрөмжийн засвар
          </p>
        </div>
        <div className="ml-auto font-medium">2 хоногийн өмнө</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>МЗ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Мөнхбат Золбоо</p>
          <p className="text-sm text-muted-foreground">Өвчний оношлогоо</p>
        </div>
        <div className="ml-auto font-medium">3 хоногийн өмнө</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>ОС</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Отгонбаяр Сүрэнжав</p>
          <p className="text-sm text-muted-foreground">
            Урьдчилан сэргийлэх үзлэг
          </p>
        </div>
        <div className="ml-auto font-medium">1 долоо хоногийн өмнө</div>
      </div>
    </div>
  );
}
