import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-bright-orange/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-bright-orange rounded-full flex items-center justify-center">
              <Icon name="Baby" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-rubik text-gray-800">
                ИгроРазвивайка
              </h1>
              <p className="text-sm text-gray-600 font-open-sans">
                Игровые технологии для развития
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              className="font-open-sans text-gray-700 hover:text-bright-orange"
            >
              О проекте
            </Button>
            <Button
              variant="ghost"
              className="font-open-sans text-gray-700 hover:text-bright-orange"
            >
              0-3 года
            </Button>
            <Button
              variant="ghost"
              className="font-open-sans text-gray-700 hover:text-bright-orange"
            >
              3-5 лет
            </Button>
            <Button
              variant="ghost"
              className="font-open-sans text-gray-700 hover:text-bright-orange"
            >
              5-7 лет
            </Button>
            <Button
              variant="ghost"
              className="font-open-sans text-gray-700 hover:text-bright-orange"
            >
              Советы экспертов
            </Button>
            <Button
              variant="ghost"
              className="font-open-sans text-gray-700 hover:text-bright-orange"
            >
              Контакты
            </Button>
          </nav>

          <Button className="md:hidden" variant="ghost" size="sm">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
}
